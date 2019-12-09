<template>
  <div class="q-pt-xs-md q-pt-sm-xl row">
    <div class="col-10 offset-1 column text-h5 mRat text-grey-10">
      <div class="text-deep-orange-13 text-h4 mRatBold q-mt-xs-md q-mt-sm-xl titleBig">О компании</div>
      <div class="q-my-sm-xl q-my-xs-lg shipText">Официальный интернет-магазин Doshiki-shop.ru всегда рад поставлять для вас все новые и новые виды лапши быстрого приготовления.<br><br>
        Помимо широкого ассортимента продукции из разных стран, вас ждут и самые приятные цены.<br>
        Оставайтесь с нами, наслаждаясь новой порцией ароматной лапши!</div>
      <div class="headerSmall q-my-sm-xl q-my-xs-lg">Для сотрудничества и поставок</div>
      <div class="q-mb-sm-xl q-mb-xs-lg shipText">Мы всегда готовы рассмотреть продукцию вашего производства!<br><br>
        Для этого пишите нам в любое время на почту: doshiki-shop@mail.ru<br>
        Или же в мессенджерах:<br>
        Whatsapp: +7 (800) 555-36-35<br>
        Telegram: +7 (800) 555-36-35<br><br>
        Наши менеджеры ждут ваших предложений!</div>
      <div class="headerSmall q-my-sm-xl q-my-xs-lg">Адрес магазина для покупки на месте</div>
      <div class="text-body-2 shipText">Санкт-Петербург, пр. Большевиков 22<br><br>
        График работы:<br>
        9:00 -23:00<br>
        без перерывов и выходных</div>
      <div class="headerSmall q-my-sm-xl q-my-xs-lg">Дошики с вами в социальных медиа</div>
      <div class="text-body-2 shipText">Instagram: <span style="text-decoration: underline" class="mRatBold cursor-pointer">instagram.com/doshiki</span><br>
        Вконтакте: <span style="text-decoration: underline" class="mRatBold cursor-pointer" >vk.com/doshiki</span></div>
    </div>
    <div class="row bg-orange-10 justify-between full-width q-mt-xl">
      <div class="col-3 gt-xs" style="background-image: url('../statics/img/adNoodle.png'); background-position: right"/>
      <div class="column col-xs-12 col-sm-6 q-px-xs-md justify-center items-center text-center q-gutter-y-lg q-py-md">
        <div class="mRatAltBold text-h4 text-white textAd">Рассылка с новинками и акциями интернет-магазина Doshiki</div>
        <q-input rounded outlined v-model="text" label="Email"
                 bg-color="deep-orange-1"
                 class="mRat text-h5"/>
        <q-btn no-caps rounded class="bg-light-green-14 mRatBold text-white text-h5 q-px-lg" label="Подписаться"
               style="width: fit-content"/>
      </div>
      <div class="col-3 qt-xs" style="background-image: url('../statics/img/adNoodle2.png'); background-position: left"/>
    </div>
  </div>
</template>

<style lang = 'scss'>
  .headerSmall{
    font-family: mRatBold, 'serif';
    color: #FD7014;
  }
  .headerText{
    font-family: mRatBold, 'serif';
  }
  .shipText{
    @media (max-width: $breakpoint-xs-max){
      font-size: 16px;
      line-height: 24px;
    }
  }
  .textAd{
    @media (max-width: $breakpoint-sm-max){
      font-size: 24px;
      line-height: 28px;
    }
  }
</style>
