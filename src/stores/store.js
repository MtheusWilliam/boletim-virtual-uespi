import Vue from 'vue'
import Vuex from 'vuex';
import mainModule from './modules/mainModule';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
      main: mainModule,
  }
})