var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var path = require('path');
var fs = require('fs');
var path = require('path');
var uuid = require('uuid')
var qiniu = require('qiniu');
var config = require('../config/config')
var qiniuToken = require('../common/story')
var router = express.Router();

router.use(bodyParser.urlencoded({
	extended: true
}))
router.use(bodyParser.json())




var upload = multer({
	dest:'./public'
})
router.use(upload.any())

router.post('/', (req, res) => {
	let uploadPath = req.files[0].path //上传路径
	let originalname = req.files[0].originalname //上传原文件名
	let newName = uploadPath + path.parse(originalname).ext //上传路径 增加文件类型
	
	fs.rename(uploadPath, newName, function(err, data) {
		let qiniuConf = new qiniu.conf.Config();
		qiniuConf.zone = qiniu.zone.Zone_z2;
		var formUploader = new qiniu.form_up.FormUploader(qiniuConf);
		var putExtra = new qiniu.form_up.PutExtra();
		formUploader.putFile(qiniuToken().uptoken, qiniuToken().key, newName, putExtra, function(respErr,respBody, respInfo) {
			if (respErr) {
				throw respErr;
			}
			if (respInfo.statusCode == 200) {
				console.log(respBody)
				let imgUrl=qiniuToken().domain+'/'+respBody.key
				fs.unlinkSync(newName);//删除
				res.send({status:'200',msg:'上传成功',imageUrl:imgUrl})
			} else {
				res.send({status:'404',msg:'上传失败'})
			}
		});
		
	})
})
module.exports = router
