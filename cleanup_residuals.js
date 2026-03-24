const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const newColor = '#f58a20';

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Replace variations of the old neon yellow
  content = content.replace(/#dce867/gi, newColor);
  content = content.replace(/#dce865/gi, newColor);

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated:', filePath);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walkDir(fullPath);
    } else if (/\.(js|jsx|ts|tsx)$/.test(file)) {
      processFile(fullPath);
    }
  }
}

walkDir(srcDir);
console.log('Done cleaning up residual colors.');
