<template>
	<div>
		<div>姓名:{{userName}}</div>
		<div ><img class="imgUrl" :src="imgUrl" alt=""></div>
		<div>简介:{{intro}}</div>
	</div>
</template>
<script>
	import { mapState } from 'vuex'
	export default {
		name:'infoList',
		data(){
			return {
				pageName:'infoEdit',
				// userName:'',
				imgUrl:'',
				intro:''
			}
		},
		computed:{
			...mapState(['userName'])
		},
		created(){
			// this.userName= this.$route.query.userName
			let options = {
				userName: this.userName,
				type:"detail"
			}
			this.$http.get('/api/infoDetail', {
				params: options
			}).then((res) => {
				let info = (res.body.info)[0]
				this.imgUrl=info.portraitImg
				this.intro=info.intro
				this.userName=info.userName
			}, (err) => {
			
			})
		}
	}
</script>