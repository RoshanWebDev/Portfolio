import fs from 'fs';
const content = fs.readFileSync('index.html', 'utf8');
const fixed = content.split('\n').map(line => line.replace(/^\d+:\s?/, '')).join('\n');
fs.writeFileSync('index.html', fixed);
console.log("Fixed!");
