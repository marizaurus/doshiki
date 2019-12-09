import API_URL from '../../boot/api'

const state = {
  steps: null
}

const getters = {
  steps: state => state.steps
}

const actions = {
  getSteps (context) {
    return new Promise((resolve, reject) => {
      API_URL.get('steps')
        .then(response => {
          context.commit('GET_STEPS', response.data.data)
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}

const mutations = {
  GET_STEPS (state, payload) {
    state.steps = Object.values(payload)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
