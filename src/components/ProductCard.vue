<template>
  <div class="column justify-center" style="width: 196px">
    <div class="q-mb-md row bg-white" style="border: 3px solid #FF894C; border-radius: 5px; height: 196px;">
      <img :src="this.imgSource" alt="" style="max-width: 190px; max-height: 190px; display: block; margin: auto;">
      <q-icon class="text-h4 text-deep-orange-13 q-ml-auto cursor-pointer" style="position: absolute"
              :name="isFav ? 'favorite' : 'favorite_border'" @click="(isFav)? removeFav(product.id) : makeFav(product.id)"/>
    </div>
    <router-link class="text-body2 mRatBold text-grey-10" :to="{name: 'product.id', params: {id: product.id}}"
                 style="text-decoration: none">
      {{ product.title }}
    </router-link>
    <div class="text-caption mRat text-deep-orange-13 q-mb-sm">Есть в наличии</div>
    <div class="row justify-around items-center">
      <div v-if="isNew" class="mRatAltBold text-caption text-grey-7" style="text-decoration: line-through">{{ product.price }} р.</div>
      <div class="mRatAltBold text-deep-orange-13 text-body2">{{ product.discountPrice }} р.</div>
      <div class="row items-center justify-center" style="border-radius: 6px; border: 2px solid #FD7014">
        <q-btn dense flat class="bg-deep-orange-13 text-white text-caption"
               style="border-radius: 0; width: 20px; height: 25px;"
               icon="remove" :ripple="false" @click="removeItem(count)"/>
        <div class="mRat text-caption q-px-sm">{{count}}</div>
        <q-btn dense flat class="bg-deep-orange-13 text-white text-caption"
               style="border-radius: 0; width: 20px; height: 25px;"
               icon="add" :ripple="false" @click="addItem"/>
      </div>
      <q-btn flat dense icon="add_shopping_cart" class="bg-deep-orange-13 text-white text-caption"/>
    </div>
  </div>
<!--  <div class="column justify-center" style="width: 196px">-->
<!--    <div class="q-mb-md row" style="border: 3px solid #FF894C; border-radius: 5px; height: 196px">-->
<!--      <q-icon class="text-h4 text-deep-orange-13 q-ml-auto cursor-pointer"-->
<!--              :name="isFav ? 'favorite' : 'favorite_border'" @click="isFav = !isFav"/>-->
<!--    </div>-->
<!--    <router-link class="text-body2 mRatBold text-grey-10" to="/product" style="text-decoration: none">-->
<!--      Рисовая лапша под соусом пад тай 135гр.-->
<!--    </router-link>-->
<!--    <div class="text-caption mRat text-deep-orange-13 q-mb-sm">Есть в наличии</div>-->
<!--    <div class="row justify-around items-center">-->
<!--      <div class="mRatAltBold text-deep-orange-13 text-body1">125 р.</div>-->
<!--      <div class="row items-center justify-center" style="border-radius: 6px; border: 2px solid #FD7014">-->
<!--        <q-btn dense flat class="bg-deep-orange-13 text-white text-caption"-->
<!--               style="border-radius: 0; width: 25px; height: 25px;"-->
<!--               icon="remove" :ripple="false" @click="removeItem(count)"/>-->
<!--        <div class="mRat text-caption q-px-md">{{count}}</div>-->
<!--        <q-btn dense flat class="bg-deep-orange-13 text-white text-caption"-->
<!--               style="border-radius: 0; width: 25px; height: 25px;"-->
<!--               icon="add" :ripple="false" @click="addItem"/>-->
<!--      </div>-->
<!--      <q-btn flat dense icon="add_shopping_cart" class="bg-deep-orange-13 text-white q-pa-xs"/>-->
<!--    </div>-->
<!--  </div>-->
</template>

<script>

export default {
  props: {
    product: Object,
    isNew: Boolean
  },
  created () {
    const imgNum = Math.ceil(Math.random() * 5)
    this.imgSource = this.imgs[imgNum]
    if (localStorage.getItem('fav-products').split(';').indexOf(this.product.id) !== -1) {
      this.isFav = true
    }
  },
  data () {
    return {
      imgSource: '',
      count: 1,
      isFav: false,
      imgs: [
        '../statics/img/randImgs/0.jpg',
        '../statics/img/randImgs/1.jpg',
        '../statics/img/randImgs/2.jpg',
        '../statics/img/randImgs/3.jpg',
        '../statics/img/randImgs/4.jpg',
        '../statics/img/randImgs/5.jpg',
        '../statics/img/randImgs/6.jpg'
      ]
    }
  },
  methods: {
    addItem () {
      this.count++
    },
    removeItem (count1) {
      if (count1-- > 1) {
        this.count--
      }
    },
    makeFav (id) {
      let favs = localStorage.getItem('fav-products') || ''
      favs = favs.split(';').filter(favid => parseInt(favid) !== id)
      favs[favs.length] = id
      localStorage.setItem('fav-products', favs.join(';'))
      this.isFav = true
    },
    removeFav (id) {
      let favs = localStorage.getItem('fav-products') || ''
      favs = favs.split(';').filter(favid => parseInt(favid) !== id)
      localStorage.setItem('fav-products', favs.join(';'))
      this.isFav = false
    }
  }
}

</script>
