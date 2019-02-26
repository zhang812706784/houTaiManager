
import Main from '@/components/main'
import {zhiNanRouters} from '@/router/router-tree/zhinan-router.js';
import {zuJianRouters} from '@/router/router-tree/zujian-router.js';
//treeRouters 真正的路由（导航路由可能是后台返回的） 

export const treeRouters = [
    {
        path: 'zhinan',
        name: 'zhinan',
        title: '指南',
        component: Main,
        children: zhiNanRouters
    },
    {
        path: 'zujian',
        name: 'zujian',
        title: '组件',
        component: Main,
        children: zuJianRouters
        //component: () =>import('@/components/mainCom/z2.vue')
        // children: [{
        //     path: 'z2',
        //     name: 'z2',
        //     title: 'z2',
        //     component: () =>import('@/components/mainCom/z2.vue'),
        //     children: []
        // }]
    },
    {
        path: 'ziyuan',
        name: 'ziyuan',
        title: '资源',
        component: Main
        //component: () =>import('@/components/mainCom/z2.vue')
        // children: [{
        //     path: 'z2',
        //     name: 'z2',
        //     title: 'z2',
        //     component: () =>import('@/components/mainCom/z2.vue'),
        //     children: []
        // }]
    },
    {
        path: 'luntan',
        name: 'luntan',
        title: '论坛',
        component: Main
        //component: () =>import('@/components/mainCom/z2.vue')
        // children: [{
        //     path: 'z2',
        //     name: 'z2',
        //     title: 'z2',
        //     component: () =>import('@/components/mainCom/z2.vue'),
        //     children: []
        // }]
    }
    
];
//登录页面以后进入首页。需要的路由
export const menuRounters = [
    {
        path:'/',
        redirect:{
            name:"designPrinciples"
        }// 重定向到主页,
    },  
    {
        path: '/menu_list',
        name: 'menu_name',
        component: () =>import('@/components/menuListCom.vue'),
        children: treeRouters
}];
