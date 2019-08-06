var express=require('express');
var bodyParser = require('body-parser');
var router=express.Router();
var mysql=require('mysql');
var sql=require('../db');

// router.use(bodyParser.urlencoded({
// 	extended: false
// }))
// 
router.use(bodyParser.json())
router.post('/',function (req,res) {
	console.log(req.body) 
	let userName=req.body.userName
	let passWord=req.body.passWord
	var sqlStr=`SELECT * FROM user_table WHERE userName="${req.body.userName}"`;
	
	sql.sql(sqlStr,(err,data)=>{
		console.log(err,data)
		if(err){
			console.log(err)
			res.status(404).send('error').end()
		}else{
			if(data.length==0){
				sql.sql(`insert into user_table (userName,passWord) values ('${userName}','${passWord}')`,(err,data)=>{
					if(err){
						res.status(404).send({msg:"注册失败"}).end()
					}else{
						res.status(200).send({msg:"注册成功",userName:userName,passWord:passWord}).end()
					}
				})
				// res.status(404).send({msg:"用户名不存在"}).end()
			}else if(passWord!=data[0].passWord){
				res.status(404).send({msg:"登录密码错误"}).end()
			}else{
				res.send({msg:'登录成功'})
			}
		}
		
	})
})
module.exports = router;