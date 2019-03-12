import Vue from 'vue'
import VueRouter from 'vue-router'
import Cookies from 'js-cookie'
import {menuRounters} from './routers.js'
import login from "@/components/login"

Vue.use(VueRouter)
let routerCon = [{
    //登录页
    path:"/login",
    name: "login",
    component: login
  }
].concat(menuRounters).concat({
  //登录页
  path:"*",
  name: "404",
  component: () => import("@/components/error/404.vue") 
});

export const router = new VueRouter({
  routes: routerCon
});
//全局的路由钩子函数
router.beforeEach(function(to, from, next){
  var userName = Cookies.get('userName');
  //登录页
  if(to.name != "login" && !userName){
    // 用户名为空，异常要跳转到其他页面
    next({
      name: "login"
    });
  }else{
    //用户名不为空需要对权限进行验证
    JSON.stringify();
    var pri = Cookies.get('access');
    //路由的meta属性中存放着路由权限
    if(JSON.stringify(to.meta) != "{}" && to.meta.access != pri){
      //代表路由没权限
      alert(11)
      next({
        name: "404"
      });
    }else{
      next();
    }
    
  }
})

