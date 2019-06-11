# file-map

> 遍历指目录

## 输入

- ignores&lt;array&gt; 不需要被遍历的文件或文件夹 支持正则
- path&lt;string&gt;  可以指定起始路径,默认执行命令所在路径
- filesLevel&lt;number&gt; 文件遍历深度,默认为1
- dirLevel&lt;number&gt;  文件夹遍历深度,默认为1

## 返回值

- files&lt;array&gt; 遍历到的文件 path
- dirs&lt;array&gt; 遍历到的文件夹 path
- ignoreFiles&lt;array&gt; 不需要被遍历的文件或文件夹 支持正则