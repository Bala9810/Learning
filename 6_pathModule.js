const path=require("path")

console.log(path.sep);

// joining path
const joinPath=path.join ("/path","file.js")
console.log(joinPath);

const base=path.basename(joinPath);
console.log("base",base);


const absolutePath=path.resolve(__dirname,"path","file.js");
console.log("absolute",absolutePath);

console.log("relativepath",path.relative(__dirname,"path","file.js"));

console.log("extension name",path.extname(base))

console.log(path.parse(joinPath));

