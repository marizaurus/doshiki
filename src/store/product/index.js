import API_URL from '../../boot/api'

const state = {
  products: null
}

const getters = {
  products: state => state.products
}

const actions = {
  getProducts (context) {
    return new Promise((resolve, reject) => {
      API_URL.get('products')
        .then(response => {
          context.commit('GET_PRODUCTS', response.data.data)
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}

const mutations = {
  GET_PRODUCTS (state, payload) {
    state.products = Object.values(payload)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
