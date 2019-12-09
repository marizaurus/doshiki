<template>
  <div class="q-py-xs-lg q-py-sm-xl row">
    <div class="col-10 offset-1 column">
      <q-breadcrumbs class="text-grey-8 q-pb-sm-xl q-pb-xs-md mRat" active-color="text-grey-8">
        <template v-slot:separator>
          <q-icon size="0.7em" name="fiber_manual_record" class="text-deep-orange-13"/>
        </template>
        <q-breadcrumbs-el label="Главная" to="/"/>
        <q-breadcrumbs-el label="Каталог"/>
      </q-breadcrumbs>
      <div class="row text-h4 mRatBold ">
        <div class="col-3 row justify-between text-deep-orange-13">
          <div>Каталог</div>
          <div class="mRat">{{products.length}}</div>
        </div>
      </div>
      <div class="row">
        <div class="col-3">
          <q-list bordered class="rounded-borders mRatBold text-body1 text-grey-10" style="max-width: 350px; border: 3px solid #FF894C">
            <q-expansion-item
              dark
              v-for="category in this.categories"
              v-bind:key="category.catLabel"
              expand-separator
              :icon="category.catIcon"
              header-class="bg-deep-orange-12 text-white"
              :label="category.catLabel"
              default-opened>
              <q-card class="bg-deep-orange-2">
                <q-option-group
                  v-model="group"
                  :options="category.options"
                  color="deep-orange-13"
                  class="mRat "
                  type="checkbox"/>
              </q-card>
            </q-expansion-item>
          </q-list>
        </div>
        <div class="col-8 offset-1">
          <q-table
            :data="products"
            :columns="columns"
            row-key="name"
            :filter="filter"
            grid hide-header
            flat
            :pagination.sync="pagination">
            <template v-slot:top-left>
              <div class="column q-gutter-y-md mRat">
                <q-input outlined color="deep-orange-13" dense debounce="300" v-model="filter"
                         placeholder="Поиск товара" style="max-width: 250px">
                  <template v-slot:append>
                    <q-icon name="search" />
                  </template>
                </q-input>
                <div class="row q-gutter-x-lg text-grey-8 text-caption">
                  <div>Сортировка: </div>
                  <div class="row items-center">
                    <div style="text-decoration: underline">по коду</div>
                    <q-icon name="keyboard_arrow_down" class="cursor-pointer text-h6"  @click="descCode()"/>
                    <q-icon name="keyboard_arrow_up" class="cursor-pointer text-h6" @click="nonDescCode()"/>
                  </div>
                  <div class="row items-center">
                    <div style="text-decoration: underline">по цене</div>
                    <q-icon name="keyboard_arrow_down" class="cursor-pointer text-h6" @click="descPrice()"/>
                    <q-icon name="keyboard_arrow_up" class="cursor-pointer text-h6" @click="nonDescPrice()"/>
                  </div>
                </div>
              </div>
            </template>

            <template v-slot:item="props">
              <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <q-card flat class="bg-deep-orange-2 q-py-md">
                  <product-card v-bind:product="props.row" :isNew="false"/>
                </q-card>
              </div>
            </template>
          </q-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import productCard from '../components/ProductCard'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    productCard
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
    ...mapActions({
      getProducts: 'product/getProducts',
      getManufacturers: 'manufacturer/getManufacturers',
      getTastes: 'taste/getTastes'
    }),
    descPrice () {
      this.descChoice = true
      this.sortCat = 'price'
    },
    nonDescPrice () {
      this.descChoice = false
      this.sortCat = 'price'
    },
    descCode () {
      this.descChoice = true
      this.sortCat = 'id'
    },
    nonDescCode () {
      this.descChoice = false
      this.sortCat = 'id'
    }
  },
  computed: {
    ...mapGetters({
      products: 'product/products',
      manufacturers: 'manufacturer/manufacturers',
      tastes: 'taste/tastes'
    })
  },
  mounted () {
    this.getProducts()
    this.getManufacturers()
    this.getTastes()
  },
  data () {
    return {
      text: '',
      sortCat: 'id',
      descChoice: false,
      current: 1,
      count: 1,
      isFav: false,
      group: ['op1'],
      categories: [
        {
          catLabel: 'Страна производства',
          catIcon: 'language',
          options: []
          // options: this.manufacturers.map(function (mf) {
          //   return mf.description
          // })
        },
        {
          catLabel: 'Бренды',
          catIcon: 'style',
          options: []
        },
        {
          catLabel: 'Комплектация',
          catIcon: 'restaurant',
          options: []
        },
        {
          catLabel: 'По весу',
          catIcon: 'fitness_center',
          options: []
        },
        {
          catLabel: 'По вкусам',
          catIcon: 'room_service',
          options: []
        }
      ],
      pagination: {
        sortBy: this.sortCat,
        descending: this.descChoice,
        rowsPerPage: 12
      },
      filter: '',
      columns: [
        { name: 'id', required: true, sortable: true },
        { name: 'title', field: 'title', sortable: true },
        { name: 'description', field: 'description' },
        { name: 'weight', field: 'weight', sortable: true },
        { name: 'price', field: 'price', sortable: true },
        { name: 'discountPrice', field: 'discountPrice', sortable: true },
        { name: 'rating', field: 'rating' },
        { name: 'updated_at', field: 'updated_at' },
        { name: 'photo', field: 'photo' }
      ]
    }
  }
}

</script>
