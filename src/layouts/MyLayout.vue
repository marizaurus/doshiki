<template>
  <q-layout view="hHh lpr fff" class="m bg-deep-orange-2">

    <q-header class="bg-deep-orange-13 text-white q-pa-none">
      <q-toolbar class="row">
        <div class="col-2 row justify-center">
          <router-link class="mRatAltBold text-h6 text-white" to="/" style="text-decoration: none">Doshiki</router-link>
        </div>
        <div class="col-7 row justify-around q-pa-lg mRat">
          <div class="column">
            <div class="mRatBold">Лапша быстрого приготовления</div>
            <div>со всего мира</div>
          </div>
          <div class="column">
            <div class="mRatBold">Бесплатная доставка</div>
            <div>по всей России</div>
          </div>
        </div>
        <div class="col-3 row justify-around mRatBold items-center q-pa-none">
          <div class="column">
            <div>+7 (800) 555-36-35</div>
            <div class="mRat text-body2" style="text-decoration: underline; cursor: pointer">Заказать звонок</div>
          </div>
          <div class="row items-center">
            <q-icon name="shopping_cart" class="text-h4"/>
            <div>1</div>
          </div>
          <q-icon name="search" class="text-h4"/>
        </div>
      </q-toolbar>
      <q-toolbar class="bg-deep-orange-12">
        <q-btn-group flat spread class="offset-1 col-8 mRatBold text-body2">
          <q-btn no-caps label="Главная" to="/" class=" q-pa-sm"/>
          <q-btn no-caps label="Каталог" to="/product" class="q-pa-sm"/>
          <q-btn no-caps label="Акции" to="/" class="q-pa-sm"/>
          <q-btn no-caps label="Избранные товары" to="/" class="q-pa-sm"/>
          <q-btn no-caps label="Рецепты" class="q-pa-sm">
            <q-menu fit>
              <q-list style="min-width: 100px">
                <q-item clickable to="/cookbook/articles" class="bg-deep-orange-13">
                  <q-item-section class="mRatBold text-white text-caption text-center">Статьи</q-item-section>
                </q-item>
                <q-item clickable to="/cookbook/videos"  class="bg-deep-orange-13">
                  <q-item-section class="mRatBold text-white text-caption text-center">Видеорецепты</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
          <q-btn no-caps label="Доставка и оплата" to="/shipping" class="q-pa-sm "/>
        </q-btn-group>
        <q-btn-group flat class="offset-1 col-2 mRatBold text-body2">
          <q-btn icon="person_outline" class="text-h5"/>
          <q-btn flat no-caps label="Авторизация" @click="signInReg = true">
            <q-dialog v-model="signInReg" persistent transition-show="scale" transition-hide="scale">
              <q-carousel v-model="slide" style="border-radius: 5px; height: auto; width: auto" class="bg-deep-orange-12 text-white">

                <!--Вход-->
                <q-carousel-slide name="signIn" class="column no-wrap" style="width: 350px; height: 400px">
                  <div class="row items-center q-pa-none q-mb-md justify-between" style="width: 100%">
                    <div class="text-h6 mRatBold">Вход / Регистрация</div>
                    <q-btn icon="close" flat round dense v-close-popup @click="reset"/>
                  </div>
                  <form @submit.prevent.stop="onSubmit" @reset.prevent.stop="onReset" class="q-px-sm q-gutter-y-sm column q-mb-sm mRat" style="width: 100%">
                    <q-input dark color="white" outlined type="email" label="E-mail" v-model="user.email"
                             lazy-rules :rules="[val => val && val.length > 0 || 'Заполните это поле']"/>
                    <q-input dark color="white" outlined :type="isPwd ? 'password' : 'text'" label="Пароль"
                             v-model="user.password" lazy-rules :rules="[val => val && val.length > 0 || 'Заполните это поле']">
                      <template v-slot:append>
                        <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd"/>
                      </template>
                    </q-input>
                    <q-checkbox dark v-model="checkRemember" label="Запомнить меня" color="deep-orange-12"
                                lazy-rules class="text-caption" :rules="[val => val && val.length > 0 || 'Заполните это поле']"/>
                    <q-btn flat no-caps class="bg-white text-deep-orange-12 mRatBold text-h6" label="Войти" @click="loginUser"/>
                  </form>
                  <div class="mRat q-gutter-y-sm column items-center">
                    <div style="text-decoration: underline; cursor: pointer" @click="slide='password'">Забыли пароль?</div>
                    <div style="text-decoration: underline; cursor: pointer" @click="slide='register'">Регистрация</div>
                  </div>
                </q-carousel-slide>

                <!--Восстановление пароля-->
                <q-carousel-slide name="password" class="column no-wrap" style="width: 350px; height: 400px">
                  <div class="row items-center q-pa-none q-mb-md justify-between" style="width: 100%">
                    <div class="text-h6 mRatBold">Восстановление пароля</div>
                    <q-btn icon="close" flat round dense v-close-popup @click="reset"/>
                  </div>
                  <div class="q-px-sm q-gutter-y-md column q-mb-sm" style="width: 100%">
                    <div class="text-body2">Укажите Ваш e-mail</div>
                    <q-input dark color="white" outlined type="email" label="E-mail" class="mRat"
                             lazy-rules v-model="emailPass" :rules="[val => val && val.length > 0 || 'Заполните это поле']"/>
                    <q-btn flat no-caps class="bg-white text-deep-orange-12 mRatBold text-h6" label="Отправить"/>
                  </div>
                </q-carousel-slide>

                <!--Регистрация-->
                <q-carousel-slide name="register" class="column no-wrap" style="width: 350px; height: 500px">
                  <div class="row items-center q-pa-none q-mb-md justify-between" style="width: 100%">
                    <div class="text-h6 mRatBold">Регистрация</div>
                    <q-btn icon="close" flat round dense v-close-popup @click="reset"/>
                  </div>
                  <div class="q-px-sm q-gutter-y-sm column q-mb-sm mRat" style="width: 100%">
                    <q-input dark dense color="white" outlined label="Имя" class="mRat" v-model="user.name"
                             lazy-rules :rules="[val => val && val.length > 0 || 'Заполните это поле']"/>
                    <q-input dark dense color="white" outlined type="email" label="E-mail" class="mRat" v-model="user.email"
                             lazy-rules :rules="[val => val && val.length > 0 || 'Заполните это поле']"/>
                    <q-input dark dense color="white" outlined label="Пароль" class="mRat" v-model="user.password"
                             lazy-rules :rules="[val => val && val.length > 0 || 'Заполните это поле']"/>
                    <q-input dark dense color="white" outlined label="Повторите пароль" v-model="confirmPass"
                             lazy-rules :rules="[val => val && val.length > 0 || 'Заполните это поле']"/>
                  </div>
                  <div class="q-px-sm q-gutter-y-md column mRat">
                    <q-checkbox dark dense v-model="confirmAds" label="Согласен на получение рассылок" color="deep-orange-12" class="mRat text-caption"/>
                    <q-checkbox dark dense v-model="confirmData" label="Согласен на обработку данных" color="deep-orange-12"
                                lazy-rules class="mRat text-caption" :rules="[val => !!val || 'Заполните это поле']"/>
                    <q-btn flat no-caps class="bg-white text-deep-orange-12 mRatBold text-h6" label="Отправить"/>
                  </div>
                </q-carousel-slide>
              </q-carousel>
            </q-dialog>
          </q-btn>
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

import { mapActions } from 'vuex'

export default {
  data () {
    return {
      signInReg: false,
      checkRemember: false,
      slide: 'signIn',
      group: 'm',
      confirmData: false,
      confirmAds: false,
      user: {
        password: null,
        email: null,
        name: null
      },
      emailPass: null,
      confirmPass: null,
      isPwd: true
    }
  },
  methods: {
    reset () {
      this.signInReg = false
      this.slide = 'signIn'
    },
    ...mapActions({
      login: 'auth/auth/login'
    }),
    loginUser () {
      this.login(this.user)
        .then(() => {
          this.$router.push('/')
        })
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
