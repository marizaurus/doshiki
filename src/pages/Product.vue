<template>
  <div class="q-py-xs-lg q-py-sm-xl row">
    <div class="col-10 offset-1 column">
      <q-breadcrumbs class="text-grey-8 q-pb-sm-xl q-pb-xs-md mRat" active-color="text-grey-8">
        <template v-slot:separator>
          <q-icon size="0.7em" name="fiber_manual_record" class="text-deep-orange-13"/>
        </template>
        <q-breadcrumbs-el label="Главная" to="/"/>
        <q-breadcrumbs-el label="Каталог" to="/catalogue"/>
        <q-breadcrumbs-el>{{ product.title }}</q-breadcrumbs-el>
      </q-breadcrumbs>
      <div class="mRatBold text-grey-10 text-h4 gt-xs q-mb-sm-xl q-mb-xs-md ">{{ product.title }}</div>
      <div class="mRatBold text-grey-10 text-h6 q-pb-xs-md lt-sm">{{ product.title }}</div>
      <div class="row q-col-gutter-sm-x-xl">
        <div class="col-xs-12 col-sm-5 column q-mb-xs-md q-mb-sm-none">
          <div class="q-py-lg q-px-md bg-white" style="border: 3px solid #818181; border-radius: 5px; max-width: 350px;">
            <img :src="this.imgSource" alt="" style="max-width: 300px; max-height: 300px; display: block; margin: auto;">
          </div>
        </div>
        <div class="col-xs-12 col-sm-7 column justify-between">
          <div class="row justify-between">
            <div class="column q-gutter-y-sm text-grey-10 mRat text-body-2 q-mb-xs-md">
              <div class="row items-center">
                <q-rating readonly v-model="getRating" size="1.8em" color="deep-orange-13"
                          icon="star_border" icon-selected="star" class="q-mr-sm"/>
                <div class="mRatBold text-body2 text-deep-orange-13">4,1</div>
              </div>
              <div class="text-deep-orange-13">Товар есть в наличии</div>
              <div>Добавка: <span v-for="add in product.additives" :key="add.id">{{add.description}}; </span></div>
              <div>Производитель: <span v-for="mf in product.manufacturer" :key="mf.id">{{mf.description}}; </span></div>
              <div>Комплектация: <span v-for="set in product.sets" :key="set.id">{{set.description}}; </span></div>
              <div>Вес: {{ product.weight }}г</div>
              <div>Код товара: {{ product.id }}</div>
            </div>
            <div class="column items-center justify-center">
              <div class="row q-mb-sm justify-around full-width">
                <div class="row items-end q-gutter-x-md">
                  <div class="row items-center justify-center" style="border-radius: 6px; border: 2px solid #FD7014">
                    <q-btn dense flat class="bg-deep-orange-13 text-white text-caption"
                           style="border-radius: 0; width: 20px; height: 25px;"
                           icon="remove" :ripple="false" @click="removeItem(count)"/>
                    <div class="mRat text-caption q-px-sm">{{count}}</div>
                    <q-btn dense flat class="bg-deep-orange-13 text-white text-caption"
                           style="border-radius: 0; width: 20px; height: 25px;"
                           icon="add" :ripple="false" @click="addItem"/>
                  </div>
                  <div class="newPrice text-deep-orange-13 mRatAltBold text-h5">{{ product.discountPrice}} р.</div>
                  <div class="prevPrice mRatAltBold text-body1 text-grey-7" style="text-decoration: line-through">{{ product.price }} р.</div>
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
            <div class="mRat">{{ product.description }}</div>
          </div>
        </div>
      </div>
      <div class="row q-gutter-x-xl q-my-sm-lg q-my-xs-md">
        <div class="q-gutter-y-lg col-8">
          <div class="mRatBold text-h5 text-grey-10 q-mt-sm-lg q-mt-xs-sm q-mb-xs-md">Отзывы</div>
          <div v-for="rv in product.reviews" :key="rv.id" class="column">
            <div class="mRatBold text-deep-orange-13 text-h6">{{ (rv.author[0].name != null)? rv.author[0].name : "Аноним"}}</div>
            <q-rating readonly v-model="rv.rating" size="1.5em" color="deep-orange-13"
                      icon="star_border" icon-selected="star" class="q-mr-sm"/>
            <div class="mRat text-grey-10 text-h6">{{ (rv.text != null)? rv.text : "Pfvtxfntkmysq ljibr!"}}</div>
          </div>
          <div class="mRat text-h6 text-grey-10"><span class="regLink">Зарегистрируйтесь</span> или <span class="regLink">Войдите</span>, чтобы оставить отзыв</div>
          <div class="row items-center">
            <div class="row q-mb-sm">
              <div class="mRat text-h6 text-grey-10 q-mr-lg">Как тебе этот дошик?</div>
              <q-rating v-model="userRating" size="1.5em" color="deep-orange-13"
                        icon="star_border" icon-selected="star" class="q-mr-sm"/>
            </div>
            <q-input
              v-model="text"
              type="textarea"
              style="max-width: 550px; width: 100%"
              label="Добавьте свой отзыв..."
              outlined
              color="deep-orange-12"
              class="mRat q-mr-lg text-body2"
            />
            <q-btn flat no-caps class="bg-deep-orange-13 text-white mRatAltBold text-h6 q-px-md" label="Отправить"/>
        </div>
        </div>
      </div>
<!--      <div class="row q-gutter-x-xl q-my-sm-xl q-my-xs-md">-->
<!--        <div class="mRatBold text-h5 text-grey-10 q-mt-sm-lg q-mt-xs-sm q-mb-xs-md">Другие вкусы</div>-->
<!--        <div v-for="n in 6" :key="n" class="column justify-center text-center">-->
<!--          <div class="q-py-xl q-px-xl q-mb-md" style="border: 3px solid #FF894C; border-radius: 5px"></div>-->
<!--          <div class="text-body2 mRatBold text-grey-10">Говядина</div>-->
<!--        </div>-->
<!--      </div>-->
      <div class="column q-my-sm-lg q-my-xs-md">
        <div class="mRatBold text-h5 text-grey-10 q-mb-sm-xl q-mb-xs-md">Просмотренные товары</div>
        <div class="row q-gutter-sm-x-xl justify-xs-center">
          <product-card v-for="product in this.products.slice(5, 9)" :key="product.id" v-bind:product="product" :isNew="false" class="q-mb-xs-md col-xs-12"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import productCard from '../components/ProductCard'
import { mapGetters, mapActions } from 'vuex'

export default {
  product: null,
  created () {
    const imgNum = Math.ceil(Math.random() * 5)
    this.imgSource = this.imgs[imgNum]
  },
  data () {
    return {
      count: 1,
      ratingModel: 4,
      userRating: 0,
      isFav: false,
      imgs: [
        '../statics/img/randImgs/0.jpg',
        '../statics/img/randImgs/1.jpg',
        '../statics/img/randImgs/2.jpg',
        '../statics/img/randImgs/3.jpg',
        '../statics/img/randImgs/4.jpg',
        '../statics/img/randImgs/5.jpg',
        '../statics/img/randImgs/6.jpg'
      ],
      imgSource: ''
    }
  },
  beforeMount () {
    this.product = this.$store.getters['product/products'].find(product => product.id === this.$route.params.id)
  },
  components: {
    productCard
  },
  methods: {
    getRating () {
      let sum = 0
      let k = this.product.reviews.length
      for (let i = 0; i < k; i++) {
        sum += parseInt(this.product.reviews[i].rating)
      }
      return ((k === 0) ? 0 : Math.round(sum / k))
    },
    ...mapActions({
      getProducts: 'product/getProducts'
    }),
    addItem () {
      this.count++
    },
    removeItem (count1) {
      if (count1-- > 1) {
        this.count--
      }
    }
  },
  computed: {
    ...mapGetters({
      products: 'product/products'
    })
  },
  mounted () {
    this.getProducts()
  }
}

</script>

<style lang="scss">
  .regLink{
    text-decoration: underline;
  }
  .regLink:hover{
    color: $deep-orange-13;
    cursor: pointer;
  }
</style>
