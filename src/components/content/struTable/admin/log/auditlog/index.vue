<template>
	<div id="all">
		<div class="btnBox">
			<el-select v-model="editValue" placeholder="请选择操作类型">
				<el-option
					v-for="item in editOptions"
					:key="item.value"
					:label="item.label"
					:value="item.value">
				</el-option>
			</el-select>
			<el-select v-model="editValue" placeholder="请选择审计分类">
				<el-option
					v-for="item in editOptions"
					:key="item.value"
					:label="item.label"
					:value="item.value">
				</el-option>
			</el-select>
			<el-button type="primary">查询</el-button>
			<el-button type="primary">统计</el-button>
			<el-button type="primary">导出</el-button>
		</div>
		<div class="tableBox">
			<div class="el-table">
				<el-table :data="tableData" style="width: 100%" border tooltip-effect="dark">
					<el-table-column header-align="center" prop="eventDate" label="事件日期">
					</el-table-column>
					<el-table-column header-align="center" prop="eventType" label="事件类型">
					</el-table-column>
					<el-table-column header-align="center" prop="userName" label="用户姓名">
					</el-table-column>
					<el-table-column
						fixed="right"
						label="操作">
						<template slot-scope="scope">
							<el-button type="danger" size="mini">删除</el-button>
						</template>
					</el-table-column>
				</el-table>
				<!--<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[5, 10, 50,100]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
				</el-pagination>-->
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
				editOptions:[

				],
				tableData: [
					{
						eventDate: '2016-05-04',
						eventType: '业务级',
						userName:"超级管理员"	,

					},  {
						eventDate: '2016-05-04',
						eventType: '业务级',
						userName:"超级管理员"	,

					},  {
						eventDate: '2016-05-04',
						eventType: '业务级',
						userName:"超级管理员"	,

					},{
						eventDate: '2016-05-04',
						eventType: '业务级',
						userName:"超级管理员"	,

					},
					{
						eventDate: '2016-05-04',
						eventType: '业务级',
						userName:"超级管理员"	,

					},],
				currentPage:1,
				pageSize:10,
				total:0,
				editValue:""
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
