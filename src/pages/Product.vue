<template>
  <div class="q-py-xs-lg q-py-sm-xl row">
    <div class="col-10 offset-1 column">
      <q-breadcrumbs class="text-grey-8 q-pb-sm-xl q-pb-xs-md mRat" active-color="text-grey-8">
        <template v-slot:separator>
          <q-icon size="0.7em" name="fiber_manual_record" class="text-deep-orange-13"/>
        </template>
        <q-breadcrumbs-el label="Лапша быстрого приготовления"/>
        <q-breadcrumbs-el label="Тайланд"/>
        <q-breadcrumbs-el label="Рисовая лапша"/>
        <q-breadcrumbs-el label="Соус пад тай"/>
      </q-breadcrumbs>
      <div class="mRatBold text-grey-10 text-h4 gt-xs">Рисовая лапша под соусом пад тай 135гр.</div>
      <div class="mRatBold text-grey-10 text-h6 q-pb-xs-md lt-sm">Рисовая лапша под соусом пад тай 135гр.</div>
      <div class="row q-col-gutter-sm-x-xl">
        <div class="col-xs-12 col-sm-5 column q-mb-xs-md">
          <div class="q-py-xl q-px-md q-mt-sm-xl q-mt-xs-md q-mb-xs-md" style="border: 3px solid #818181; border-radius: 5px">
            <img src="../statics/img/productBig.png" alt="" width="100%" style="max-width: 426px">
          </div>
        </div>
        <div class="col-xs-12 col-sm-7 column justify-around">
          <div class="row justify-between">
            <div class="column q-gutter-y-sm text-grey-10 mRat text-body-2 q-mb-xs-md">
              <div class="row items-center">
                <q-rating readonly v-model="ratingModel" size="1.8em" color="deep-orange-13"
                          icon="star_border" icon-selected="star" class="q-mr-sm"/>
                <div class="mRatBold text-body2 text-deep-orange-13">4,1</div>
              </div>
              <div class="text-deep-orange-13">Товар есть в наличии</div>
              <div>Товар есть в наличии</div>
              <div>Производитель: Тайланд</div>
              <div>Комплектация: Контейнер</div>
              <div>Производитель: Тайланд</div>
              <div>Вес: 135г</div>
              <div>Код товара: 599</div>
            </div>
            <div class="column items-center justify-center">
              <div class="row q-mb-sm justify-around full-width">
                <div class="row items-end q-gutter-x-md">
                  <div class="newPrice text-deep-orange-13 mRatAltBold text-h5">125 р.</div>
                  <div class="prevPrice mRatAltBold text-body1 text-grey-7" style="text-decoration: line-through">148 р.</div>
                </div>
                <q-icon class="text-h4 text-deep-orange-13 cursor-pointer"
                        :name="isFav ? 'favorite' : 'favorite_border'" @click="isFav = !isFav"/>
              </div>
              <q-btn flat no-caps class="bg-deep-orange-13 text-white mRatAltBold text-h5 q-px-xl q-mb-md" label="В корзину"/>
              <div class="text-body-2 text-grey-10 mRatBold cursor-pointer" style="text-decoration: underline">Заказать в 1 клик</div>
            </div>
          </div>
          <div class="text-body-2 text-grey-10 q-mt-xs-md">
            <span class="text-grey-9 mRatBold">Описание:</span>
            <div class="mRat">Рисовая лапша под соусом пад тай 135гр.Описание: Рисовая лапша под соусом пад тай 135гр.Описание: Рисовая лапша под соусом пад тай 135гр.Описание: Рисовая лапша под соусом пад тай 135гр.Описание: Рисовая лапша под соусом пад тай 135гр.Описание: Рисовая лапша под соусом пад тай 135гр.Описание: Рисовая лапша под соусом пад тай 135гр.</div>
          </div>
        </div>
      </div>
      <div class="row q-gutter-x-xl q-my-sm-xl q-my-xs-md">
        <div class="mRatBold text-h5 text-grey-10 q-mt-sm-lg q-mt-xs-sm q-mb-xs-md">Другие вкусы</div>
        <div v-for="n in 6" :key="n" class="column justify-center text-center">
          <div class="q-py-xl q-px-xl q-mb-md" style="border: 3px solid #FF894C; border-radius: 5px"></div>
          <div class="text-body2 mRatBold text-grey-10">Говядина</div>
        </div>
<!--        <div class="q-mt-lg">-->
<!--          <img src="../statics/img/trRight.png" alt="">-->
<!--        </div>-->
      </div>
      <div class="column q-my-sm-xl q-my-xs-md">
        <div class="mRatBold text-h5 text-grey-10 q-mb-sm-xl q-mb-xs-md">Просмотренные товары</div>
        <div class="row q-gutter-x-xl justify-xs-center">
          <product-card v-for="n in 5" :key="n" class="q-mb-xs-md col-xs-12"/>
<!--          <div class="q-mt-xl">-->
<!--            <img src="../statics/img/trRight.png" alt="">-->
<!--          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import productCard from '../components/ProductCard'

export default {
  data () {
    return {
      ratingModel: 4,
      isFav: false
    }
  },
  components: {
    productCard
  }
}

</script>
