<template>
	<div>
		<div>
			<label for="">景区名称:</label>
			<input v-modle="name" type="text" >
		</div>
		<div>
			<label for="">请上传景区:</label>
			<input @change="photo($event)" type="file" id="upload_img">
		</div>
		<div style="margin-top: 30px;">景区简介:</div>
		<div>
			<textarea v-model="intro" name="" id="" cols="60" rows="10"></textarea>
		</div>
		<div @click="submit" class="submit">提交</div>
	</div>


</template>

<script>
	import { mapState } from 'vuex'
	export default {
		name: 'infoAdd',
		data() {
			return {
				pageName: 'infoAdd',
				portr: '',
				imgUrl: '',
				intro: '',
				file: null,
				// userName: '',
				name:''
				
			}
		},
		computed:{
			...mapState(['userName'])
		},
		methods: {
			photo(e) {
				this.file = e.target.files[0]
				// 				let file = e.target.files[0]
				// 				let type = file.type.split("/")[0]
				// 				let param = new FormData()
				// 				param.append('file', file, file.name)
				// 				param.append('type', '1')
				// 				param.append('intro', intro)
				// 
				// 				let config = {
				// 					headers: {
				// 						'Content-Type': 'multipart/form-data'
				// 					}
				// 				}
				// 				console.log(type)
				// 				if (type == "image") {
				// 					this.$http.post('/api/upload', param, config).then((res) => {
				// 						console.log(res)
				// 						this.imgUrl = res.body.imageUrl
				// 					}, (err) => {
				// 						console.log(err)
				// 					})
				// 				}
			},
			submit() {
				let file = this.file
				let intro = this.intro
				let userName = this.userName
				let name = this.name
				if (!file) {
					alert("请上传图片")
				} else if (!intro) {
					alert("请上传简介")
				}else if (!name) {
					alert("请上传名称")
				} else {
					let param = new FormData()
					param.append('file', file, file.name)
					param.append('type', '1')
					param.append('intro', intro)
					param.append('userName', userName)
					let config = {
						headers: {
							'Content-Type': 'multipart/form-data'
						}
					}
					this.$http.post('/api/upload', param, config).then((res) => {
						this.imgUrl = res.body.imageUrl
						alert(res.body.msg)
						var path = {
							path: '/infoList',
							query: {
								userName: userName
							}
						}
						this.$router.push(path)
					}, (err) => {
						console.log(err)
					})
				}

			}
		}
	}
</script>

<style>
	.submit {
		width: 60px;
		color: #fff;
		margin-top: 20px;
		background-color: blueviolet;
		text-align: center;
		cursor: pointer;
	}
</style>
