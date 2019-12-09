<template>
  <div class="q-pt-sm-xl q-py-xs-lg row q-mb-sm-xl q-mb-xs-md">
    <div class="offset-1 col-10">
      <q-breadcrumbs class="text-grey-8 mRat  q-mb-sm-xl q-mb-xs-lg" active-color="text-grey-8">
        <template v-slot:separator>
          <q-icon size="0.7em" name="fiber_manual_record" class="text-deep-orange-13"/>
        </template>
        <q-breadcrumbs-el label="Главная" to="/"/>
        <q-breadcrumbs-el label="Личный кабинет"/>
      </q-breadcrumbs>

      <div class="text-deep-orange-13 text-h4 mRatBold offset-1 col-11 q-mb-sm-xl q-mb-xs-lg titleBig">Личный кабинет</div>
      <q-tabs  v-model="tab" no-caps flat class="bg-deep-orange-3 text-deep-orange-13 mRatBold text-deep-orange-13" style="width: 500px">
        <q-tab name="myData" :ripple="false">
          <div class="text-h6">Данные</div>
        </q-tab>
        <q-tab name="myAddress" :ripple="false">
          <div class="text-h6">Адрес</div>
        </q-tab>
        <q-tab name="myOrders" :ripple="false">
<!--          :style="(tab === 'myOrders')? '' : 'border-bottom: #4F4F4F solid 2px'"-->
          <div class="text-h6">Мои заказы</div>
        </q-tab>
      </q-tabs>

      <q-tab-panels v-model="tab" class="mRat bg-deep-orange-2" style="max-width: 800px">
        <q-tab-panel name="myData" class="">
          <div class="q-gutter-y-md q-my-md">
            <q-input color="deep-orange-12" bg-color="deep-orange-4" class="text-grey-9" filled v-model="text" label="Имя *"/>
            <div>
              <q-input color="deep-orange-12" bg-color="deep-orange-4" class="text-grey-9" filled v-model="text" label="Электронная почта"/>
              <q-checkbox dense label="Разрешить рассылку об интересных акциях и новинках" color="deep-orange-12" class="q-ml-md q-mt-xs" v-model="checkAds"/>
            </div>
            <q-input color="deep-orange-12" bg-color="deep-orange-4" class="text-grey-9" filled v-model="text" label="Телефон"/>
          </div>
          <q-btn flat no-caps class="bg-deep-orange-13 text-white mRatAltBold text-h5 q-px-xl q-mt-xl" label="Сохранить"/>
        </q-tab-panel>

        <q-tab-panel name="myAddress">
          <div class="q-gutter-y-md q-my-md">
            <div class="mRat text-grey-9 text-caption">Рекомендуем заполнить данные для доставки продукции на дом</div>
            <q-input color="deep-orange-12" bg-color="deep-orange-4" class="text-grey-9" filled v-model="text" label="Город/населенный пункт *"/>
            <q-input color="deep-orange-12" bg-color="deep-orange-4" class="text-grey-9" filled v-model="text" label="Улица/проспект *"/>
            <q-input color="deep-orange-12" bg-color="deep-orange-4" class="text-grey-9" filled v-model="text" label="Дом *"/>
            <q-input color="deep-orange-12" bg-color="deep-orange-4" class="text-grey-9" filled v-model="text" label="Квартира"/>
          </div>
          <q-btn flat no-caps class="bg-deep-orange-13 text-white mRatAltBold text-h5 q-px-xl q-mt-xl" label="Сохранить"/>
        </q-tab-panel>

        <q-tab-panel name="myOrders">
          <q-table
            flat
            :data="data"
            :columns="columns"
            row-key="state"
            separator="horizontal"
            hide-bottom
            class="mRat bg-deep-orange-2"
            table-header-class="text-grey-7">
            <template v-slot:body="props">
              <q-tr :props="props">
                <q-td key="state" :props="props" class="mRatBold text-deep-orange-13" style="font-size: medium">
                  {{ props.row.state }}
                </q-td>
                <q-td key="orderNum" :props="props" class="mRatBold"  style="font-size: medium">
                  Заказ №{{ props.row.orderNum }}
                </q-td>
                <q-td key="orderDate" :props="props" style="font-size: medium">
                  {{ props.row.orderDate }}
                </q-td>
                <q-td key="clientSum" :props="props" class="mRatBold" style="font-size: medium">
                  {{ props.row.clientSum }} ₽
                </q-td>
                <q-td key="clientContacts" :props="props" style="font-size: medium">
                  {{ props.row.clientContacts }}
                </q-td>
              </q-tr>
            </template>
          </q-table>
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonalCab',
  data () {
    return {
      tab: 'myData',
      checkAds: false,
      text: '',
      columns: [
        { name: 'state', required: true, label: 'состояние', align: 'left', field: row => row.name, format: val => `${val}` },
        { name: 'orderNum', align: 'left', label: 'заказ', format: val => `$Заказ №{val}` },
        { name: 'clientSum', align: 'left', label: 'итого', field: 'clientSum' },
        { name: 'orderDate', align: 'left', label: 'дата заказа', field: 'orderDate' },
        { name: 'clientContacts', align: 'left', label: 'контакты', field: 'clientContacts' }
      ],
      data: [
        {
          state: 'Новый',
          orderNum: 60,
          clientSum: 750,
          orderDate: '27.11.2019, 23:12',
          clientContacts: '+79888888889'
        },
        {
          state: 'Обработан',
          orderNum: 61,
          clientSum: 1750,
          orderDate: '27.11.2019, 23:12',
          clientContacts: '+79888888889'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
