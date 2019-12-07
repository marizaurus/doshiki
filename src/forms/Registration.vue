<template>
  <q-dialog v-model="this.signInReg" persistent transition-show="scale" transition-hide="scale">
    <q-carousel v-model="slide" style="border-radius: 5px; height: auto; width: auto" class="bg-deep-orange-12 text-white">

      <!--Вход-->
      <q-carousel-slide name="signIn" class="column no-wrap" style="width: 350px; height: 400px">
        <div class="row items-center q-pa-none q-mb-md justify-between" style="width: 100%">
          <div class="text-h6 mRatBold">Вход / Регистрация</div>
          <q-btn icon="close" flat round dense v-close-popup @click="reset"/>
        </div>
        <form @submit.prevent.stop="onSubmit" @reset.prevent.stop="onReset" class="q-px-sm q-gutter-y-sm column q-mb-sm mRat" style="width: 100%">
          <q-input dark color="white" outlined type="email" label="E-mail" v-model="this.user.email"
                   lazy-rules :rules="[val => val && val.length > 0 || 'Заполните это поле']"/>
          <q-input dark color="white" outlined :type="isPwd ? 'password' : 'text'" label="Пароль"
                   v-model="this.user.password" lazy-rules :rules="[val => val && val.length > 0 || 'Заполните это поле']">
            <template v-slot:append>
              <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd"/>
            </template>
          </q-input>
          <q-checkbox dark v-model="this.checkRemember" label="Запомнить меня" color="deep-orange-12"
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
                   lazy-rules v-model="this.emailPass" :rules="[val => val && val.length > 0 || 'Заполните это поле']"/>
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
          <q-input dark dense color="white" outlined label="Имя" class="mRat" v-model="this.user.name"
                   lazy-rules :rules="[val => val && val.length > 0 || 'Заполните это поле']"/>
          <q-input dark dense color="white" outlined type="email" label="E-mail" class="mRat" v-model="this.user.email"
                   lazy-rules :rules="[val => val && val.length > 0 || 'Заполните это поле']"/>
          <q-input dark dense color="white" outlined label="Пароль" class="mRat" v-model="this.user.password"
                   lazy-rules :rules="[val => val && val.length > 0 || 'Заполните это поле']"/>
          <q-input dark dense color="white" outlined label="Повторите пароль" v-model="this.confirmPass"
                   lazy-rules :rules="[val => val && val.length > 0 || 'Заполните это поле']"/>
        </div>
        <div class="q-px-sm q-gutter-y-md column mRat">
          <q-checkbox dark dense v-model="this.confirmAds" label="Согласен на получение рассылок" color="deep-orange-12" class="mRat text-caption"/>
          <q-checkbox dark dense v-model="this.confirmData" label="Согласен на обработку данных" color="deep-orange-12"
                      lazy-rules class="mRat text-caption" :rules="[val => !!val || 'Заполните это поле']"/>
          <q-btn flat no-caps class="bg-white text-deep-orange-12 mRatBold text-h6" label="Отправить"/>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </q-dialog>
</template>

<script>

import { mapActions } from 'vuex'

export default {
  name: 'Registration',
  props: {
    signInReg: Boolean
  },
  data () {
    return {
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

<style scoped>

</style>
