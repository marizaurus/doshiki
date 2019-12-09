<template>
  <div class="q-py-sm-xl q-py-xs-lg row q-mb-sm-xl q-mb-xs-md">
    <q-breadcrumbs class="text-grey-8 mRat offset-1 col-11 q-mb-sm-xl q-mb-xs-lg" active-color="text-grey-8">
      <template v-slot:separator>
        <q-icon size="0.7em" name="fiber_manual_record" class="text-deep-orange-13"/>
      </template>
      <q-breadcrumbs-el label="Главная" to="/"/>
      <q-breadcrumbs-el label="Рецепты" to="/cookbook/articles"/>
      <q-breadcrumbs-el :label="this.$route.path === '/cookbook/articles'? 'Рецепты в статьях' : 'Рецепты в видеороликах'"/>
    </q-breadcrumbs>
    <div class="text-deep-orange-13 text-h4 mRatBold offset-1 col-11 q-mb-sm-xl q-mb-xs-lg titleBig">Рецепты с дошиками, дошики в рецептах</div>
    <div class="col-sm-6 col-xs-12 offset-sm-1 q-mb-sm-xl q-mb-xs-md row q-col-gutter-sm-x-xl">
      <div class="col-sm-11 col-md-6 offset-xs-1 offset-md-0 q-mb-xs-md">
        <q-btn no-caps flat
               class="full-width mRatAltBold text-h5"
               to="/cookbook/articles"
               style="border: 3px solid #FF894C"
               v-bind:style="this.$route.path === '/cookbook/articles'? 'background-color: #FF894C; color: white': 'color: #FF894C'"
               label="Статьи"/>
      </div>
      <div class="col-sm-11 col-md-6 offset-xs-1 offset-md-0">
        <q-btn no-caps flat
               class="full-width mRatAltBold text-h5"
               to="/cookbook/videos"
               style="border: 3px solid #FF894C"
               v-bind:style="this.$route.path === '/cookbook/articles'? 'color: #FF894C': 'background-color: #FF894C; color: white'"
               label="Видеорецепты"/>
      </div>
    </div>
    <div class="offset-1 col-10">
      <router-view/>
    </div>
<!--    <div class="offset-sm-4 col-sm-4 col-xs-12 row justify-center text-h5 text-deep-orange-13 q-my-sm-xl q-my-xs-md">-->
<!--      <div class="mRatAltBold text-center" style="text-decoration: underline; cursor: pointer">Показать еще рецепты</div>-->
<!--      <q-icon name="keyboard_arrow_down" class="text-h4 cursor-pointer"/>-->
<!--    </div>-->
  </div>
</template>

<script>

export default {
  data () {
    return {
      articlesChosen: true
    }
  }
}
</script>

<style lang = 'scss' scoped>
</style>
