<template>
    <div class="model">
        <div>
            <!-- 构建内容 -->

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
      .model{
        width:100%;
        background-color: #f1cccc;
        position: absolute;
        z-index: 1;
        top:75px;
        bottom: 0;
        box-shadow:2px 2px 15px #888888;
      }
</style>