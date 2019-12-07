<template>
  <div class="column q-my-sm-xl q-my-xs-md offset-1 col-10">
    <div class="q-mb-sm-xl q-mb-xs-lg text-h5 mRatAltBold">Доширак-вок с курицей</div>
    <div class="row q-mb-sm-xl q-mb-xs-md">
      <div class="col-sm-6 col-xs-12 q-pr-sm-xl q-mb-xs-md">
        <img src="../statics/img/noodles.png" alt="" width="100%" style="max-width: 654px">
      </div>
      <div class="col-sm-6 col-xs-12 column text-grey-19 q-pl-sm-md justify-between">
        <div class="q-mb-xs-md">
          <span class="text-h5 mRatBold recipeText">Ингредиенты:</span>
          <ul style="padding: 0; margin: 0">
            <li v-for="ingr in this.ingredients" v-bind:ingr="ingr" :key="ingr" class="text-h5 mRat recipeText">{{ingr}}</li>
          </ul>
        </div>
        <q-btn flat no-caps label="Подробнее"
               class="bg-deep-orange-13 text-white q-px-xl q-py-xs text-h5 mRatAltBold q-mb-md"
               style="width: min-content"
               to='/cookbook/articles/artNum'/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'recipeCard',
  data () {
    return {
      ingredients: [
        'Лапша "Доширак", 2 шт',
        'Куриное филе, 250 гр',
        'Луковица крупная, 1 шт',
        'Томаты черри, 8 шт',
        'Зелёный лук',
        'Сливки 10%, 50 мл',
        'Коньяк, 20 мл',
        'Соль/перец и прочие специи'
      ]
    }
  }
}
</script>

<style lang = 'scss'>
  .recipeText{
    @media (max-width: $breakpoint-xs-max){
      font-size: 16px;
    }
  }
</style>
