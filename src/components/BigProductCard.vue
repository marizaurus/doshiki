<template>
  <div class="row q-col-gutter-sm-x-xl items-start q-mt-sm-xl q-mt-xs-md">
    <div class="col-xs-12 col-sm-6 col-md-3 column q-mb-xs-md ">
      <div class="q-py-lg q-px-md q-mb-xs-md bg-white" style="border: 3px solid #818181; border-radius: 5px; max-width: 300px">
        <img :src="this.imgSource" alt="" style="max-width: 200px; max-height: 200px; display: block; margin: auto;">
      </div>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-9 column justify-around">
      <div class="row justify-between">
        <div class="column q-gutter-y-sm text-grey-10 mRat text-body-2 q-mb-xs-md">
          <div class="mRatBold text-grey-10 text-h5">{{ product.title }}</div>
          <div class="row items-center">
            <q-rating readonly v-model="ratingModel" size="1.5em" color="deep-orange-13"
                      icon="star_border" icon-selected="star" class="q-mr-sm"/>
            <div class="mRatBold text-body2 text-deep-orange-13"></div>
          </div>
          <div class="text-deep-orange-13">Товар есть в наличии</div>
          <div>Производитель: Тайланд</div>
          <div>Вес: 120г</div>
          <router-link :to="{name: 'product.id', params: {id: product.id}}" class="mRatBold text-grey-10">Подробнее</router-link>
          <div class="row items-center q-gutter-x-md">
            <div class="newPrice text-deep-orange-13 mRatAltBold text-h5">{{product.discountPrice}} р.</div>
            <div class="prevPrice mRatAltBold text-body1 text-grey-7" style="text-decoration: line-through">{{product.price}} р.</div>
            <q-icon class="text-h4 text-deep-orange-13 cursor-pointer"
                    :name="isFav ? 'favorite' : 'favorite_border'" @click="(isFav)? removeFav(product.id) : makeFav(product.id)"/>
            <div class="column items-center justify-center">
              <q-btn dense flat no-caps class="bg-deep-orange-13 text-white mRatAltBold text-h5 q-px-xl" label="В корзину"/>
              <div class="text-body-2 text-grey-10 mRatBold cursor-pointer q-mt-xs" style="text-decoration: underline">Заказать в 1 клик</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FavoriteCard',
  props: {
    id: String
  },
  created () {
    const imgNum = Math.ceil(Math.random() * 5)
    this.imgSource = this.imgs[imgNum]
    if (localStorage.getItem('fav-products').split(';').indexOf(this.id) !== -1) {
      this.isFav = true
    }
  },
  data () {
    return {
      ratingModel: 0,
      isFav: false,
      product: null,
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
  methods: {
    makeFav (id) {
      let favs = localStorage.getItem('fav-products') || ''
      favs = favs.split(';').filter(favid => parseInt(favid) !== id)
      favs[favs.length] = id
      localStorage.setItem('fav-products', favs.join(';'))
      this.isFav = true
      console.log('made fav!')
    },
    removeFav (id) {
      let favs = localStorage.getItem('fav-products') || ''
      favs = favs.split(';').filter(favid => parseInt(favid) !== id)
      localStorage.setItem('fav-products', favs.join(';'))
      this.isFav = false
      console.log('made not fav!')
    }
  },
  beforeMount () {
    this.product = this.$store.getters['product/products'].find(product => product.id === parseInt(this.id))
  }
}
</script>

<style scoped>

</style>
