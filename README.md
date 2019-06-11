# file-map

> 遍历指目录

## 输入

- ignores<array> 不需要被遍历的文件或文件夹 支持正则
- path<string>  可以指定起始路径,默认执行命令所在路径
- filesLevel<number> 文件遍历深度,默认为1
- dirLevel<number>  文件夹遍历深度,默认为1

## 返回值

- files<array> 遍历到的文件 path
- dirs<array> 遍历到的文件夹 path
- ignoreFiles<array> 不需要被遍历的文件或文件夹 支持正则