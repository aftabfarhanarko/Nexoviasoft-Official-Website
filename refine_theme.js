const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

const oldPurple = '#9b2c86';
const oldMid = '#c95d52';
const oldOrange = '#f58a20';

const newPurple = '#d946ef'; // Fuchsia 500
const newMid = '#f43f5e';    // Rose 500
const newOrange = '#f97316'; // Orange 500

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Enhance text vibrancy: turn solid dark purple text into a vibrant gradient!
  // Note: we only want to do this for generic text highlights, not inside bg-clip-text already
  content = content.replace(/text-\[#9b2c86\]/g, `text-transparent bg-clip-text bg-gradient-to-r from-[${newPurple}] to-[${newOrange}]`);

  // Replace all other hex instances
  // Because they might be in brackets like bg-[#9b2c86] or just raw hex in components
  const regexPurple = new RegExp(oldPurple, 'gi');
  const regexMid = new RegExp(oldMid, 'gi');
  const regexOrange = new RegExp(oldOrange, 'gi');

  content = content.replace(regexPurple, newPurple);
  content = content.replace(regexMid, newMid);
  content = content.replace(regexOrange, newOrange);

  // Also replace RGBA shadows that were using oldPurple
  content = content.replace(/rgba\(155,44,134,/g, `rgba(217,70,239,`);

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Refined:', filePath);
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
console.log('Theme refinement complete.');
