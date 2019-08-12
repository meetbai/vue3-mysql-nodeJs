var qiniu = require('qiniu')
var config = require('../config/config')
var uuid = require('uuid')

// qiniu.conf.ACCESS_KEY = config.qiniu.AK;
// qiniu.conf.SECRET_KEY = config.qiniu.SK;
var mac = new qiniu.auth.digest.Mac(config.qiniu.AK, config.qiniu.SK);

//要上传的空间
var bucket = 'storagesave';

//上传到七牛后保存的文件名
// key = 'my-nodejs-logo.png';

//构建上传策略函数
// function uptoken(bucket, key) {
//   var str=bucket+":"+key
//   var putPolicy = new qiniu.rs.PutPolicy({scope:bucket+":"+key});
//   return putPolicy.uploadToken(mac);
// }
// 
// function getQiniuToken(key){
//     var token=uptoken(bucket,key)
//     return token;
// }



function signature() {
	// var body=this.request.body
	// var cloud=body.cloud
	var key = uuid.v4() + '.jpeg'
	var putPolicy = new qiniu.rs.PutPolicy({
		scope: bucket
	});
	var token = putPolicy.uploadToken(mac)

	if (token) {
		// callBack({
		// 	key: key,
		// 	uptoken: token,
		// 	domain: config.qiniu.Domain
		// });
		return {
			key: key,
			uptoken: token,
			domain: config.qiniu.Domain
		}
	} else {
		return {}
	}
}
module.exports = signature
