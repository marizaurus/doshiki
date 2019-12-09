<template>
  <div class="q-py-sm-xl q-py-xs-lg row q-mb-sm-xl q-mb-xs-md">
    <div class="offset-1 col-10">
      <q-breadcrumbs class="text-grey-8 mRat  q-mb-sm-xl q-mb-xs-lg" active-color="text-grey-8">
        <template v-slot:separator>
          <q-icon size="0.7em" name="fiber_manual_record" class="text-deep-orange-13"/>
        </template>
        <q-breadcrumbs-el label="Главная" to="/"/>
      </q-breadcrumbs>
      <q-carousel
        animated v-model="slide"
        navigation infinite autoplay
        transition-prev="slide-right" transition-next="slide-left"
        class="q-mb-sm-xl q-mb-xs-lg">
        <q-carousel-slide :name="1" img-src="../statics/img/nood1.jpg"/>
        <q-carousel-slide :name="2" img-src="../statics/img/nood2.jpg" />
        <q-carousel-slide :name="3" img-src="../statics/img/nood3.jpg" />
        <q-carousel-slide :name="4" img-src="../statics/img/nood4.jpg" />
      </q-carousel>
      <div class="text-deep-orange-13 text-h4 mRatBold offset-1 q-mb-sm-xl q-mb-xs-lg titleBig">Акции</div>
      <div class="row q-gutter-sm-x-xl justify-xs-center q-mb-sm-xl q-mb-xs-lg">
<!--        <product-card v-for="n in 4" :key="n" v-bind:product="products[adsIds[n]]" :isNew="true" class="q-mb-xs-md col-xs-12"/>-->
        <product-card v-for="product in this.products.slice(0, 4)" :key="product.id" v-bind:product="product" :isNew="true" class="q-mb-xs-md col-xs-12"/>
      </div>
      <div class="text-deep-orange-13 text-h4 mRatBold offset-1 q-mb-sm-xl q-mb-xs-lg titleBig">Новинки</div>
      <div class="row q-gutter-sm-x-xl justify-xs-center">
<!--        <product-card v-for="n in 4" :key="n" v-bind:product="products[newIds[n]]" :isNew="false" class="q-mb-xs-md col-xs-12"/>-->
        <product-card v-for="product in this.products.slice(5, 9)" :key="product.id" v-bind:product="product" :isNew="false" class="q-mb-xs-md col-xs-12"/>
      </div>
    </div>
  </div>
</template>

<script>

import productCard from '../components/ProductCard'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'PageIndex',
  data () {
    return {
      slide: 1,
      adsIds: [],
      newIds: []
    }
  },
  components: {
    productCard
  },
  methods: {
    ...mapActions({
      getProducts: 'product/getProducts'
    })
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
