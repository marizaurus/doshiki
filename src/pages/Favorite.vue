<template>
  <div class="q-py-sm-xl q-py-xs-lg row q-mb-sm-xl q-mb-xs-md">
    <div class="offset-1 col-10">
      <q-breadcrumbs class="text-grey-8 mRat  q-mb-sm-xl q-mb-xs-lg" active-color="text-grey-8">
        <template v-slot:separator>
          <q-icon size="0.7em" name="fiber_manual_record" class="text-deep-orange-13"/>
        </template>
        <q-breadcrumbs-el label="Главная" to="/"/>
        <q-breadcrumbs-el label="Каталог" to="/catalogue"/>
        <q-breadcrumbs-el label="Избранные товары"/>
      </q-breadcrumbs>
      <div class="text-deep-orange-13 text-h4 mRatBold offset-1 col-11 q-mb-sm-xl q-mb-xs-lg titleBig">Избранные товары</div>
      <q-btn flat no-caps class="mRatBold bg-deep-orange-13 text-white text-h6" @click="clearFavs" label="Очистить избранное"/>
      <big-card v-for="favid in favs" v-bind:id="favid" :key="favid"/>
    </div>
  </div>
</template>

<script>

import bigCard from '../components/BigProductCard'

export default {
  name: 'Favorite',
  components: {
    bigCard
  },
  data () {
    return {
      isFav: true,
      ratingModel: 4,
      favs: []
    }
  },
  beforeMount () {
    this.favs = localStorage.getItem('fav-products').split(';')
  },
  methods: {
    clearFavs () {
      localStorage.clear()
    }
  }
}
</script>

<style scoped>

</style>
