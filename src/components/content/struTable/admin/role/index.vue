<template>
	<div class="table-content">
		<div class="navlist">
			<span class="line"></span>
			<div class="title">
				<!-- 二级标题 -->
				<h2>统计分析</h2>
				<span>各单位电价分析</span>

			</div>
			<div class="btns">
				<el-button type="primary" @click="dialogFormVisible = true">新增</el-button>
				<el-button type="primary" @click="del">删除</el-button>
				<!-- 功能按钮 -->
			</div>

		</div>
		<div class="tablebox">

		</div>

		<el-dialog title="新增" :visible.sync="dialogFormVisible" class="elDialog">
			<el-form :model="form">
				<div class="flx">
					<el-form-item label="活动名称" :label-width="formLabelWidth">
						<el-input v-model="form.name" auto-complete="off"></el-input>
					</el-form-item>
					<el-form-item label="活动区域" :label-width="formLabelWidth">
						<el-select v-model="form.region" placeholder="请选择活动区域">
							<el-option label="区域一" value="shanghai"></el-option>
							<el-option label="区域二" value="beijing"></el-option>
						</el-select>
					</el-form-item>
				</div>
				<div class="flx">
					<el-form-item label="名称" :label-width="formLabelWidth">
						<el-input v-model="form.name" auto-complete="off"></el-input>
					</el-form-item>
					<el-form-item label="性别" :label-width="formLabelWidth">
						<el-radio v-model="radio" label="1">男</el-radio>
						<el-radio v-model="radio" label="2">女</el-radio>
					</el-form-item>
				</div>
				<div class="flx">
					<el-form-item label="活动形式" class="textArea">
						<el-input type="textarea" v-model="form.desc"></el-input>
					</el-form-item>
				</div>
				<div class="flx">
					<el-form-item label="时间日期" :label-width="formLabelWidth">
						<el-date-picker v-model="form.data1" type="datetime" placeholder="选择日期时间">
						</el-date-picker>
					</el-form-item>
					<el-form-item label="名称" :label-width="formLabelWidth">
						<el-input v-model="form.name" auto-complete="off"></el-input>
					</el-form-item>
				</div>
				<div class="flx">
					<el-form-item label="名称" :label-width="formLabelWidth">
						<el-input v-model="form.name" auto-complete="off"></el-input>
					</el-form-item>
					<el-form-item label="名称" :label-width="formLabelWidth">
						<el-input v-model="form.name" auto-complete="off"></el-input>
					</el-form-item>
				</div>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="dialogFormVisible = false">新 增</el-button>
			</div>
		</el-dialog>


	</div>
</template>
<script>
	export default {
		data() {
			return {
				gridData: [{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}],
				dialogTableVisible: false,
				dialogFormVisible: false,
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
				formLabelWidth: '100px',
				radio: '1'
			}
		},
		mounted() {
			var self = this;
		},
		methods: {
			del() {
				this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.$message({
						type: 'success',
						message: '删除成功!'
					});
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});
				});
			}
			// initheight(){
			//   debugger
			//   var boxheight=document.querySelector(".table-content").clientHeight
			//   var tablebox=document.querySelector(".tablebox");
			//   tablebox.style.height=boxheight-63+"px"
			// }
		},
		components: {

		}
	}

</script>

<style lang="less" scoped>
	.table-content {
		height: 100%;
		width: 100%;
		background-color: #f2f2f2;
		box-sizing: border-box;
		position: relative;
		.navlist {
			height: 60px;
			margin-left: 25px;
			box-sizing: border-box;
			border-bottom: 3px solid #308b8c;
			position: relative;
			display: flex;
			.line {
				position: absolute;
				height: 3px;
				width: 25px;
				left: -25px;
				bottom: -3px;
				background-image: url("../../../../../../static/img/border.png");
			}
			.title {
				height: 100%;
				display: flex;
				color: #308b8c;
				h2 {
					font-family: '微软雅黑';
					font-weight: 500;
					font-size: 24px;
					line-height: 60px;
					margin-right: 15px;
				}
				span {
					font-weight: 400;
					line-height: 70px;
				}
			}
		}
		.tablebox {
			width: 100%;
			background-color: #fff;
			position: absolute;
			top: 75px;
			bottom: 0;
			box-shadow: 2px 2px 15px #888888;
		}
	}

</style>

<style lang="less">
	.elDialog {
		.el-dialog__body {
			.flx {
				display: flex;
				.el-form-item {
					width: 50%;
					padding-right: 30px;
					.el-form-item__label {
						font-weight: 500;
					}
					.el-form-item__content {
						.el-select {
							width: 100%;
						}
					}
				}
				.textArea {
					width: 100%;
					.el-form-item__content {
						margin-left: 100px;
					}
					.el-form-item__label {
						width: 100px;
					}
				}
			}
		}
	}

</style>
