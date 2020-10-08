// const ejs = require('ejs'); 
// const { renderFile } = require('ejs');
const fs = require('fs');
const path = require('path');

// ejs.renderFile(path.resolve(__dirname,'./template.html'),{name:'姚哥哥'},(err,data)=>{
//     console.log(data);
// })

const renderFile = (filePath,obj,cb) => {
    fs.readFile(filePath,'utf-8',function(err,html){
        // console.log(html)
        if(err){
            return cb(err,html);
        }
        // arguments[0]  就是匹配到的原字符串
        // arguments[1]  就是第一个括号
        html = html.replace(/\{\{([^}]+)\}\}/g,function(){
            let key = arguments[1].trim();
            return obj[key]; 
        });
        cb(err,html);
    })
}

renderFile(path.resolve(__dirname,'./myTemplate.html'),{name:'姚哥哥',age:25},(err,data)=>{
         console.log(data);
    })