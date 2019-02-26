// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import {router} from './router/index.js';
import store from '@/store/store.js'
import App from './components/App.vue';
import ElementUI from 'element-ui';
import axios from 'axios';
import {Storage} from '@/util/Storage.js'
import 'element-ui/lib/theme-chalk/index.css';
import '@/css/common.css'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$Element = ElementUI;
Vue.prototype.$Storage = Storage;
Vue.prototype.$http = axios;
var vm = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
