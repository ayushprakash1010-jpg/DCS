import { useEffect, useRef } from 'react'

export function useScrollReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    )

    // Observe the element itself and all children with reveal classes
    const revealElements = el.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    revealElements.forEach((child) => observer.observe(child))

    return () => observer.disconnect()
  }, [])

  return ref
}

export function useCounter(containerRef) {
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let animated = false
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated) {
            animated = true
            const statNumbers = container.querySelectorAll('.stat-number[data-target]')
            statNumbers.forEach((stat) => {
              const target = parseInt(stat.getAttribute('data-target'))
              const suffix = stat.getAttribute('data-suffix') || '+'
              const duration = 2000
              const increment = target / (duration / 16)
              let current = 0
              const timer = setInterval(() => {
                current += increment
                if (current >= target) {
                  current = target
                  clearInterval(timer)
                }
                stat.textContent = Math.floor(current) + suffix
              }, 16)
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 }
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [containerRef])
}
