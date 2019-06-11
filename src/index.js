const path = require('path');
const fs = require('fs');

const sep = path.sep;
const files = [];
const dirs = [];
const ignoreFiles = [];

let gFilesLevel;
let gDirLevel;

function generate(options = {}) {
  const {
    ignores = [],
    filesLevel = 1,
    dirLevel = 1,
    path = process.cwd(),
  } = options;
  gFilesLevel = filesLevel;
  gDirLevel = dirLevel;

  return new Promise((res, rej)=>{
    try {
      readdirSync(path, ignores, 0);
    } catch(e) {
      return rej(e);
    }
    return res({
      files,
      dirs,
      ignoreFiles,
    });
  })
}

function readdirSync(path, ignores, level) {
  const dir = fs.readdirSync(path);
  dir.map((item) => {
    const isIgnore = ignores.some((reg) => {
      return !!item.match(reg);
    })
    const p = `${path}${sep}${item}`;
    if(isIgnore) {
      ignoreFiles.push(p);
      return ;
    }
    const stats = fs.statSync(p)
    if(stats.isDirectory()) {
      if (level < gDirLevel) {
        dirs.push(p);
        readdirSync(p, ignores, level + 1);
      }
    } if(stats.isFile()) {
      if (level < gFilesLevel) {
        files.push(p);
      }
    }
  })
}

module.exports = generate;