const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

const gradientFrom = '#9b2c86'; // Purple
const gradientVia = '#c95d52';  // Midpoint
const gradientTo = '#f58a20';   // Orange

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Process className strings to intelligently swap colors
  const classNameRegex = /className=(?:["']([^"']+)["']|{`([^`]+)`})/g;
  
  content = content.replace(classNameRegex, (match, p1, p2) => {
    let classesStr = p1 || p2;
    if (!classesStr) return match;

    let hasBg = classesStr.includes('bg-[#EFFC76]');
    if (hasBg) {
      // It's a solid bg color originally. We'll change it to a gradient.
      // But we must also change text-black to text-white if present because the gradient is dark.
      classesStr = classesStr.replace(/\btext-black\b/g, 'text-white');
      classesStr = classesStr.replace(/\bbg-\[#EFFC76\](?:\/\d+)?\b/g, `bg-gradient-to-r from-[${gradientFrom}] to-[${gradientTo}]`);
    }

    // Now do the rest of the replacements for border, text, etc.
    classesStr = classesStr.replace(/\bborder-\[#EFFC76\]/g, `border-[${gradientFrom}]`);
    // for text, maybe text-transparent bg-clip-text bg-gradient-to-r... is too long. Let's just use solid purple
    classesStr = classesStr.replace(/\btext-\[#EFFC76\]/g, `text-[${gradientFrom}]`);
    classesStr = classesStr.replace(/\bfrom-\[#EFFC76\]/g, `from-[${gradientFrom}]`);
    classesStr = classesStr.replace(/\bvia-\[#EFFC76\]/g, `via-[${gradientVia}]`);
    classesStr = classesStr.replace(/\bto-\[#EFFC76\]/g, `to-[${gradientTo}]`);
    classesStr = classesStr.replace(/\bshadow-\[#EFFC76\]/g, `shadow-[${gradientFrom}]`);
    classesStr = classesStr.replace(/rgba\(239,252,118,/g, `rgba(155,44,134,`); // Shadow RGBA replacements

    // Any remaining #EFFC76 inside brackets, like selection:bg-[#EFFC76]
    classesStr = classesStr.replace(/\[#EFFC76\]/g, `[${gradientFrom}]`);

    if (p1) {
      return `className="${classesStr}"`;
    } else {
      return `className={\`${classesStr}\`}`;
    }
  });

  // Also replace any random #EFFC76 occurrences in the file that aren't inside className
  // (e.g., inline styles, or custom components that take a hex string)
  content = content.replace(/#EFFC76/gi, gradientFrom);

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
console.log('Theme update complete.');
