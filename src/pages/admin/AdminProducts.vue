<template>
  <div class="q-pa-xs-lg q-pa-sm-xl q-gutter-xs-y-md q-gutter-sm-y-xl">
    <q-breadcrumbs class="text-grey-8 mRat" active-color="text-grey-8">
      <template v-slot:separator>
        <q-icon size="0.7em" name="fiber_manual_record" class="text-deep-orange-13"/>
      </template>
      <q-breadcrumbs-el label="Главная" to="/"/>
      <q-breadcrumbs-el label="Панель администратора" to="/adminPanel"/>
      <q-breadcrumbs-el label="Товары"/>
    </q-breadcrumbs>
    <div class="mRatAltBold text-deep-orange-13 text-h4 titleBig q-mb-xs-md">Панель администратора</div>
    <div class="row mRatBold text-deep-orange-12 q-gutter-x-lg q-mb-xl q-gutter-xs-y-lg">
      <q-btn flat no-caps class="text-h5 adminBtn2" label="Статусы заказа" to="/adminPanel/orders"/>
      <q-btn flat no-caps class="text-h5 adminBtn2" label="Товары" to="/adminPanel/products"/>
      <q-btn flat no-caps class="text-h5 adminBtn2" label="Покупатели"/>
    </div>
    <div class="row q-gutter-x-xl">
      <div class="column text-grey-9 mRatBold ">
        <q-btn flat no-caps class="btnBordered q-py-sm q-px-md text-h6">Добавить товар</q-btn>
        <q-btn flat no-caps class="btnBordered q-py-sm q-px-md text-h6">Редактировать</q-btn>
      </div>
      <div class="row">
        <q-table
          :data="data"
          :columns="columns"
          row-key="name"
          :filter="filter"
          grid
          hide-header
          hide-bottom
          flat
        >
          <template v-slot:top-left>
            <q-input outlined color="deep-orange-13" dense debounce="300" v-model="filter" placeholder="Поиск товара">
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </template>

          <template v-slot:item="props">
            <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3">
              <q-card flat class="bg-deep-orange-2">
                <div class="column justify-center" style="width: 200px">
                  <div class="q-mb-md row" style="border: 3px solid #FFCCB1; border-radius: 5px; height: 196px"/>
                  <div class="text-body2 mRatBold text-grey-10">{{props.row.name}}</div>
                  <div class="text-caption mRat text-deep-orange-13">В наличии 100 штук</div>
                  <div class="row justify-between items-center">
                    <div class="mRat text-caption text-grey-10">Страна: Тайланд</div>
                    <div class="mRatAltBold text-deep-orange-13 text-body1">125 р.</div>
                  </div>
                </div>
              </q-card>
            </div>
          </template>
        </q-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminProducts',
  data () {
    return {
      filter: '',
      columns: [
        {
          name: 'desc',
          required: true,
          label: 'Dessert (100g serving)',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'calories', align: 'center', label: 'Calories', field: 'calories', sortable: true },
        { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
        { name: 'carbs', label: 'Carbs (g)', field: 'carbs' },
        { name: 'protein', label: 'Protein (g)', field: 'protein' },
        { name: 'sodium', label: 'Sodium (mg)', field: 'sodium' },
        { name: 'calcium', label: 'Calcium (%)', field: 'calcium', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
        { name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
      ],
      data: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          sodium: 87,
          calcium: '14%',
          iron: '1%'
        }
      ]
    }
  }
}
</script>

<style lang = 'scss'>
  .btnBordered{
    background-color: #FFE8DD;
    border: 3px solid #FFCCB1;
  }
  .btnBordered:hover{
    background-color: #FFCCB1;
    color: $grey-9;
  }
</style>
