const fs = require('fs');
const path = require('path');

console.log("--- 📂 CURRENT FILE STRUCTURE ---");

function scanFolder(dir, level = 0) {
    if (level > 2) return; // Don't go too deep
    try {
        const files = fs.readdirSync(dir);
        files.forEach(file => {
            if (file === 'node_modules' || file === '.git') return; // Ignore junk
            
            const fullPath = path.join(dir, file);
            const isDirectory = fs.statSync(fullPath).isDirectory();
            
            // Print the file/folder with indentation
            console.log('  '.repeat(level) + (isDirectory ? 'DIR: ' : 'FILE: ') + file);
            
            if (isDirectory) {
                scanFolder(fullPath, level + 1);
            }
        });
    } catch (err) {
        console.log("Error reading folder: " + dir);
    }
}

scanFolder(__dirname);
console.log("-------------------------------");
