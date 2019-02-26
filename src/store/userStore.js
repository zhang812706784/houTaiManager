const user = {
    state: {
        userstore_name: '',
        userstore_password: ''
    },
    mutations: {
        //登录页面触发的事件
        loginFun:function(state,obj){
            state.userstore_name = obj.u;
            state.userstore_password = obj.p;
        }
    },
    getters: {
    }
}
export default user;