import Vue from 'vue'
import VueRouter from 'vue-router'
import {menuRounters,treeRouters} from './routers.js'
import login from "@/components/login"

Vue.use(VueRouter)
let routerCon = [{
    //登录页
    path:"/login",
    name: "login",
    component: login
  }
].concat(menuRounters);

export const router = new VueRouter({
  routes: routerCon
});
//全局的路由钩子函数
router.beforeEach(function(to, from, next){
  var storeState = router.app.$options.store.state;
  //登录页
  if(to.name != "login" && !storeState.user.userstore_name){
    next({
      name: "login"
    });
  }else{
    next();
  }
})

