<template>
	<div>
		
		<el-table :data="info" tripe style="width: 99.9%">
			<el-table-column prop="userName" label="姓名" width="140">
			</el-table-column>
			<el-table-column label="头像" width="120">
				<template slot-scope="scope">
					<img class="imgUrl" :src="scope.row.portraitImg" alt="">
				</template>

			</el-table-column>
			<el-table-column prop="intro" label="简介">
			</el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<router-link :to="'/infoEdit?userName='+scope.row.userName">详情</router-link>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>
<script>
	import { mapState } from 'vuex'
	export default {
		name: 'infoList',
		data() {
			return {
				pageName: 'infoList',
				// userName: '',
				imgUrl: '',
				intro: '',
				info: ''
			}
		},
		computed:{
			...mapState(['userName'])
		},
		created() {
			// this.userName = this.$route.query.userName
			let options = {
				userName: this.userName,
				type:"list"
			}
			this.$http.get('/api/infoDetail', {
				params: options
			}).then((res) => {
				this.info = res.body.info
				// this.imgUrl=info.portraitImg
				// this.intro=info.intro
				// this.userName=info.userName
			}, (err) => {

			})
		}
	}
</script>
<style>
	.imgUrl {
		width: 30px;
	}
</style>
