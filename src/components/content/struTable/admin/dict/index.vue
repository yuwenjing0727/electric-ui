<template>
	<div id="all">
		<div class="btnBox">
			<el-input placeholder="参数明称" style="width:200px;"></el-input>
			<el-button type="primary">查询</el-button>
		</div>
		<div class="tableBox">
			<div class="el-table">
				<el-table :data="tableData" style="width: 100%" border tooltip-effect="dark">
					<el-table-column header-align="center" prop="paramName" label="参数名称">
					</el-table-column>
					<el-table-column header-align="center" prop="paramCode" label="参数编码">
					</el-table-column>
					<el-table-column header-align="center" prop="paramLevel" label="参数级别">
					</el-table-column>
					<el-table-column header-align="center" prop="paramKey" label="参数关键字">
					</el-table-column>
					<el-table-column header-align="center" prop="paramType" label="参数类型">
					</el-table-column>
					<el-table-column header-align="center" prop="order" label="顺序">
					</el-table-column>
					<el-table-column header-align="center" prop="idDefault" label="是否默认">
					</el-table-column>
					<el-table-column header-align="center" prop="remark" label="备注">
					</el-table-column>
					<el-table-column
						fixed="right"
						width="200"
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
		data(){
			return{
				timeRange:"",
				userName:"",
				tableData: [
					{
						paramName: '支付银行',
						paramCode: 'icbc',
						paramLevel: '自定义级',
						paramKey:'工商银行',
						paramType:'banktype',
						order:'1',
						idDefault:'是',
						remark:''
					}, {
						paramName: '支付银行',
						paramCode: 'icbc',
						paramLevel: '自定义级',
						paramKey:'工商银行',
						paramType:'banktype',
						order:'1',
						idDefault:'是',
						remark:''
					}, {
						paramName: '支付银行',
						paramCode: 'icbc',
						paramLevel: '自定义级',
						paramKey:'工商银行',
						paramType:'banktype',
						order:'1',
						idDefault:'是',
						remark:''
					}, {
						paramName: '支付银行',
						paramCode: 'icbc',
						paramLevel: '自定义级',
						paramKey:'工商银行',
						paramType:'banktype',
						order:'1',
						idDefault:'是',
						remark:''
					},
					{
						paramName: '支付银行',
						paramCode: 'icbc',
						paramLevel: '自定义级',
						paramKey:'工商银行',
						paramType:'banktype',
						order:'1',
						idDefault:'是',
						remark:''
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
