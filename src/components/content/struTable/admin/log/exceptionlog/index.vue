<template>
	<div id="all">
		<div class="btnBox">
			<el-input placeholder="用户" style="width:200px;"></el-input>
			<el-input placeholder="异常名称" style="width:200px;"></el-input>
			<div class="time" style="display: inline-block">
				<el-date-picker
					v-model="timeRange"
					type="datetimerange"
					range-separator="至"
					start-placeholder="请选择异常发生时间"
					end-placeholder="请选择异常发生时间">
				</el-date-picker>
			</div>
			<el-input placeholder="异常类" style="width:200px;"></el-input>

		</div>
		<div class="btnBox">
			<el-button type="primary">查询</el-button>
			<el-button type="primary">导出</el-button>
		</div>
		<div class="tableBox">
			<div class="el-table">
				<el-table :data="tableData" style="width: 100%" border tooltip-effect="dark">
					<el-table-column header-align="center" prop="abnDate" label="异常时间">
					</el-table-column>
					<el-table-column header-align="center" prop="abnName" label="异常名称">
					</el-table-column>
					<el-table-column header-align="center" prop="abnDec" label="异常描述">
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
						abnDate: '2016050416:47:20',
						abnName: 'dfhseifsieufhsieur',
						abnDec:"sfaertrytyuuyjgui78tdfsertrtse"	,
					}, {
						abnDate: '2016050416:47:20',
						abnName: 'dfhseifsieufhsieur',
						abnDec:"sfaertrytyuuyjgui78tdfsertrtse"	,
					},  {
						abnDate: '2016050416:47:20',
						abnName: 'dfhseifsieufhsieur',
						abnDec:"sfaertrytyuuyjgui78tdfsertrtse"	,
					}, {
						abnDate: '2016050416:47:20',
						abnName: 'dfhseifsieufhsieur',
						abnDec:"sfaertrytyuuyjgui78tdfsertrtse"	,
					}],
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
		padding: 5px;
	}
	.tableBox{
		width:100%;
		height:80%;
	}
	.el-table,.block{
		margin-top: 10px;
	}

</style>
