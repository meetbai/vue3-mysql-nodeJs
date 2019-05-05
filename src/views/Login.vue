<template>
	<div >
		<h2>{{title}}</h2>
		<div class="name">
			<label for="userName">用户名:</label>
			<input type="text" id="userName" name="userName">
		</div>
		<div class="pwd">
			<label for="userPwd">密码:</label>
			<input type="text" id="userPwd" name="userPwd">
		</div>
		<div class="login" @click="loginFn">
			登录
		</div>
	</div>
</template>

<script>
	export default {
		name:"login",
		data(){
			return {
				title:"登录页"
			}
		},
		methods:{
			loginFn(){
				console.log("登录")
				this.$http.get("/api/login/").then((res)=>{
					console.log("res==>",res)
					if(res.status==200){
						var path = {
							path: '/about'
						}
						this.$router.push(path)
					}
				})
			}
		}
	}
	
</script>

<style>
	label{
		display: inline-block;
		min-width: 60px;
		text-align: right;
		margin-right: 10px;
	}
	.pwd{
		margin-top: 14px;
		margin-bottom: 14px;
	}
</style>
