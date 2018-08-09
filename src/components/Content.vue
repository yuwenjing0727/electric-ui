<template>
    <div class="content">
      <routetree :boxstyle=boxstyle></routetree>
      <rightbox :boxstyle=boxstyle></rightbox>
    </div>
</template>
<script>
import routetree from './content/routetree.vue'
import rightbox from './content/rightbox.vue'
export default {
  data () {
    return {
      boxstyle:{
        routetreestyle:"15%",
        rightbox:"85%",
        show:false,
        fadeshow:true,
      }
    }
  },
  mounted() {
  },
  methods:{
    
  },
  components:{
    routetree,
    rightbox
  }
}
</script>

<style lang="less" scoped>
    .content{
      width:100%;
      background-color: #eee;
      display: flex;
      position: absolute;
      top:70px;
      bottom: 0px;
      overflow: hidden;
    }
</style>

