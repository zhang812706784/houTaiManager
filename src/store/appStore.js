const appStore = {
    state: {
        globalLoading: false        
    },
    mutations:{
        opreateLobalLoading(state,val){
            state.globalLoading = val;
        }
    }
}
export default appStore;