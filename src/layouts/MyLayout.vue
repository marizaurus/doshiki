<template>
  <q-layout view="hHh lpr fff" class="m">

    <q-header class="bg-deep-orange-13 text-white q-pa-none">
      <q-toolbar class="row">
        <div class="col-2 row justify-center">
          <q-btn flat no-caps label="Doshiki" to="/" class="mRatAltBold logoBtn text-h6"/>
        </div>
        <div class="col-7 row justify-around q-pa-lg mRat">
          <div class="shipping column">
            <div class="mRatBold">Бесплатная доставка</div>
            <div>по всей России</div>
          </div>
          <div class="address column">
            <div class="mRatBold">Адрес магазина</div>
            <div>Спб, пр. Большевиков 22</div>
          </div>
          <div class="workTime column">
            <div class="mRatBold">Время работы</div>
            <div>9.00-23.00</div>
          </div>
        </div>
        <div class="col-3 row justify-around mRatBold items-center">
          <div class="row items-center">
            <q-icon name="shopping_cart" class="text-h4"/>
            <div>1</div>
          </div>
          <div>+7 (800) 555-36-35</div>
          <q-icon name="search" class="text-h4"/>
        </div>
      </q-toolbar>
      <q-toolbar class="bg-deep-orange-12">
        <q-btn-group flat spread class="offset-2 col-8 mRatBold text-body-2">
          <q-btn no-caps label="Главная" to="/" class=" q-pa-sm"/>
          <q-btn no-caps label="Каталог" to="/product" class="q-pa-sm"/>
          <q-btn no-caps label="Акции" to="/" class="q-pa-sm"/>
          <q-btn no-caps label="Избранные товары" to="/" class="q-pa-sm"/>
          <q-btn no-caps label="Рецепты" to="/cookbook/articles" class="q-pa-sm"/>
          <q-btn no-caps label="Доставка и оплата" to="/shipping" class="q-pa-sm "/>
        </q-btn-group>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-grey-9 text-white q-py-xl">
      <q-toolbar class="row">
        <div class="col-2 row justify-center">
          <div class="mRat column text-body2 q-gutter-y-sm">
            <router-link class="customLink" to="/">Главное меню</router-link>
            <router-link class="customLink" to="/product">Каталог</router-link>
            <router-link class="customLink" to="/">Акции</router-link>
            <router-link class="customLink" to="/">Избранные товары</router-link>
            <router-link class="customLink" to="/cookbook/articles">Рецепты</router-link>
            <router-link class="customLink" to="/shipping">Доставка и оплата</router-link>
            <router-link class="customLink" to="/">Задать вопрос</router-link>
            <router-link class="customLink" to="/">О нас</router-link>
          </div>
        </div>
        <div class="col-3 offset-3 column q-gutter-y-md mRat">
          <div><span class="mRatBold">Где мы находимся?</span><br>Санкт-Петербург, пр. Большевиков 22</div>
          <div><span class="mRatBold">График работы:</span><br>9:00-23:00<br>без перерывов и выходных</div>
          <div>
            <div><span class="mRatBold">Дошики в соцсетях:</span></div>
            <div class="row justify-around">
              <div>@doshiki</div>
              <div>vk.com/doshiki</div>
            </div>
          </div>
        </div>
        <div class="col-2 offset-2 column self-end mRat q-pr-xl">
          <div class="text-right">ООО “Дошпоставка”</div>
          <div class="text-right">© Все права защищены</div>
        </div>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang = 'scss' scoped>
  .customLink{
    color: white;
    text-decoration: none;
  }
  .customLink:hover{
    color: #FD7014;
  }
</style>
