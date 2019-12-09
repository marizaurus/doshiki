import API_URL from '../../boot/api'

const state = {
  reviews: null
}

const getters = {
  reviews: state => state.reviews
}

const actions = {
  getReviews (context) {
    return new Promise((resolve, reject) => {
      API_URL.get('reviews')
        .then(response => {
          context.commit('GET_REVIEWS', response.data.data)
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}

const mutations = {
  GET_REVIEWS (state, payload) {
    state.reviews = Object.values(payload)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
