<template>
	<div id="all">
		<div class="btnBox">
			<el-select v-model="editValue" placeholder="请选择操作动作">
				<el-option
					v-for="item in editOptions"
					:key="item.value"
					:label="item.label"
					:value="item.value">
				</el-option>
			</el-select>
			<el-input placeholder="用户名" style="width:200px;"></el-input>
			<el-button type="primary">查询</el-button>
			<el-button type="primary">导出</el-button>
		</div>
		<div class="tableBox">
			<div class="el-table">
				<el-table :data="tableData" style="width: 100%" border tooltip-effect="dark">
					<el-table-column header-align="center" prop="editType" label="操作动作">
					</el-table-column>
					<el-table-column header-align="center" prop="user" label="用户名">
					</el-table-column>
					<el-table-column header-align="center" prop="system" label="所属系统">
					</el-table-column>
					<el-table-column header-align="center" prop="date" label="创建日期">
					</el-table-column>
					<el-table-column header-align="center" prop="grade" label="日志等级">
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
					{
					  label:"修改",
						value:"修改"
					},
					{
						label:"查询",
						value:"查询"
					},
					{
						label:"删除",
						value:"删除"
					}
				],
				tableData: [
				    {
					editType: '查询',
					user: '王小虎',
					system:"微信平台"	,
					date:'2016-05-04 16:47',
					grade:"低"
				}, /* {
						editType: '查询',
						user: '王小虎',
						system:"数据交互平台"	,
						date:'2016-05-04 16:47',
						grade:"中"
					},  {
						editType: '查询',
						user: '王小虎',
						system:"自营平台"	,
						date:'2016-05-04 16:47',
						grade:"高"
					}, {
						editType: '查询',
						user: '王小虎',
						system:"微信平台"	,
						date:'2016-05-04 16:47',
						grade:"低"
					},*/],
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
