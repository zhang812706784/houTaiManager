import Vuex from 'vuex';
import Vue from 'vue';
import user from './userStore'
import appStore from './appStore'
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
    },
    mutations: {
    },
    getters:{

    },
    modules:{
        user,
        appStore
    }
  });
export default store;