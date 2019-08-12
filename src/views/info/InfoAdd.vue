<template>
	<div>

		<div>
			<label for="">请上传头像:</label>
			<input @change="photo($event)" type="file" id="upload_img">
		</div>
		<img :src="imgUrl" alt="">
	</div>


</template>

<script>
	export default {
		name: 'infoAdd',
		data() {
			return {
				pageName: 'infoAdd',
				portr: '',
				imgUrl:''
			}
		},
		methods: {
			photo(e) {
				let file = e.target.files[0]
				let type=file.type.split("/")[0]
				let param = new FormData()
				param.append('file', file, file.name)
				param.append('type', '1')

				let config = {
					headers: {
						'Content-Type': 'multipart/form-data'
					}
				}
				console.log(type)
				if (type == "image") {
					this.$http.post('/api/upload', param, config).then((res) => {
						console.log(res)
						this.imgUrl=res.body.imageUrl
					}, (err) => {
						console.log(err)
					})
				}
			}
		}
	}
</script>

<style>

</style>
