<template>
  <div class="q-pt-sm-xl q-py-xs-lg row q-mb-sm-xl q-mb-xs-md">
    <div class="offset-1 col-10">
      <q-breadcrumbs class="text-grey-8 mRat  q-mb-sm-xl q-mb-xs-lg" active-color="text-grey-8">
        <template v-slot:separator>
          <q-icon size="0.7em" name="fiber_manual_record" class="text-deep-orange-13"/>
        </template>
        <q-breadcrumbs-el label="Главная" to="/"/>
        <q-breadcrumbs-el label="Панель администратора"/>
        <q-breadcrumbs-el label="Товары"/>
      </q-breadcrumbs>

      <div class="text-deep-orange-13 text-h4 mRatBold offset-1 col-11 q-mb-sm-xl q-mb-xs-lg titleBig">Панель администратора</div>
      <q-tabs  v-model="tab" no-caps flat class="bg-deep-orange-3 text-deep-orange-13 mRatBold text-deep-orange-13" style="width: 500px">
        <q-tab name="adminOrders" :ripple="false">
          <div class="text-h6">Статусы заказа</div>
        </q-tab>
        <q-tab name="adminProducts" :ripple="false">
          <div class="text-h6">Товары</div>
        </q-tab>
        <q-tab name="adminCustomers" :ripple="false">
          <div class="text-h6">Покупатели</div>
        </q-tab>
      </q-tabs>

      <q-tab-panels v-model="tab" class="mRat bg-deep-orange-2">

        <q-tab-panel name="adminOrders" class="column q-col-gutter-y-lg q-py-lg">
          <div class="row q-gutter-x-xl q-gutter-xs-y-lg">
            <q-card flat class="bg-deep-orange-3 cardBordred" style="width: 300px">
              <q-card-section class="bg-deep-orange-13 text-white">
                <div class="text-h5 mRatAltBold">Заказы</div>
              </q-card-section>
              <q-card-section class="mRatAltBold text-deep-orange-13 text-right q-mt-md">
                <div class="text-h4">13</div>
                <div class=" mRat text-h5 text-green-9">28, -15</div>
              </q-card-section>
            </q-card>
            <q-card flat class="bg-deep-orange-3 cardBordred" style="width: 450px">
              <q-card-section class="bg-deep-orange-13 text-white">
                <div class="text-h5 mRatAltBold">Продажи</div>
              </q-card-section>
              <q-card-section class="mRatAltBold text-deep-orange-13 text-right q-mt-md">
                <div class="text-h4">9383 ₽</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="mRatAltBold text-deep-orange-13 text-h4 titleAdmin">Последние заказы</div>
          <div class="row q-gutter-xs-sm q-gutter-sm-lg mRatBold text-deep-orange-13">
            <q-btn flat no-caps class="text-h5 adminBtn2 q-px-sm" label="Все"/>
            <q-btn flat no-caps class="text-h5 adminBtn2 q-px-sm" label="Новый"/>
            <q-btn flat no-caps class="text-h5 adminBtn2 q-px-sm" label="Ожидает звонка"/>
            <q-btn flat no-caps class="text-h5 adminBtn2 q-px-sm" label="Обработано"/>
            <q-btn flat no-caps class="text-h5 adminBtn2 q-px-sm" label="В доставке"/>
            <q-btn flat no-caps class="text-h5 adminBtn2 q-px-sm" label="Выполнено"/>
            <q-btn flat no-caps class="text-h5 adminBtn2 q-px-sm" label="Отложено"/>
            <q-btn flat no-caps class="text-h5 adminBtn2 q-px-sm" label="Отменён"/>
          </div>
          <q-table
            flat
            :data="orderData"
            :columns="orderColumns"
            row-key="state"
            separator="horizontal"
            hide-bottom
            class="mRat bg-deep-orange-2"
            table-header-class="text-grey-7">
            <template v-slot:body="props">
              <q-tr :props="props">
                <q-td key="state" :props="props" class="mRatBold">
                  <q-badge :color="colors.find(c => c.state === props.row.state).color" text-color="white" style="font-size: medium">
                    {{ props.row.state }}
                  </q-badge>
                </q-td>
                <q-td key="orderNum" :props="props" class="mRatBold"  style="font-size: medium">
                  Заказ №{{ props.row.orderNum }}
                </q-td>
                <q-td key="clientLogin" :props="props"  style="font-size: medium">
                  покупатель: <span class="text-deep-orange-13">{{ props.row.clientLogin }}</span>
                </q-td>
                <q-td key="clientSum" :props="props" class="mRatBold" style="font-size: medium">
                  {{ props.row.clientSum }} ₽
                </q-td>
                <q-td key="orderDate" :props="props" style="font-size: medium">
                  {{ props.row.orderDate }}
                </q-td>
                <q-td key="clientContacts" :props="props" style="font-size: medium">
                  {{ props.row.clientContacts }}
                </q-td>
              </q-tr>
            </template>
          </q-table>
          <div class="offset-sm-4 col-sm-4 col-xs-12 row justify-center text-h5 text-deep-orange-13 q-my-sm-xl q-my-xs-md">
            <div class="mRatAltBold text-center" style="text-decoration: underline; cursor: pointer">Показать еще</div>
            <q-icon name="keyboard_arrow_down" class="text-h4 cursor-pointer"/>
          </div>
          <div class="row q-gutter-lg">
            <q-card flat class="bg-deep-orange-3 cardSmall cardBordred text-center">
              <q-card-section class="bg-deep-orange-13 text-white">
                <div class="text-h6 mRatBold">Товары на витрине</div>
              </q-card-section>
              <q-card-section class="mRatAltBold text-deep-orange-13">
                <div class="text-h4 q-mt-md">999</div>
              </q-card-section>
            </q-card>
            <q-card flat class="bg-deep-orange-3 cardSmall cardBordred text-center">
              <q-card-section class="bg-deep-orange-13 text-white">
                <div class="text-h6 mRatBold">Нет в наличии</div>
              </q-card-section>
              <q-card-section class="mRatAltBold text-deep-orange-13">
                <div class="text-h4 q-mt-md">23</div>
              </q-card-section>
            </q-card>
            <q-card flat class="bg-deep-orange-3 cardSmall cardBordred text-center">
              <q-card-section class="bg-deep-orange-13 text-white">
                <div class="text-h6 mRatBold">Регистрации</div>
              </q-card-section>
              <q-card-section class="mRatAltBold text-deep-orange-13">
                <div class="text-h4 q-mt-md">40</div>
              </q-card-section>
            </q-card>
            <q-card flat class="bg-deep-orange-3 cardSmall cardBordred text-center">
              <q-card-section class="bg-deep-orange-13 text-white">
                <div class="text-h6 mRatBold ">Категории</div>
              </q-card-section>
              <q-card-section class="mRatAltBold text-deep-orange-13">
                <div class="text-h4 q-mt-md">0</div>
              </q-card-section>
            </q-card>
            <q-card flat class="bg-deep-orange-3 cardSmall cardBordred text-center">
              <q-card-section class="bg-deep-orange-13 text-white">
                <div class="text-h6 mRatBold ">Веб-страницы</div>
              </q-card-section>
              <q-card-section class="mRatAltBold text-deep-orange-13">
                <div class="text-h4 q-mt-md">0</div>
              </q-card-section>
            </q-card>
          </div>
        </q-tab-panel>

        <q-tab-panel name="adminProducts">
          <div class="row q-gutter-x-xl">
            <q-btn-group flat class="column text-grey-9 mRatBold ">
              <q-btn flat no-caps class="btnBordered q-py-sm q-px-md text-h6" @click="chooseAdd">Добавить товар</q-btn>
              <q-btn flat no-caps class="btnBordered q-py-sm q-px-md text-h6" @click="chooseEdit">Редактировать</q-btn>
            </q-btn-group>
            <div v-if="editProduct">
              <div class="row">
                <q-table
                  :data="data"
                  :columns="columns"
                  row-key="name"
                  :filter="filter"
                  grid
                  hide-header
                  hide-bottom
                  flat>
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
                          <div class="row justify-between items-center">
                            <q-btn flat no-caps class="bg-deep-orange-12 text-white text-caption mRatBold row items-center">
                              <div class="text-center">Изменить</div>
                              <q-icon right name="edit" class="text-h4"/>
                            </q-btn>
                            <q-btn flat dense icon="delete_outline" class="text-deep-orange-12 text-h6"/>
                          </div>
                        </div>
                      </q-card>
                    </div>
                  </template>
                </q-table>
                <q-btn flat no-caps class="bg-deep-orange-13 text-white mRatAltBold text-h5 q-px-xl q-mt-xl" label="Сохранить"/>
              </div>
            </div>
            <div v-if="addProduct" class="row q-gutter-x-lg">
              <div style="max-width: 415px; max-height: 415px; border: solid 3px #4F4F4F" class="row">
                <q-btn class="bg-grey-9 text-white text-h5 mRatBold q-ma-xl" label="Добавить фото"/>
              </div>
              <div class="column mRAt">
                <q-input outlined v-model="this.newProductName" label="Название товара" stack-label/>
                <q-input outlined v-model="this.newProductCountry" label="Страна " stack-label/>
                <q-input outlined v-model="this.newProductSet" label="Комплектация" stack-label/>
                <q-input outlined v-model="this.newProductManufacturer" label="Производитель" stack-label/>
                <q-input outlined v-model="this.newProductWeight" label="Вес (грамм)" stack-label/>
                <q-input outlined v-model="this.newProductId" label="Код товара" stack-label/>
                <q-btn flat no-caps class="bg-deep-orange-13 text-white mRatAltBold text-h5 q-px-xl q-mt-xl" label="Сохранить"/>
              </div>
            </div>
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminProducts',
  methods: {
    chooseAdd () {
      this.addProduct = true
      this.editProduct = false
    },
    chooseEdit () {
      this.addProduct = false
      this.editProduct = true
    }
  },
  data () {
    return {
      newProductInfo: {
        newProductName: '',
        newProductCountry: '',
        newProductSet: '',
        newProductManufacturer: '',
        newProductWeight: '',
        newProductId: ''
      },
      tab: 'adminOrders',
      filter: '',
      addProduct: false,
      editProduct: true,
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
      ],
      orderColumns: [
        { name: 'state', required: true, label: 'состояние', align: 'left', field: row => row.name, format: val => `${val}` },
        { name: 'orderNum', align: 'left', label: 'заказ', format: val => `$Заказ №{val}` },
        { name: 'clientLogin', align: 'left', label: 'логин клиента', field: 'clientLogin' },
        { name: 'clientSum', align: 'left', label: 'итого', field: 'clientSum' },
        { name: 'orderDate', align: 'left', label: 'дата заказа', field: 'orderDate' },
        { name: 'clientContacts', align: 'left', label: 'контакты', field: 'clientContacts' }
      ],
      orderData: [
        {
          state: 'Новый',
          orderNum: 60,
          clientLogin: 'Арина',
          clientSum: 750,
          orderDate: '27.11.2019, 23:12',
          clientContacts: '+79888888889'
        },
        {
          state: 'Обработан',
          orderNum: 61,
          clientLogin: 'Дарья',
          clientSum: 1750,
          orderDate: '27.11.2019, 23:12',
          clientContacts: '+79888888889'
        }
      ],
      colors: [
        {
          state: 'Новый',
          color: 'deep-orange-13'
        },
        {
          state: 'Звонок',
          color: 'indigo-10'
        },
        {
          state: 'Обработан',
          color: 'secondary'
        },
        {
          state: 'В доставке',
          color: 'pink-13'
        },
        {
          state: 'Выполнено',
          color: 'light-green-14'
        },
        {
          state: 'Отложен',
          color: 'warning'
        },
        {
          state: 'Отмена',
          color: 'grey-9'
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
  .adminBtn2{
    border: 3px solid #FF894C;
    @media (max-width: $breakpoint-xs-max) {
      font-size: 12px;
    }
  }
  .adminBtn2:hover{
    background-color: #FF894C;
    color: white;
  }
  .sectionChip{
    width: 250px;
    @media (max-width: $breakpoint-xs-max) {
      width: auto;
    }
  }
  .cardSmall{
    width: 260px;
  }
  .cardBordred{
    border: 3px solid $deep-orange-4;
    border-radius: 4px;
  }
  .customer{
    @media (max-width: $breakpoint-xs-max) {
      font-size: 10px;
    }
  }
</style>
