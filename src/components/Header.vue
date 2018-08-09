<template>
    <div class="top">
        <div class="top-content">
            <!-- <p><img src="../../static/img/logo.png" alt=""></p> -->
            <h1>全国统一电力市场电费结算系统</h1>
            <ul>
                <li>
					<top-theme></top-theme>
                </li>
                <li>
                   <top-lock></top-lock>
                </li>
                <li>
                    <i class="el-icon-screen" title="全屏" @click="screenCli()" ></i>
                </li>
                <li>
                    <img class="top-userImg" src="../../static/img/user.png" alt="" title="用户图像" >
                </li>
				<li>

					<el-dropdown @command="handleCommand">
  <span class="el-dropdown-link">
     {{userInfo.username}}<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>
							首页
						</el-dropdown-item>
						<el-dropdown-item>
							修改信息
						</el-dropdown-item>
						<el-dropdown-item @click.native="Signout" divided>退出系统</el-dropdown-item>
					</el-dropdown-menu>
						</el-dropdown>
				</li>
            </ul>
        </div>
    </div>
</template>
<script>
	import topTheme from "./top/top-theme.vue";
	import topLock from "./top/top-lock.vue"
	import screenfull from 'screenfull'
	/*import { mapGetters } from 'vuex'*/
export default {
  data () {
    return {
		userInfo:{
			username:"admin"
		}
    }
  },
  computed:{
	  // 使用对象展开运算符将 getter 混入 computed 对象中
	 /* ...mapGetters(["bg"]),*/
      userName(){
          if(sessionStorage.user){
              return sessionStorage.user
          }
          return "未知用户"
      }
  },
  components:{
	  topTheme,
	  topLock
  },
  mounted () {
    //   this.Signincurrent()
  },
  methods:{
      Signincurrent(){
          if(sessionStorage.authorization){
              return
          }else{
              location.href = window._signOut().Ip;
          }
      },
      Signout(){
          this.$alert("确定注销登录吗？", "提示", { confirmButtonText: "确定" }).then(()=>{
                sessionStorage.removeItem('authorization');
                sessionStorage.removeItem('user');
                location.href = window._signOut().Ip;
          })
      },
	  screenCli(){
		  if (!screenfull.enabled) { // 如果不允许进入全屏，发出不允许提示
			  this.$message({
				  message: '不支持全屏',
				  type: 'warning'
			  })
			  return false
		  }
		  screenfull.toggle()

	  },
	  handleCommand(command) {
		  this.$message('click on item ' + command);
	  }
  }
}
</script>
<style lang="less" scoped>
    .top{
        width:100%;
        height:70px;
        /*background-image: url("../../static/img/bg.png");*/
        background-size: 100%;
        background-color: #002140;
        border-bottom: 1px solid rgba(238, 221, 218, 0.5);
     /*   box-shadow: 2px 2px 5px #888;*/
        position: absolute;
        z-index: 1;
        .top-content{
            height:100%;
            width:100%;
            display: flex;
            p{
                width:180px;
                height:46px;
                margin:auto 10px auto 30px;

            }
            h1{
                font-weight: 500;
                vertical-align: middle;
                font-size: 18px;
                line-height: 70px;
                color: #fff;
                margin-left:20px;
                width:280px;
				font-size: 600;
            }
            ul{
                display: flex;
                height:100%;
                flex:300;
                align-items: center;
                justify-content: flex-end;
                margin-right: 40px;
                li{
                  width:30px;
                  cursor:pointer;
                  margin:0 10px;
                  &:hover{
                      color:yellow;
                  }
                  span{
                      color: #fff;
                      font-weight: 600;
                      font-size: 16px;
                      width:100%;
                      display: inline-block;
                      white-space: nowrap;
                  }
                  i{
                      color:#fff;
                      font-size: 20px;

                  }
					.el-icon-screen{
						display: inline-block;
						width: 20px;
						height: 20px;
						background: url("../../static/img/screen.png");
						background-size: 100%  100%;
					}
					.top-userImg {
						margin: 0 8px 0 10px;
						padding: 2px;
						width: 30px;
						height: 30px;
						border-radius: 100%;
						box-sizing: border-box;
						border: 1px solid #eee;
					}
                  img{
                      width:19px;
                      height:19px;
                      border: none;
                      outline: none;
                  }
                }
            }
        }
    }
</style>

