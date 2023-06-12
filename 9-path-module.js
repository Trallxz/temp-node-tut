const path = require('path')

console.log(path.sep)

// \

const filePath = path.join('/content/','subfolder','test.txt')
console.log(filePath);

// \content\subfolder\test.txt, vad du anger.

const base = path.basename(filePath)
console.log(base);

// test.txt, bara den senaste.

const absolute = path.resolve(__dirname, 'content','subfolder','test.txt')
console.log(absolute)

// C:\Code\nodeproject\content\subfolder\test.txt, hela fadderullan.