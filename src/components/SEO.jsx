import { Helmet } from 'react-helmet-async'

export default function SEO({ title, description, url }) {
  const siteName = "Deepak Crane Service"
  const fullTitle = title ? `${title} | ${siteName}` : siteName
  
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{fullTitle}</title>
      <meta name='description' content={description} />
      
      {/* Open Graph tags for social media sharing */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      {url && <meta property="og:url" content={`https://deepakcraneservice.in${url}`} />}
      <meta property="og:site_name" content={siteName} />
      
      {/* Twitter cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  )
}
