<template>
	<div id="all">
		<div class="btnBox">
			<el-button type="primary">重置</el-button>
			<el-button type="primary">导出</el-button>
		</div>
		<div class="tableBox">
			<div class="el-table">
				<el-table :data="tableData" style="width: 100%" border tooltip-effect="dark">
					<el-table-column header-align="center" prop="number" label="序号">
					</el-table-column>
					<el-table-column header-align="center" prop="date" label="时间">
					</el-table-column>
					<el-table-column header-align="center" prop="Initiator" label="发起方">
					</el-table-column>
					<el-table-column header-align="center" prop="responder" label="响应方">
					</el-table-column>
					<el-table-column header-align="center" prop="policyNum" label="保单号">
					</el-table-column>
					<el-table-column header-align="center" prop="orderNum" label="订单号">
					</el-table-column>
					<el-table-column header-align="center" prop="product" label="产品">
					</el-table-column>

					<el-table-column header-align="center" prop="InterType" label="接口类型">
					</el-table-column>

					<el-table-column header-align="center" prop="status" label="返回状态码">
					</el-table-column>

					<el-table-column
						fixed="right"
						label="查看报文">
						<template slot-scope="scope">
							<el-button type="primary" size="mini">查看报文</el-button>
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
						number: '03253',
						date: '2018/04/20 15:30:30',
						Initiator:""	,
						responder:"",
						policyNum:"",
						orderNum:"12234345(⊙o⊙)…565",
						product:"天地关爱百万医疗保险(豪华型)",
						InterType:"",
						status:"1",
					}, {
						number: '03253',
						date: '2018/04/20 15:30:30',
						Initiator:""	,
						responder:"",
						policyNum:"",
						orderNum:"12234345(⊙o⊙)…565",
						product:"天地关爱百万医疗保险(豪华型)",
						InterType:"",
						status:"1",
					},  {
						number: '03253',
						date: '2018/04/20 15:30:30',
						Initiator:""	,
						responder:"",
						policyNum:"",
						orderNum:"12234345(⊙o⊙)…565",
						product:"天地关爱百万医疗保险(豪华型)",
						InterType:"",
						status:"1",
					},{
						number: '03253',
						date: '2018/04/20 15:30:30',
						Initiator:""	,
						responder:"",
						policyNum:"",
						orderNum:"12234345(⊙o⊙)…565",
						product:"天地关爱百万医疗保险(豪华型)",
						InterType:"",
						status:"1",
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
	}
	.tableBox{
		width:100%;
		height:80%;
	}
	.el-table,.block{
		margin-top: 10px;
	}

</style>
