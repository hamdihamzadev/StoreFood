import Vue from 'vue'
import Vuex from 'vuex'
import category from './category'
import cart from './cart'

Vue.use(Vuex)

export default new Vuex.Store({
 
 modules: {
  category,
  cart
  }
})
