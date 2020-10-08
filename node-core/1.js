//  node 和 前端的区别 前端里面有dom bom 服务端中没有 window

// 服务端中有global属性  全局对象 global可以循环引用
// 比较重要的
// process 进程
// Buffer 类型 来处理二进制文件
// clearInterval  clearTimeout
// setInterval  clearTimeout


// 浏览器以前的方法 还是可以使用的 只是不可以枚举出来
// console.log(Object.keys(global));

// process 默认取值会像global中查找（node 中有一个模块化系统，是以文件为单位，每个文件都是一个模块，模块中的this被更改了）

// process.platform 可以用这个属性来判断当前执行的系统环境 win32 window drain mac

// process.argv  第一个参数 node.exe 第二个参数 node当前执行文件 （解析用户自己传递的参数）

// process.cwd  当前用户的工作目录 current working directory

// process.env 环境变量

// process.nextTick 

// console.log(process.argv.slice(2))

// 在npm 上的模块都需要先安装再使用 （模块内部也提供几个属性，也可以在模块中直接访问 参数 ）

// let args = process.argv.slice(2);
// let obj = {};
// args.forEach((element,index) => {
//     if(element.startsWith('--')){
//         obj[element.slice(比如= args[index+1]
//     }
// });

// console.log(obj)


// const program = require('commander')
// program.option('--p,--port <v>', '设置你的端口')
//         .name('测试啊')
//         .command('created')
//         .action(()=>{
//             console.log('打印啊');
//         })
// let r = program.parse(process.argv);
// console.log(r)


// console.log(process.cwd()); 打印出来的路径
/* 
比如 直接运行的话 node 1.js
结果：/Users/yaoyan/Desktop/myCode/github/node/node-core

比如 运行的话 node node-core/1.js
结果：/Users/yaoyan/Desktop/myCode/github/node

*/

// console.log(__dirname)
/* 
    __dirname  当前文件的所在目录 这个目录 不能手动修改 固定的
    __dirname 代表当前文件所在的文件夹 它并不属于global ，而是每个模块独有的属性
*/
/* 
process.nextTick 微任务

*/




const fs = require('fs');
const path = require('path');

// 所有的方法都是同步方法、异步方法
// 同步：如果刚刚运行程序可以去使用同步的方法
// 异步： 开启一个服务监听客户端访问，就需要使用异步了  异步是非阻塞的

// 操作文件时 尽量使用 "绝对路径"  来进行操作
// 获取当前目录 process.cwd() 是可变的  __dirname 不可变的
console.log()
console.log(path.resolve('./README.md'));
console.log(path.resolve(__dirname,'./README.md')); // resolve 不能遇到 /
console.log(path.join(__dirname,'./README.md/')); // join是 拼接 如果有 / 可以用join
console.log(path.extname('./README.md'))  // 获取文件的扩展名 


const a = 10;
eval(`console.log(a)`);