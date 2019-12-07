<template>
  <div class="q-py-sm-xl q-py-xs-lg row q-mb-sm-xl q-mb-xs-md">
    <div class="text-deep-orange-13 text-h4 mRatBold offset-1 col-11 q-mb-sm-xl q-mb-xs-lg titleBig">Рецепты с дошиками, дошики в рецептах</div>
    <div class="col-sm-6 col-xs-12 offset-sm-1 q-mb-sm-xl q-mb-xs-md row q-col-gutter-x-xl">
      <div class="col-sm-6 col-xs-12 offset-xs-1">
        <q-btn no-caps flat
               class="full-width mRatAltBold text-h5 switchBtn"
               to="/cookbook/articles"
               @click="chooseArts"
               style="border: 3px solid #FF894C"
               v-bind:style="this.articlesChosen? 'background-color: #FF894C; color: white': 'color: #FF894C'"
               label="Назад к статьям"/>
      </div>
    </div>
    <div class="offset-1 col-10 column q-my-sm-xl q-my-xs-md">
      <div class="q-mb-sm-xl q-mb-xs-lg text-h5 mRatAltBold">Доширак-вок с курицей</div>
      <div class="row q-mb-sm-xl q-mb-xs-md">
        <div class="col-sm-6 col-xs-12 q-pr-sm-xl q-mb-xs-md">
          <img src="../../statics/img/noodles.png" alt="" width="100%" style="max-width: 654px">
        </div>
        <div class="col-sm-6 col-xs-12 column text-grey-19 q-pl-md justify-between">
          <div>
            <span class="text-h5 mRatBold">Ингредиенты:</span>
            <ul style="padding: 0; margin: 0">
              <li v-for="ingr in this.ingredients" v-bind:ingr="ingr" :key="ingr" class="text-h5 mRat">{{ingr}}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="mRatBold text-deep-orange-13 text-h4 q-my-sm-xl q-my-xs-md">Как приготовить?</div>
      <q-timeline color="deep-orange-13">
        <q-timeline-entry title="Подготовка" class="mRatBold">
          <div class="mRat text-h6">Предварительно разогрейте сковороду и отварите куриное филе (не забудьте посолить!)</div>
          <div class="mRat text-h6">Лапшу переложите в крупную миску, залейте кипятком на 3 минуты.</div>
        </q-timeline-entry>
        <q-timeline-entry title="Приготовление" class="mRatBold">
          <div class="mRat text-h6">Мелко нарежьте лук и тушите на медленном огне 3 минуты.</div>
          <div class="mRat text-h6">Добавьте к луку томат черри (разрезанный пополам).</div>
          <div class="mRat text-h6">Куриное филе порежьте кубиком 3—4 см.</div>
          <div class="mRat text-h6">Вылейте на разогретую сковороду с луком и томатом 20 мл коньяка, дайте ему испариться 3—5 секунд.</div>
          <div class="mRat text-h6">Самое время выложить на сковороду куриное филе, тушим 3—5 минут и добавляем лапшу.</div>
          <div class="mRat text-h6">Тушим всё вместе 5 минут, медленно помешивая наше блюдо.</div>
        </q-timeline-entry>
        <q-timeline-entry title="Завершение и подача" class="mRatBold">
          <div class="mRat text-h6">В конце добавляем сливки.</div>
          <div class="mRat text-h6">Вместе со сливками накрываем блюдо крышкой, ставим самый слабый огонь и даём ему спокойно потомиться в собственном соку.</div>
        </q-timeline-entry>
      </q-timeline>
      <div class="mRatBold text-h4 text-deep-orange-13 q-mb-sm-xl q-mb-xs-md">Дошики для рецепта</div>
      <div class="row q-gutter-sm-x-xl justify-xs-center">
        <product-card v-for="n in 5" :key="n" class="q-mb-xs-md col-xs-12"/>
<!--        <div class="q-mt-xl">-->
<!--          <img src="../statics/img/trRight.png" alt="">-->
<!--        </div>-->
      </div>
    </div>
  </div>
</template>

<script>

import productCard from '../../components/ProductCard'

export default {
  name: 'recipeCard',
  components: {
    productCard
  },
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

<style lang="scss">
  .titleBig{
  @media (max-width: $breakpoint-xs-max) {
    font-size: 26px;
    line-height: 32px;
  }
  }
</style>
