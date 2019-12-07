<template>
  <div class="q-py-sm-xl q-py-xs-lg row q-mb-sm-xl q-mb-xs-md">
    <div class="text-deep-orange-13 text-h4 mRatBold offset-1 col-11 q-mb-sm-xl q-mb-xs-lg titleBig">Рецепты с дошиками, дошики в рецептах</div>
    <div class="col-sm-6 col-xs-12 offset-sm-1 q-mb-sm-xl q-mb-xs-md row q-col-gutter-sm-x-xl">
      <div class="col-sm-6 col-xs-10 offset-xs-1 offset-md-0 q-mb-xs-md">
        <q-btn no-caps flat
               class="full-width mRatAltBold text-h5 switchBtn"
               to="/cookbook/articles"
               @click="chooseArts"
               style="border: 3px solid #FF894C"
               v-bind:style="this.articlesChosen? 'background-color: #FF894C; color: white': 'color: #FF894C'"
               label="Статьи"/>
      </div>
      <div class="col-sm-6 col-xs-10 offset-xs-1 offset-md-0">
        <q-btn no-caps flat
               class="full-width mRatAltBold text-h5 switchBtn"
               to="/cookbook/videos"
               @click="chooseVids"
               style="border: 3px solid #FF894C"
               v-bind:style="this.videosChosen? 'background-color: #FF894C; color: white': 'color: #FF894C'"
               label="Видеорецепты"/>
      </div>
    </div>
    <div class="offset-1 col-10">
      <router-view/>
    </div>
    <div class="offset-sm-4 col-sm-4 col-xs-12 row justify-center text-h5 text-deep-orange-13 q-my-sm-xl q-my-xs-md">
      <div class="mRatAltBold text-center" style="text-decoration: underline; cursor: pointer">Показать еще рецепты</div>
      <q-icon name="keyboard_arrow_down" class="text-h4 cursor-pointer"/>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      articlesChosen: true,
      videosChosen: false
    }
  },
  methods: {
    chooseArts () {
      this.articlesChosen = true
      this.videosChosen = false
    },
    chooseVids () {
      this.articlesChosen = false
      this.videosChosen = true
    }
  }
}
</script>

<style lang = 'scss' scoped>
</style>
