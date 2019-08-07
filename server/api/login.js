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
	let act=req.body.act
	let sqlStr=''
	
	if(act=="login"){//登录
		sqlStr=`SELECT * FROM user_table WHERE userName="${req.body.userName}"`;
		sql.sql(sqlStr,(err,data)=>{
			console.log(err,data)
			if(err){
				console.log(err)
				res.status(404).send('error').end()
			}else{
				if(data.length==0){
					res.status(404).send({success:false,code:0,msg:"用户名不存在"})
				}else if(passWord!=data[0].passWord){
					res.status(404).send({success:false,code:0,msg:"登录密码错误"})
				}else{
					res.json({success:true,code:1,msg:'登录成功'})
				}
			}
			
		})
	}else if(act=="res"){//注册
		sqlStr=`insert into user_table (userName,passWord) values ('${userName}','${passWord}')`;
		sql.sql(sqlStr,(err,data)=>{
			if(err){
				res.status(404).send({success:false,code:0,msg:"注册失败"}).end()
			}else{
				res.status(200).send({success:true,code:0,msg:"注册成功"}).end()
			}
		})
	}
})
module.exports = router;