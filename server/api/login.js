var express=require('express');
var bodyParser = require('body-parser');
var router=express.Router();
var mysql=require('mysql');
var mysqlModel=require('../db');

var pool=mysql.createPool(mysqlModel.mysql);
router.post('/',function (req,res) {
	pool.getConnection((err,connection)=>{
		var sql='select * from login';
		if(err){
			throw err;
			return
		}
		connection.query(sql,(err, result)=>{
			if (err) {
				console.log("queryError",err.message)
				return
			}
			if (result) {
			    console.log(result);
			    res.json(result[0]);
			    connection.release();
			}
// 			console.log("result",result.length)
// 			result.forEach((k,v)=>{
// 				console.log("姓名:"+k['name'])
// 			})
		})
	})
})
module.exports = router;