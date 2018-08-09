<template>
  <div class="right-box" :style='{width:boxstyle.rightbox}'>
	  <div class="right-box-tab">
		  <el-dropdown class="dropBtn">
			  <el-button type="primary">
				  更多<i class="el-icon-arrow-down el-icon--right"></i>
			  </el-button>
			  <el-dropdown-menu slot="dropdown">
				  <el-dropdown-item @click.native="closeOther">关闭其他</el-dropdown-item>
				  <el-dropdown-item @click.native="closeAll">关闭全部</el-dropdown-item>
			  </el-dropdown-menu>
		  </el-dropdown>
		  <el-tabs v-model="editableTabsValue" type="card" closable @tab-click="handleClick" @tab-remove="removeTab">
			  <el-tab-pane
				  v-for="(item, index) in editableTabs"
				  :key="item.id"
				  :label="item.label"
				  :url="item.url"
				  :name="item.label"
			  >
			  </el-tab-pane>
		  </el-tabs>
	  </div>
	  <div class="main-box" id="main-box">
		  <router-view v-if="boxstyle.fadeshow"></router-view>
	  </div>

  </div>
</template>
<script>
import Bus from '@/eventBus.js';
export default {
	created(){
		var self = this;
		Bus.$on('treeData',function (s) {
			if(JSON.stringify(self.editableTabs).indexOf(JSON.stringify(s)) < 0){
				self.editableTabs.push(s);
			}
			self.editableTabsValue = s.label;
			sessionStorage.setItem("editableTabs",JSON.stringify(self.editableTabs));
			sessionStorage.setItem("editableTabsValue",s.label);

		})

	},
	mounted(){

		if(sessionStorage.getItem("editableTabs")){
			this.editableTabs = JSON.parse(sessionStorage.getItem("editableTabs"));
		};
		if(sessionStorage.getItem("editableTabsValue")){
			this.editableTabsValue = sessionStorage.getItem("editableTabsValue");
		}


	},
    data() {
        return {
			editableTabs:[{
				id: 3,
				url: "/user",
				label: "用户管理",
				icon: "icon-Management"
			}],
			editableTabsValue:"用户管理"

		};
    },
    props: {
        boxstyle: {
            type: Object,
            requre: true
        }
	},
	watch:{
		editableTabsValue(){
			this.setrouter()
		}
	},
	methods:{
		setrouter(){
			let routeObj=this.editableTabs.find(item=>{
					return item.label ==this.editableTabsValue
				})
			Bus.$emit("setroute",routeObj)
		},
		removeTab(targetName) {
			let tabs = this.editableTabs;
			let activeName = this.editableTabsValue;
			if (activeName === targetName) {
				tabs.forEach((tab, index) => {
					if (tab.label === targetName) {
						let nextTab = tabs[index + 1] || tabs[index - 1];
						if (nextTab) {
							activeName = nextTab.label;
							this.$router.push({
								path: nextTab.url
							});
						}
					}
				});
			}

			this.editableTabsValue = activeName;
			this.editableTabs = tabs.filter(tab => tab.label !== targetName);
			sessionStorage.setItem("editableTabs",JSON.stringify(this.editableTabs));
			sessionStorage.setItem("editableTabsValue",this.editableTabsValue);
		},
		handleClick(tab, event){
			console.log(tab);
			this.editableTabsValue = tab.label;
			sessionStorage.setItem("editableTabsValue",this.editableTabsValue);
			this.editableTabs.forEach((e) => {
				if(e.label == tab.label){
					this.$router.push({
						path: e.url
					});
				}

			})

		},
		closeOther(){
			var self = this;
			var currentEditableTab = {};
			for(let i=0;i<self.editableTabs.length;i++){
				if(self.editableTabs[i].label == self.editableTabsValue){
					currentEditableTab = self.editableTabs[i];
					break;
				}
			}
			self.editableTabs = [];
			self.editableTabs.push(currentEditableTab);
			sessionStorage.setItem("editableTabs",JSON.stringify(self.editableTabs));
			this.setrouter()

		},
		closeAll(){
			this.editableTabs = [{
				id: 3,
				url: "/user",
				label: "用户管理",
				icon: "icon-Management"
			}];
			this.editableTabsValue = "用户管理";
			this.$router.push({
				path:this.editableTabs[0].url
			});
			sessionStorage.setItem("editableTabs",JSON.stringify(this.editableTabs));
			sessionStorage.setItem("editableTabsValue",this.editableTabsValue);
			this.setrouter()


		}

	},
    components: {

	}
};
</script>

<style lang="less" scoped>
.right-box {
    height: 100%;
    width: 85%;
   /* padding: 10px 20px 15px 20px;*/
    background-color: #fff;
    box-sizing: border-box;
}
.right-box-tab{
	width:100%;
	height:7%;

	background:#fff;
}

</style>
<style>
	.el-tabs__nav{
		z-index: 0!important;
	}
	.el-tabs__nav .el-tabs__item:nth-child(1) span{
		display: none;
	}
	.el-tabs__nav-wrap {
		overflow: hidden;
		margin-bottom: -1px;
		position: relative;
	}
	.dropBtn {
		display: inline-block;
		position: relative;
		color: #606266;
		font-size: 14px;
		float: right;
		z-index:999;
	}
</style>
