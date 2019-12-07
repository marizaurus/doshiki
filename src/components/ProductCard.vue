<template>
  <div class="column justify-center" style="width: 196px">
    <div class="q-mb-md row" style="border: 3px solid #FF894C; border-radius: 5px; height: 196px">
      <q-icon class="text-h4 text-deep-orange-13 q-ml-auto cursor-pointer"
              :name="isFav ? 'favorite' : 'favorite_border'" @click="isFav = !isFav"/>
    </div>
    <div class="text-body2 mRatBold text-grey-10">Рисовая лапша под соусом пад тай 135гр.</div>
    <div class="text-caption mRat text-deep-orange-13 q-mb-sm">Есть в наличии</div>
    <div class="row justify-around items-center">
      <div class="mRatAltBold text-deep-orange-13 text-body1">125 р.</div>
      <div class="row items-center justify-center" style="border-radius: 6px; border: 2px solid #FD7014">
        <q-btn dense flat class="bg-deep-orange-13 text-white text-caption"
               style="border-radius: 0; width: 25px; height: 25px;"
               icon="remove" :ripple="false" @click="removeItem(count)"/>
        <div class="mRat text-caption q-px-md">{{count}}</div>
        <q-btn dense flat class="bg-deep-orange-13 text-white text-caption"
               style="border-radius: 0; width: 25px; height: 25px;"
               icon="add" :ripple="false" @click="addItem"/>
      </div>
      <q-btn flat dense icon="add_shopping_cart" class="bg-deep-orange-13 text-white q-pa-xs"/>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      count: 1,
      isFav: false
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
    }
  }
}

</script>
