var express=require('express');
var login=require("./api/login");
var app=express();

//后端路由
app.use('/api/login',login)

//监听端口
app.listen(3000)

console.log('success listen at port:3000......');