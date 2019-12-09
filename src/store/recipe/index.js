import API_URL from '../../boot/api'

const state = {
  recipes: null
}

const getters = {
  recipes: state => state.recipes
}

const actions = {
  getRecipes (context) {
    return new Promise((resolve, reject) => {
      API_URL.get('recipes')
        .then(response => {
          context.commit('GET_RECIPES', response.data.data)
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}

const mutations = {
  GET_RECIPES (state, payload) {
    state.recipes = Object.values(payload)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
