<template>
  <div class="column q-my-xl offset-1">
    <div class="q-mb-xl text-h5 mRatAltBold">Доширак-вок с курицей</div>
    <div class="row">
      <div class="col-6 q-pr-xl">
        <img src="../statics/img/noodles.png" alt="" width="100%">
      </div>
      <div class="col-6 column text-grey-19 q-pl-md justify-between">
        <div>
          <span class="text-h5 mRatBold">Ингредиенты:</span>
          <ul style="padding: 0; margin: 0">
            <li v-for="ingr in this.ingredients" v-bind:ingr="ingr" :key="ingr" class="text-h5 mRat">{{ingr}}</li>
          </ul>
        </div>
        <q-btn flat no-caps label="Подробнее"
               class="bg-deep-orange-13 text-white q-px-xl q-py-sm text-h5 mRatAltBold q-mb-md"
               style="width: min-content"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'recipe',
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
