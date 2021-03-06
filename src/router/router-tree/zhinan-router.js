//用于路由映射
export const zhiNanRouters = [{
    //设计原则
    path: 'designPrinciples',
    name: 'designPrinciples',
    title: '设计原则',
    meta: {
        access:['guest'],
    },
    component: () =>import('@/components/zhinan/designPrinciples')
},{
    // 导航
    path: 'navigator',
    name: 'navigator',
    meta: {
        access:['admin'],
    },
    title: '导航',
    component: () =>import('@/components/zhinan/navigator')
}];
//用于左树内容显示
export const customZhiNanRouters = {
    name: 'zhinan',//对应name的值为routers.js文件中treeRouters中的name
    childs: [{
        title:'设计原则',
        name: 'designPrinciplesParent',
        childs:[{
            //设计原则 -- 规定每个组件的path和name的值一定要一样
            access:['guest'],
            path: 'designPrinciples',
            name: 'designPrinciples',
            title: '设计原则详情',
            component: () =>import('@/components/zhinan/designPrinciples')
        }]
    },{
        // 导航
        path: 'navigator',
        name: 'navigator',
        title: '导航',
        access:['admin'],
        component: () =>import('@/components/zhinan/navigator')
    }]
}