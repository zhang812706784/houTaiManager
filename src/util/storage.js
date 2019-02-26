//对本地存储做操作
export const Storage = {
    addLocalStorage(key,val){
        //如果是对象或者是数组。先转化成json字符串
        if(val instanceof Object){
            val = JSON.stringify(val);
        }
        localStorage.setItem(key,val);
    },
    getLocalStorage(key){
        var val = localStorage.getItem(key);
        try {
            let tempVal = JSON.parse(val);
            if(tempVal instanceof Object){
                return tempVal;
            }else{
                return val
            }
        } catch (error) {
            return val;
        }
    },
    delLocalStorage(key,flag){
        // clearAll
        if(flag){
            localStorage.clear();
        }else{
            localStorage.removeItem(key);
        }
        
    }
}