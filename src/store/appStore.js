import {treeRouters} from '@/router/routers.js'
import {customZhiNanRouters} from '@/router/router-tree/zhinan-router.js';
import {customZuJianRouters} from '@/router/router-tree/zujian-router.js';
const appStore = {
    state: {
        globalLoading: false,
        customRouters: []//用于显示左侧导航（树）
    },
    getters: {
        
    },
    mutations:{
        opreateLobalLoading(state,val){
            state.globalLoading = val;
        },
        // 根据权限重组路由 -- 得到真正的treeRouters
        getRouterFromAccess(state){
            var pri = "admin";
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
        getCustomRouter(state,activeTreeName){
            var pri = "guest";
           
            var digui = function(routers,newArray){
                for(let i=0; i< routers.length; i++){
                    let item = routers[i];
                    var obj = {};
                    if(item.childs && item.childs.length > 0 
                        && (!item.access || (item.access && item.access == pri))){

                        obj.path = item.path ? item.path : "";
                        obj.name = item.name;
                        obj.title = item.title;
                        obj.component = item.component ? item.component : [];
                       
                        obj.childs = [];
                        newArray.push(obj);
                        digui(item.childs,obj.childs);
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
            var routers = [];
            
             /* 根据点击不同的左树菜单，（判断权限）显示不同的内容 */
             //指南菜单走这里
             if(customZhiNanRouters.name == activeTreeName){
            
                routers = customZhiNanRouters.childs;
            //组件菜单走这里
            }else if(customZuJianRouters.name == activeTreeName){
                
                routers = customZuJianRouters.childs;
            }
           
            state.customRouters = digui(routers,[]);
        }
    }
}
export default appStore;