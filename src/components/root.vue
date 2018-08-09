<template>
  <div class="root">
    <headom></headom>
    <the-content></the-content>
  </div>
</template>

<script>
import headom from "./Header.vue"
import theContent from './Content.vue'
export default {
  data () {
    return {
      
    }
  },
  components:{
      headom,
      theContent
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
