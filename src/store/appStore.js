import {treeRouters} from '@/router/routers.js'
import {customZhiNanRouters} from '@/router/router-tree/zhinan-router.js';
import {customZuJianRouters} from '@/router/router-tree/zujian-router.js';
const appStore = {
    state: {
        globalLoading: false
    },
    getters: {
        // 根据权限重组路由 -- 得到真正的treeRouters
        getRouterFromAccess(state){
            var pri = "admin";
            var newTreeRouters = [];
           
            var digui = function(routers,newArray){
                for(let i=0; i< routers.length; i++){
                    let item = routers[i];
                    var obj = {};
                    if(item.children && item.children.length > 0){

                        obj.path = item.path;
                        obj.name = item.name;
                        obj.title = item.title;
                        obj.component = item.component;
                       
                        obj.children = [];
                        newArray.push(obj);
                        digui(item.children,obj.children);
                    } else {
                        //如果存在代表要受权限限制。如果没有。则不受权限限制。
                        if(item.access){

                            if(item.access == pri){
                                obj = item;
                                newArray.push(obj);
                            }

                        }else{

                            obj = item;
                            newArray.push(obj);

                        }
                    }
                    
                }
                return newArray;
            };
            return digui(treeRouters,[]);
            
        },
        // 得到自定义的路由，用于菜单的显示
        getCustomRouter(state){
            var pri = "admin";
        }
    },
    mutations:{
        opreateLobalLoading(state,val){
            state.globalLoading = val;
        }
    }
}
export default appStore;