const path = require('path');
const readline = require('readline');
const { exec } = require('child_process');
const generate = require('./src/index.js')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'sunshine> ',
});

const ignores = [
  /config$/,
  /tools$/,
  /basepage$/,
];
const p = `${process.cwd()}${path.sep}`;
generate({
  ignores,
  path: p,
  // filesLevel: 1,
  // dirLevel: 1,
}).then((res)=>{
  const {
    dirs,
  } = res;
  const cmds = dirs.map((item) => {
    // 根据目录名称 返回需要执行的脚本
    return `ls`;
  });
  print(cmds);
  getIndexFromConsoleAndExec(cmds, '请输入对应的序号:');
});

function print(cmds) {
  cmds.map((item, index)=>{
    console.log(index.toString().padEnd(2, ' '),': ', item);
  });
}

function getIndexFromConsoleAndExec(cmds, tip) {
  console.log(tip);
  rl.prompt();
  rl.on('line', function(line){ 
    const index = parseInt(line);
    if(index >= 0 && index < cmds.length) {
      rl.close();
      console.log(cmds[index]);
      const cp = exec(cmds[index]);
      cp.stdout.on('data', function (data) {
          console.log(data);
      });
      cp.stderr.on('data', function (data) {
          console.log(data);
      });
    } else {
      getIndexFromConsoleAndExec(cmds,`输入的序号(原输入为: ${index})不正确,请重新输入:`)
    }
  });
}