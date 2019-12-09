import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import product from './product'
import recipe from './recipe'
import manufacturer from './manufacturer'
import taste from './taste'
import review from './review'
import step from './step'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      // example
      auth,
      product,
      recipe,
      manufacturer,
      taste,
      review,
      step
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
