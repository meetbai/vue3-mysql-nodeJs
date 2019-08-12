function _getQiniuToken() {
	var accessToken = this.state.user.accessToken
	var signatureURL = config.api.base + config.api.signature
	return request.post(signatureURL, {
			accessToken: accessToken,
			cloud: "qiniu"
		})
		.catch((err) => {
			console.log(err);
		})
}

// 上传图片

// function _upload(body) {
// 	var that = this
// 	var xhr = new XMLHttpRequest()
// 
// 	//七牛地址此处为：http://upload.qiniu.com  
// 
// 	// var url = config.qiniu.upload
// 	var url = 'http://upload.qiniu.com'
// 
// 	xhr.open('POST', url)
// 
// 	xhr.onload = () => {
// 
// 		if (xhr.status !== 200) {
// 			AlertIOS.alert('请求失败2')
// 			console.log(xhr.responseText)
// 			return
// 		}
// 		if (!xhr.responseText) {
// 			AlertIOS.alert('请求失败')
// 			return
// 		}
// 		var response
// 		try {
// 			response = JSON.parse(xhr.response)
// 		} catch (e) {
// 			console.log(e)
// 			console.log('parse fails')
// 		}
// 
// 		if (response) {
// 			var user = this.state.user
// 			user.avatar = response.key //七牛获取图片标准地址
// 
// 		}
// 
// 	}
// }
// xhr.send(body)
// };


// var uri = res.uri //图片的本地地址

_getQiniuToken()
	.then(function(data) {
		if (data && data.success) {
			//从后台拿到生成好的签名
			var token = data.data.token
			var key = data.data.key
			var body = new FormData()
			body.append('token', token)
			body.append('resource_type', 'image')
			body.append('key', key)
			body.append('file', {
				type: 'image/jpeg',
				uri: uri,
				key: key
			})
			_upload(body)
		}
	})
