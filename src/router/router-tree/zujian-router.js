//用于路由映射
export const zuJianRouters = [{
    //表格
    path: 'zujian_tabel',
    name: 'zujian_tabel',
    title: '表格',
    component: () =>import('@/components/zujian/table/table')
},{
    //表单
    path: 'zujian_form_1',
    name: 'zujian_form_1',
    title: '表单1',
    component: () =>import('@/components/zujian/form')
},{
    //表单
    path: 'zujian_form',
    name: 'zujian_form',
    title: '表单',
    component: () =>import('@/components/zujian/form')
},{
    // 组合
    path: 'zujian_zuhe',
    name: 'zujian_zuhe',
    title: '组合',
    component: () =>import('@/components/zujian/zuhe')
}];
//用于左树内容显示
export const customZuJianRouters = {
    name: 'zujian',//对应name的值为routers.js文件中treeRouters中的name
    childs: [{
        title:'表格',
        name: 'tableParent',
        childs:[{
            //表格
            path: 'zujian_tabel',
            name: 'zujian_tabel',
            access:['guest'],
            title: '表格',
            component: () =>import('@/components/zujian/table/table')
        },{
            //表单
            path: 'zujian_form_1',
            name: 'zujian_form_1',
            access:['admin'],
            title: '表单1',
            component: () =>import('@/components/zujian/form')
        }]
    },{
        title:'表单',
        name: 'formParent',
        access:['guest'],
        childs:[{
            //表单
            path: 'zujian_form',
            name: 'zujian_form',
            title: '表单',
            component: () =>import('@/components/zujian/form')
        }]
    },{
        // 组合
        path: 'zujian_zuhe',
        name: 'zujian_zuhe',
        title: '组合',
        component: () =>import('@/components/zujian/zuhe')
    }]
}