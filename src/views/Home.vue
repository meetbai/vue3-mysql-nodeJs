<template>

	<el-container>
		<el-header id="header" style="border: 1px solid #eee;text-align: center;line-height: 60px;box-sizing:border-box;">
			<span>生活不止眼前的苟且,还有诗和远方</span>
		<el-dropdown style="float: right;">
			<i class="el-icon-setting" style="margin-right: 15px"></i>
			<el-dropdown-menu slot="dropdown">
				<el-dropdown-item>退出</el-dropdown-item>
			</el-dropdown-menu>
			<span>{{userName}}</span>
		</el-dropdown>
		
		</el-header>
		<el-container id="main" style="border: 1px solid #eee" :style='styleObject'  >
			<el-aside style="border:1px solid #eee;width: 200px;box-sizing:border-box;overflow-x: hidden;">
				<el-menu :default-openeds="['1', '3']" style="width: 200px;">
					<el-submenu index="1">
						<template slot="title"><i class="el-icon-message"></i>信息管理</template>
						<el-menu-item-group>
							<!-- <template slot="title">分组一</template> -->
							<el-menu-item index="1-1"> <router-link to="/infoList">信息列表</router-link></el-menu-item>
							<el-menu-item index="1-2"> <router-link to="/infoAdd">信息添加</router-link></el-menu-item>
							<!-- <el-menu-item index="1-3"> <router-link to="/infoEdit">信息编辑</router-link></el-menu-item> -->
						</el-menu-item-group>
						
					</el-submenu>
					<el-submenu index="2">
						<template slot="title"><i class="el-icon-menu"></i>导航二</template>
						<el-menu-item-group>
							<template slot="title">分组一</template>
							<el-menu-item index="2-1">选项1</el-menu-item>
							<el-menu-item index="2-2">选项2</el-menu-item>
						</el-menu-item-group>
						<el-menu-item-group title="分组2">
							<el-menu-item index="2-3">选项3</el-menu-item>
						</el-menu-item-group>
						<el-submenu index="2-4">
							<template slot="title">选项4</template>
							<el-menu-item index="2-4-1">选项4-1</el-menu-item>
						</el-submenu>
					</el-submenu>
					<el-submenu index="3">
						<template slot="title"><i class="el-icon-menu"></i>导航二</template>
						<el-menu-item-group>
							<template slot="title">分组一</template>
							<el-menu-item index="2-1">选项1</el-menu-item>
							<el-menu-item index="2-2">选项2</el-menu-item>
						</el-menu-item-group>
						<el-menu-item-group title="分组2">
							<el-menu-item index="2-3">选项3</el-menu-item>
						</el-menu-item-group>
						<el-submenu index="2-4">
							<template slot="title">选项4</template>
							<el-menu-item index="2-4-1">选项4-1</el-menu-item>
						</el-submenu>
					</el-submenu>
				</el-menu>
			</el-aside>
			<el-main style="border: 1px solid #eee">
				 <router-view/>
				<!-- <el-table :data="tableData" tripe style="width: 99.9%">
					<el-table-column prop="date" label="日期" width="140">
					</el-table-column>
					<el-table-column prop="name" label="姓名" width="120">
					</el-table-column>
					<el-table-column prop="address" label="地址">
					</el-table-column>
				</el-table> -->
			</el-main>
		</el-container>
		<el-footer id="footer" style="border: 1px solid #eee;text-align: center;line-height: 60px;box-sizing:border-box;">底部</el-footer>
	</el-container>
	<!-- <div class="home"> -->
	<!-- <img alt="Vue logo" src="../assets/logo.png"> -->
	<!-- <HelloWorld :msg="userName" /> -->

	<!-- </div> -->
</template>

<script>
	// @ is an alias to /src
	import HelloWorld from '@/components/HelloWorld.vue'
	import { mapState } from 'vuex'
	export default {
		name: 'home',
		data() {
			const item = {
				date: '2016-05-02',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1518 弄'
			};
			return {
				styleObject: {},
				// userName: '',
				tableData: Array(20).fill(item)
			}
		},
		computed:{
			...mapState(['userName'])
		},
		
		created() {
			let mainHeight = document.documentElement.clientHeight - 120 + "px";
			// console.log(document.documentElement.clientWidth);
			// console.log(document.documentElement.clientHeight);

			this.styleObject = {height: mainHeight}
			// this.userName = this.$route.query.userName
		},

		components: {
			HelloWorld
		}
	}
</script>
