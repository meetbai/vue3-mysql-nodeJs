var express=require('express');
var bodyParser=require('body-parser');
var multer=require('multer');
var path=require('path');
var fs=require('fs');
var path = require('path');
// var uuid=require('uuid')
// var qiniu = require('qiniu');
// var config=require('../config/config')
// var story=require('../common/story')
var router=express.Router();

router.use(bodyParser.urlencoded({extended:true}))
router.use(bodyParser.json())

// router.post('/uptoken', function(req, res) {
// 	story((data)=>{
// 		res.json(data);
// 	})
//      // res.send({'msg':"上传成功"})
// });




// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './public')
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + '-' + Date.now())
//   }
// })
// var storage = multer.memoryStorage()

var upload=multer({
	dest: './public'
})
router.use(upload.any())

router.post('/',(req,res)=>{
	// console.log("999",__dirname)
	// console.log("test->1",req.body)
	console.log("test->2",req.files[0])
	console.log("test->2",req.files[0].buffer)
	let uploadPath = req.files[0].path //上传路径
	let originalname = req.files[0].originalname //上传原文件名
	let newName = uploadPath + path.parse(originalname).ext //上传路径 增加文件类型
	console.log("test->3",uploadPath, newName)
	fs.rename(uploadPath, newName, function(err,data) {
		console.log("上传成功",err,data)
		res.send({'msg':"上传成功"})
	})
	// res.send({'msg':"上传成功"})
	
})
module.exports=router