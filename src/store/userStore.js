import Cookies from 'js-cookie'
const user = {
    state: {
        userName: '',
        passWord: '',
        access:''
    },
    mutations: {
        //登录页面触发的事件
        loginFun:function(state,obj){
            state.userName = obj.u;
            state.passWord = obj.p;
            state.access = obj.pri;
            Cookies.set('userName', state.userName, { expires: 7 });
            Cookies.set('access', state.access, { expires: 7 });
        }
    },
    getters: {
    }
}
export default user;