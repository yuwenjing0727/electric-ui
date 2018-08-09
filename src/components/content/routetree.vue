<template>
    <div class="left-tree" :style='{width:boxstyle.routetreestyle}'>

        <el-tree v-show="!boxstyle.show" :style='{overflow:defaultauto}' ref="tree" :data="data" :props="defaultProps" :default-expanded-keys="[current]" :highlight-current="true" accordion @node-click="handleNodeClick" node-key="id">
            <span class="custom-tree-node" slot-scope="{ node, data }">
                <span>
                    <i class="iconfont" :class="node.icon"></i>  {{ node.label }}
                </span>
            </span>
        </el-tree>
        <!-- <el-menu unique-opened  class="el-menu-vertical-demo" mode="vertical" :show-timeout="200" background-color="#00142a" text-color="hsla(0,0%,100%,.65)" active-text-color="#409eff" :collapse="isCollapse">
            <slidertree :menu="data" :isCollapse="isCollapse"></slidertree>
        </el-menu> -->

        <span @click="togglemenu()">
            <i class="el-icon-d-arrow-left" style="line-height: 50px;" title="收起" v-if="!boxstyle.show"></i>
            <i class="el-icon-d-arrow-right" style="line-height: 50px;" title="展开" v-if="boxstyle.show"></i>
        </span>
    </div>
</template>
<script>
import Bus from '@/eventBus.js';
export default {
    name: "trees",
    data() {
        return {
            isCollapse: true,
            data: [
                {
                    label: "系统管理",
                    icon: "icon-xitongguanli",
                    children: [
                        {
                            id: 3,
                            url: "/user",
                            label: "用户管理",
                            icon: "icon-Management"
                        },
                        {
                            id: 4,
                            url: "/menu",
                            label: "菜单管理",
                            icon: "icon-erji-caidanguanli"
                        },
                        {
                            id: 5,
                            url: "/role",
                            label: "角色管理",
                            icon: "icon-jiaoseguanli"
                        },
                        {
                            id: 6,
                            url: "/dict",
                            label: "字典管理",
                            icon: "icon-zygl"
                        },
                        {
                            id: 7,
                            url: "/org",
                            label: "机构管理",
                            icon: "icon-bumenguanli"
                        },
                        {
                            label: "日志管理",
                            icon: "icon-rizhiguanli",
                            children: [
                                {
                                    id: 31,
                                    url: "/loginlog",
                                    label: "登录日志",
                                    icon: "icon-denglurizhi"
                                },
                                {
                                    id: 8,
                                    url: "/handlelog",
                                    label: "操作日志",
                                    icon: "icon-caozuorizhi"
                                },
                                {
                                    id: 9,
                                    url: "/auditlog",
                                    label: "审计日志",
                                    icon: "icon-shenjiguanli"
                                },
                                {
                                    id: 10,
                                    url: "/exceptionlog",
                                    label: "异常日志",
                                    icon: "icon-yichang"
                                },
                                {
                                    id: 11,
                                    url: "/facelog",
                                    label: "接口日志",
                                    icon: "icon-api"
                                }
                            ]
                        }
                    ]
                },
                {
                    label: "系统监控",
                    icon: "icon-jiankongfuwu",
                    children: [
                        {
                            id: 12,
                            Relative: false,
                            url: "http://139.224.200.249:5001",
                            label: "服务监控",
                            icon: "icon-yingyongjiankong"
                        },
                        {
                            id: 13,
                            Relative: false,
                            url: "http://139.224.200.249:5002",
                            label: "zipkin监控",
                            icon: "icon-jiankongshuju"
                        },
                        {
                            id: 14,
                            Relative: false,

                            url: "https://pinpoint.pig4cloud.com",
                            label: "pinpoint监控",
                            icon: "icon-monitor"
                        },
                        {
                            id: 15,
                            Relative: false,
                            url: "http://139.224.200.249:8585",
                            label: "缓存状态",
                            icon: "icon-jiankong"
                        },
                        {
                            id: 16,
                            Relative: false,
                            url: "http://139.224.200.249:5601",
                            label: "ELK状态",
                            icon: "icon-monitoring"
                        },
                        {
                            id: 17,
                            Relative: false,
                            url: "http://139.224.200.249:9999/swagger-ui.html",
                            label: "接口文档",
                            icon: "icon-api"
                        },
                        {
                            id: 18,
                            Relative: false,
                            url: "http://139.224.200.249:8899",
                            label: "任务监控",
                            icon: "icon-jiankong1"
                        },
                        {
                            id: 19,
                            url: "/client",
                            label: "客户端管理",
                            icon: "icon-bangzhushouji"
                        },
                        {
                            id: 20,
                            url: "/route",
                            label: "路由管理",
                            icon: "icon-luyou"
                        }
                    ]
                },
                {
                    label: "基础数据管理",
                    icon: "icon-qunfengjichushuju",

                    children: [
                        {
                            id: 21,
                            url: "/marketmember",
                            label: "市场成员管理",
                            icon: "icon-chengyuan"
                        },
                        {
                            id: 22,
                            url: "/settlementunit",
                            label: "结算单元管理",
                            icon: "icon-jiesuan"
                        },
                        {
                            id: 23,
                            url: "/meter",
                            label: "表计模型管理",
                            icon: "icon-jiankongkongzhiguanlijianguan"
                        },
                        {
                            id: 24,
                            url: "/tranchannel",
                            label: "输电通道管理",
                            icon: "icon-dianlutu"
                        },
                        {
                            id: 25,
                            url: "/tradepath",
                            label: "交易路径管理",
                            icon: "icon-jiaoyi"
                        },
                        {
                            id: 26,
                            url: "/settlementobj",
                            label: "结算对象管理",
                            icon: "icon-CPjiesuan"
                        }
                    ]
                }
            ],
            defaultProps: {
                children: "children",
                label: "label"
            },
            defaultauto: "auto",
            show: false
        };
    },
    props: {
        boxstyle: {
            type: Object,
            requre: true
        }
    },
    computed: {
        current() {
            // 设置默认展开的状态
            var tree = sessionStorage.currentTree;
            var objtree = Number(tree);
            if (tree) {
                return objtree;
            }
            return Number(3);
        }
    },
    mounted() {
        this.setCurrentKey();
        Bus.$on("setroute",(currentroute)=>{
            this.$refs.tree.setCurrentKey(currentroute.id);
        })
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },

        togglemenu() {
            if (this.boxstyle.show) {
                this.$set(this.boxstyle, "show", false);
                this.$set(this.boxstyle, "routetreestyle", "15%");
                this.$set(this.boxstyle, "rightbox", "85%");
                this.defaultauto = "auto";
            } else {
                this.$set(this.boxstyle, "show", true);
                this.$set(this.boxstyle, "routetreestyle", "0%");
                this.$set(this.boxstyle, "rightbox", "100%");
                this.defaultauto = "hidden";
            }
        },
        setCurrentKey() {
            var tree = sessionStorage.currentTree;
            var objtree = Number(tree);
            var currentroute = this.$route.path;
            // 设置目录树的状态

            if (tree) {
                this.$refs.tree.setCurrentKey(objtree);
            } else {
                this.$refs.tree.setCurrentKey(3);
            }
        },
        handleNodeClick(data) {
			console.log(this.$route.path);
			console.log(data.url);
			if (data.url) {
				if(data.Relative==false){
					location.href=data.url
				}else{
					Bus.$emit("treeData",data);
					this.$router.push({
						path: data.url
					});
				}

				this.getCurrentKey();
				// this.$set(this.boxstyle,"fadeshow",true)

			}
        },
        getCurrentKey() {
            var tree = this.$refs.tree.getCurrentKey();
            if (tree) {
                sessionStorage.setItem("currentTree", JSON.stringify(tree));
            } else {
                sessionStorage.setItem("currentTree", 3);
            }
        }
    },
    components: {

    }
};
</script>
<style lang="less" scoped>
.left-tree {
    background-color: #002140;
    width: 15%;
    height: 100%;
    position: relative;
    box-sizing: border-box;
    transition: all 0.3s;
    & > span {
        width: 20px;
        height: 50px;
        position: absolute;
        right: -10px;
        top: 50%;
        transform: translate(50%, -50%);
        background: #ddd6d6;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        cursor: pointer;
        i {
            width: 100%;
            font-size: 20px;
            font-weight: 500;
        }
    }
}
</style>

