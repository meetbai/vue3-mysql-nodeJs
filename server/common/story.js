var qiniu = require('qiniu')
var config = require('../config/config')
var uuid = require('uuid')

//要上传的空间
const bucket = config.qiniu.Bucket;
//上传地址
const domain = config.qiniu.Domain

// // 创建鉴权对象
// var mac = new qiniu.auth.digest.Mac(config.qiniu.AK, config.qiniu.SK);
// 
// //要上传的空间
// var bucket = config.qiniu.Bucket;
// //上传到七牛后保存的文件名
// var key = uuid.v4() + '.jpeg'
// //上传地址
// var domain = config.qiniu.Domain
// 
// var putPolicy = new qiniu.rs.PutPolicy({
// 	scope: bucket
// });
// 
// //上传凭证
// var token = putPolicy.uploadToken(mac)

function signature() {
	// 创建鉴权对象
	var mac = new qiniu.auth.digest.Mac(config.qiniu.AK, config.qiniu.SK);
	//上传到七牛后保存的文件名
	var key = uuid.v4() + '.jpeg'
	var options={
		scope: bucket
	}
	var putPolicy = new qiniu.rs.PutPolicy(options);
	
	//上传凭证
	var token = putPolicy.uploadToken(mac)
	if (token) {
		return {
			key: key,
			uptoken: token,
			domain: domain
		}
	} else {
		return {}
	}
}
module.exports = signature
