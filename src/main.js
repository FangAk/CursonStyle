import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from './store'
//数据
import Data from './Data'
Vue.prototype.Data = Data
//饿了么
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
Vue.config.productionTip = false;




import scroll from 'vue-seamless-scroll'
Vue.use(scroll)
import data from '@/permission' 
//时间转化
import moment from "moment"; //导入文件
moment.locale("zh-cn"); //需要汉化
Vue.prototype.$moment = moment; //赋值使用
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");