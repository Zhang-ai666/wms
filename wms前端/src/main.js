import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/global.css';
import axios from 'axios';
import VueRouter from 'vue-router';
import router from './router';
import store from './store';
import * as echarts from "echarts";

Vue.prototype.$axios=axios;
Vue.prototype.$httpUrl='http://localhost:8008'
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.prototype.$echarts = echarts;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
