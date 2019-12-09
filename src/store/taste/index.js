import API_URL from '../../boot/api'

const state = {
  tastes: null
}

const getters = {
  tastes: state => state.tastes
}

const actions = {
  getTastes (context) {
    return new Promise((resolve, reject) => {
      API_URL.get('tastes')
        .then(response => {
          context.commit('GET_TASTES', response.data.data)
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}

const mutations = {
  GET_TASTES (state, payload) {
    state.tastes = Object.values(payload)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
