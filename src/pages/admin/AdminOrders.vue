<template>
  <div class="q-pa-xs-lg q-pa-sm-xl q-gutter-xs-y-md q-gutter-sm-y-xl">
    <q-breadcrumbs class="text-grey-8 mRat" active-color="text-grey-8">
      <template v-slot:separator>
        <q-icon size="0.7em" name="fiber_manual_record" class="text-deep-orange-13"/>
      </template>
      <q-breadcrumbs-el label="Главная" to="/"/>
      <q-breadcrumbs-el label="Панель администратора" to="/adminPanel"/>
      <q-breadcrumbs-el label="Заказы"/>
    </q-breadcrumbs>
    <div class="mRatAltBold text-deep-orange-13 text-h4 titleBig q-mb-xs-md">Панель администратора</div>
    <div class="row mRatBold text-deep-orange-12 q-gutter-x-lg q-mb-xl q-gutter-xs-y-lg">
      <q-btn flat no-caps class="text-h5 adminBtn2" label="Статусы заказа" to="/adminPanel/orders"/>
      <q-btn flat no-caps class="text-h5 adminBtn2" label="Товары" to="/adminPanel/products"/>
      <q-btn flat no-caps class="text-h5 adminBtn2" label="Покупатели"/>
    </div>
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
      :data="data"
      :columns="columns"
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
  </div>
</template>

<script>
export default {
  name: 'AdminOrders',
  data () {
    return {
      columns: [
        { name: 'state', required: true, label: 'состояние', align: 'left', field: row => row.name, format: val => `${val}` },
        { name: 'orderNum', align: 'left', label: 'заказ', format: val => `$Заказ №{val}` },
        { name: 'clientLogin', align: 'left', label: 'логин клиента', field: 'clientLogin' },
        { name: 'clientSum', align: 'left', label: 'итого', field: 'clientSum' },
        { name: 'orderDate', align: 'left', label: 'дата заказа', field: 'orderDate' },
        { name: 'clientContacts', align: 'left', label: 'контакты', field: 'clientContacts' }
      ],
      data: [
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
