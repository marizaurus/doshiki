<template>
  <div class="q-py-xl">
    <div class="row q-mb-xl">
      <div class="text-deep-orange-13 text-h4 mRatBold offset-1 col-11 q-mb-xl">Рецепты с дошиками, дошики в рецептах</div>
      <div class="col-6 offset-1 q-mb-xl row q-col-gutter-x-xl">
        <div class="col-6">
          <q-btn no-caps flat
                 class="full-width mRatAltBold text-h5 switchBtn"
                 to="/cookbook/articles"
                 @click="chooseArts"
                 style="border: 3px solid #FF894C"
                 v-bind:style="this.articlesChosen? 'background-color: #FF894C; color: white': 'color: #FF894C'"
                 label="Статьи"/>
        </div>
        <div class="col-6">
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
      <div class="offset-4 col-4 row justify-center text-h5 text-deep-orange-13 q-my-xl">
        <div class="mRatAltBold" style="text-decoration: underline">Показать еще рецепты</div>
        <q-icon name="keyboard_arrow_down" class="text-h4"/>
      </div>
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
  .switchBtn{
    border-radius: 5px;
  }
</style>
