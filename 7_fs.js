// SYNCHRONOUS

const { readFileSync, writeFileSync } = require("fs");

const text = readFileSync("./content/filesystem.txt", "utf8");
console.log(text);

// if file doenot exists create and
// write.If file exists replace the content

writeFileSync("./content/write-sync.txt", `Write file sucess`);

// if file doenot exists create and
// write.append the data in the file if the file exists.
writeFileSync("./content/write-sync.txt", `Write file sucess`, { flag: "a" });

// ASYNCHRONOUS

const { readFile, writeFile } = require("fs");

readFile("./content/async.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  writeFile(
    "./content/write-async.txt",
    ` Async writing sucessfully done.${result}`,
    { flag: "a" },
    (err, res) => {
      if (err) {
        console.log(err);
        return;
      }
    }
  );
});
