import Vue from 'vue'
import Vuex from 'vuex'
// 引入模块并在modules只写入
import tab from './tab'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    tab
  }
})
