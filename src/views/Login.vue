<template>
	<div >
		<h2>{{title}}</h2>
		<div class="name">
			<label for="userName">用户名:</label>
			<input type="text" id="userName" name="userName" v-model="userName">
		</div>
		<div class="pwd">
			<label for="userPwd">密码:</label>
			<input type="text" id="userPwd" name="userPwd" v-model="userPwd">
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
				title:"登录页",
				userName:"",
				userPwd:""
				
			}
		},
		methods:{
			loginFn(){
				let that=this
				this.$http.post("/api/login",{name:that.userName,password:that.userPwd}).then((res)=>{
					console.log("res==>2",res)
					if(res.status==200){
						var path = {
							path: '/home'
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
