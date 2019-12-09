<template>
  <div>
    <recipe-card v-for="recipe in recipes" v-bind:key="recipe.id" :recipe="recipe"/>
  </div>
</template>

<script>

import recipeCard from '../../components/RecipeCard'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    recipeCard
  },
  computed: {
    ...mapGetters({
      recipes: 'recipe/recipes'
    })
  },
  methods: {
    ...mapActions({
      getRecipes: 'recipe/getRecipes'
    })
  },
  mounted () {
    this.getRecipes()
  },
  data () {
    return {
    }
  }
}
</script>
