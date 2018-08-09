<template>
	<div id="all">
		<div class="btnBox">
			<el-input placeholder="用户" style="width:200px;" v-model="userName"></el-input>
			<div class="time" style="display: inline-block">
				<!--<span class="demonstration">登录时间段</span>-->
				<el-date-picker
					v-model="timeRange"
					type="datetimerange"
					range-separator="至"
					start-placeholder="请选择登录时间"
					end-placeholder="登录时间">
				</el-date-picker>
			</div>
			<el-button type="primary">查询</el-button>
		</div>
		<div class="tableBox">
			<div class="el-table">
				<el-table :data="tableData" style="width: 100%" border tooltip-effect="dark">
					<el-table-column header-align="center" prop="org" label="机构">
					</el-table-column>
					<el-table-column header-align="center" prop="user" label="用户">
					</el-table-column>
					<el-table-column header-align="center" prop="date" label="登录时间">
					</el-table-column>
					<el-table-column header-align="center" prop="des" label="说明">
					</el-table-column>
					<el-table-column
						fixed="right"
						label="操作">
						<template slot-scope="scope">
							<el-button @click="handleClick(scope.row)" type="success" size="small">编辑</el-button>
							<el-button type="danger" size="mini">删除</el-button>
						</template>
					</el-table-column>
				</el-table>
			</div>
			<div class="block">
				<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[5, 10, 50,100]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
				</el-pagination>
			</div>


		</div>


	</div>


</template>

<script>
	export default {
		name: "basics-m-tab3",

		data(){
			return{
				timeRange:"",
				userName:"",
				tableData: [
				    {
					org: '英大长安保险经纪',
					user: '超级关系管理员',
					date: '2016-05-04 15：12：39',
					des:'登录成功'

				}, {
					org: '英大长安保险经纪',
					user: '超级关系管理员',
					date: '2016-05-04 15：12：39',
					des:'密码不正确'

				}, {
					org: '英大长安保险经纪',
					user: '超级关系管理员',
					date: '2016-05-04 15：12：39',
					des:'登录成功'

				}, {
					org: '英大长安保险经纪',
					user: '超级关系管理员',
					date: '2016-05-04 15：12：39',
					des:'登录成功'

				},
					{
						org: '英大长安保险经纪',
						user: '超级关系管理员',
						date: '2016-05-04 15：12：39',
						des:'登录成功'

					},{
						org: '英大长安保险经纪',
						user: '超级关系管理员',
						date: '2016-05-04 15：12：39',
						des:'登录成功'

					},
					{
						org: '英大长安保险经纪',
						user: '超级关系管理员',
						date: '2016-05-04 15：12：39',
						des:'登录成功'

					},
					{
						org: '英大长安保险经纪',
						user: '超级关系管理员',
						date: '2016-05-04 15：12：39',
						des:'登录成功'

					},
					{
						org: '英大长安保险经纪',
						user: '超级关系管理员',
						date: '2016-05-04 15：12：39',
						des:'登录成功'

					}

				],
				currentPage:1,
				pageSize:10,
				total:0
			}
		},
		methods:{
			handleClick(row) {
				console.log(row);
			},
			handleSizeChange(){

			},
			handleCurrentChange(){

			}

		}
	}
</script>

<style scoped>
	.btnBox{
		width:100%;
		height:20%;
	}
	.tableBox{
		width:100%;
		height:80%;
	}
	.el-table,.block{
		margin-top: 10px;
	}

</style>
<style>

</style>
