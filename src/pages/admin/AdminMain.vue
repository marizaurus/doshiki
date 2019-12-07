<template>
  <div class="q-pa-xs-lg q-pa-sm-xl q-gutter-xs-y-md q-gutter-sm-y-xl">
    <q-breadcrumbs class="text-grey-8 mRat" active-color="text-grey-8">
      <template v-slot:separator>
        <q-icon size="0.7em" name="fiber_manual_record" class="text-deep-orange-13"/>
      </template>
      <q-breadcrumbs-el label="Главная" to="/"/>
      <q-breadcrumbs-el label="Панель администратора"/>
    </q-breadcrumbs>
    <div class="mRatAltBold text-deep-orange-13 text-h4 titleBig">Панель администратора</div>
    <div class="row q-gutter-xs-y-lg">
      <div class="col-xs-12 col-sm-4 column mRatAltBold text-deep-orange-12 items-center q-gutter-y-md">
        <q-btn flat no-caps class="text-h5 adminBtn" label="Быстрый заказ"/>
      </div>
      <div class="col-xs-12 col-sm-4 column mRatAltBold text-deep-orange-12 items-center q-gutter-y-md">
        <q-btn flat no-caps class="text-h5 adminBtn" label="База заказов" to="/adminPanel/orders"/>
        <q-btn flat no-caps class="text-h5 adminBtn" label="Просмотр"/>
        <q-btn flat no-caps class="text-h5 adminBtn" label="Добавить товар"/>
        <q-btn flat no-caps class="text-h5 adminBtn" label="Добавить вкус"/>
        <q-btn flat no-caps class="text-h5 adminBtn" label="Добавить производителя"/>
        <q-btn flat no-caps class="text-h5 adminBtn" label="Добавить комплектацию"/>
      </div>
      <div class="col-xs-12 col-sm-4 column mRatAltBold text-deep-orange-12 items-center q-gutter-y-md">
        <q-btn flat no-caps class="text-h5 adminBtn" label="Пользователи"/>
        <q-btn flat no-caps class="text-h5 adminBtn" label="Отзывы"/>
        <q-btn flat no-caps class="text-h5 adminBtn" label="Почта"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminMain'
}
</script>

<style lang = 'scss'>
  .adminBtn{
    border: 3px solid #FF894C;
    width: 300px;
    max-width: 95%;
  }
  .adminBtn:hover{
    background-color: $deep-orange-12;
    color: white;
  }
  .titleBig{
    @media (max-width: $breakpoint-xs-max) {
      font-size: 26px;
      line-height: 32px;
    }
  }
</style>
