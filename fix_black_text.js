const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Find all className strings.
  // We'll use a regex that captures className="..." or className={`...`}
  const classNameRegex = /className=(["'`])(?:(?=(\\?))\2.)*?\1/g;
  
  content = content.replace(classNameRegex, (match) => {
    // If the class string contains our brand gradient, OR our brand fuchsia color
    if (match.includes('#d946ef')) {
      // Replace text-black with text-white
      return match.replace(/\btext-black\b/g, 'text-white');
    }
    return match;
  });

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Fixed contrast:', filePath);
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
console.log('Contrast fix complete.');
