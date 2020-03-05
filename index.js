const generateMarkdown = require("./utils/generateMarkdown");
const getData = require("./utils/getData")
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

async function writeToFile(fileName, data) {
    await writeFileAsync(fileName,data);
}

async function init() {
    let data,apiData,markdownStr;
    [data,apiData] = await getData();
    markdownStr = generateMarkdown(data,apiData);
    console.log("Writing file...")
    await writeToFile("./generated/README.md",markdownStr);
    console.log('File written! you can find it in the "generated" folder!')
}

init();
