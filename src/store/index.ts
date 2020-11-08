import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)//将store放到vue.prototype里面

const store= new Vuex.Store({
  state: {
    count: 0
  },
  mutations:{
    increment(state){
      return state.count+=1
    }
  }
});

store.commit('increment',1)//method不能直接调用而是commit，传参的话就是后面的1
export default store;
