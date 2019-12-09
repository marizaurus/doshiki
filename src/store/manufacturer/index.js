import API_URL from '../../boot/api'

const state = {
  manufacturers: null
}

const getters = {
  manufacturers: state => state.manufacturers
}

const actions = {
  getManufacturers (context) {
    return new Promise((resolve, reject) => {
      API_URL.get('manufacturers')
        .then(response => {
          context.commit('GET_MANUFACTURERS', response.data.data)
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}

const mutations = {
  GET_MANUFACTURERS (state, payload) {
    state.manufacturers = Object.values(payload)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
