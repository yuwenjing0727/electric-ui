<template>
    <div class="table-content">
      <div class="navlist">
        <span class="line"></span>
        <div class="title">
          <!-- 二级标题 -->
          <h2>结算单管理</h2>
          <span>结算单模板管理</span>
          
        </div>
        <div class="btns">
          <!-- 功能按钮 -->
        </div>

        
      </div>
      <div class="tablebox">
          <div>
            <!-- 构建内容 -->

          </div>
      </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      
    }
  },
  mounted(){
    var self=this;
  },
  methods:{
    // initheight(){
    //   debugger
    //   var boxheight=document.querySelector(".table-content").clientHeight
    //   var tablebox=document.querySelector(".tablebox");
    //   tablebox.style.height=boxheight-63+"px"
    // }
  },
  components:{
    
  }
}
</script>

<style lang="less" scoped>
    .table-content{
      height:100%;
      width:100%;
      background-color: #f2f2f2;
      box-sizing: border-box;
      position: relative;
      .navlist{
        height:60px;
        margin-left:25px;
        box-sizing: border-box;
        border-bottom: 3px solid #308b8c;
        position: relative;
        display: flex;
        .line{
          position: absolute;
          height:3px;
          width:25px;
          left:-25px;
          bottom:-3px;
          background-image: url("../../../../../../static/img/border.png")
        }
        .title{
          height:100%;
          display: flex;
          color:#308b8c;
          h2{
            font-family: '微软雅黑';
            font-weight: 500;
            font-size: 24px;
            line-height: 60px;
            margin-right: 15px;
          }
          span{
            font-weight: 400;
            line-height: 70px;
          }
        }
      }
      .tablebox{
        width:100%;
        background-color: #fff;
        position: absolute;
        top:75px;
        bottom: 0;
        box-shadow:2px 2px 15px #888888;
      }
    }
</style>