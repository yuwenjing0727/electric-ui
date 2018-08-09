// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $http from './api'
import ElementUI from 'element-ui';
import {mixins} from '@/mixins'//引入混合
import utils from './utils/index'
import store from './store'
// import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.mixin(mixins);//使用混合

// 注册自定义的常用方法
Vue.use(utils);
Vue.prototype.$http = $http
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
	store,
  components: { App },
  template: '<App/>'
})
