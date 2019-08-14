var express = require('express');
var router = express.Router()
var bodyParser = require('body-parser');
var mysql = require('mysql');
var sql = require('../db')


router.get('/', (req, res) => {
	let userName = req.query.userName
	let type = req.query.type
	let sqlStr=''
	
	
	if(type=="list"){
		sqlStr=`select * from userInfo_table`
	}else if(type=="detail"){
		sqlStr=`select * from userInfo_table where userName='${userName}'`
	}
	console.log(sqlStr)
	sql.sql(sqlStr, (err, data) => {
		if (err) {
			res.send({
				status: '404',
				msg: '提交失败:'+err.sqlMessage
			})
		}else{
			console.log(data)
			res.send({
				status: '200', 
				msg: 'sucess',
				info:data
			})
		}
	})
})
module.exports = router;
