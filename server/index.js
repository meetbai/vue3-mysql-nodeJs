var express = require('express');
var login = require("./api/login");
var upload = require("./api/upload");
var infoDetail = require("./api/infoDetail");
var app = express();

//后端路由
app.use('/api/login', login)
app.use('/api/upload', upload)
app.use('/api/infoDetail', infoDetail)

//监听端口
app.listen(3000)

console.log('success listen at port:3000......');
