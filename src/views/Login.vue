<template>
	<div>
		<h2>{{title}}</h2>
		<div class="name">
			<label for="userName1">用户名:</label>
			<input type="text" id="userName1" name="userName1" key="userName1" v-model="userName1">
		</div>
		<div class="pwd">
			<label for="userPwd">密码:</label>
			<input type="text" id="userPwd" name="userPwd" key="userPwd" v-model="userPwd">
		</div>
		<div class="btns">
			<div class="login" @click="loginFn">
				登录
			</div>
			<div class="register" @click="register">
				注册
			</div>
		</div>
		<div>{{result}}</div>

	</div>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		name: "login",
		data() {
			return {
				title: "登录页",
				// userName: "",
				userPwd: "",
				result: "",
				userName1:''
			}
		},
		computed:{
			...mapState(['userName'])
		},
		methods: {
			loginFn() {
				let that = this
				this.$http.post("/api/login", {
					'act': 'login',
					'userName': that.userName1,
					'passWord': that.userPwd
				}).then((res) => {
					this.result = res.body.msg
					let body = res.body
					if (body.success) {
						this.$store.commit({type:'userLogin',userName:body.userName})
						var path = {
							path: '/home',
							query: {
								userName: that.userName
							}
						}
						this.$router.push(path)
					}
				}, (err) => {
					this.result = err.body.msg
					this.$message(err.body.msg);

				})
			},
			register() {
				let that = this
				this.$http.post("/api/login", {
					'act': 'res',
					'userName': that.userName1,
					'passWord': that.userPwd
				}).then((res) => {
					this.result = res.body.msg
					this.$store.commit({type:'userLogin',userName:res.body.userName})
					let body = res.body
					 this.$message(body.msg);
				}, (err) => {
					this.result = err.body.msg
					this.$message(body.msg);

				})
			}
		}
	}
</script>

<style>
	label {
		display: inline-block;
		min-width: 60px;
		text-align: right;
		margin-right: 10px;
	}

	.btns {
		overflow: hidden;
	}

	.pwd {
		margin-top: 14px;
		margin-bottom: 14px;
	}

	.register,
	.login {
		float: left;
	}

	.register {
		margin-left: 30px;
	}
</style>
