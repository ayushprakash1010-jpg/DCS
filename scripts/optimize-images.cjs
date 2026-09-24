const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, '..', 'public', 'images');
const rootDir = path.join(__dirname, '..', 'public');

async function convertDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file.endsWith('.jpg')) {
      const inputPath = path.join(dir, file);
      const outputPath = path.join(dir, file.replace('.jpg', '.webp'));
      
      try {
        await sharp(inputPath)
          .webp({ quality: 80 }) // 80% quality drastically reduces file size with imperceptible visual loss
          .toFile(outputPath);
        console.log(`Converted ${file}`);
        
        // Delete original jpg
        fs.unlinkSync(inputPath);
      } catch (err) {
        console.error(`Error converting ${file}:`, err);
      }
    }
  }
}

async function run() {
  await convertDir(imgDir);
  await convertDir(rootDir); // for favicon.jpg
}

run();
