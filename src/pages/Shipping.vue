<template>
  <div class="q-pt-xs-md q-pt-sm-xl row">
    <div class="col-10 offset-1 column text-h5 mRat text-grey-10">
      <div class="text-deep-orange-13 text-h4 mRatBold q-mt-xs-md q-mt-sm-xl titleBig">Доставка и оплата</div>
      <div class="q-my-sm-xl q-my-xs-lg shipText">Официальный интернет-магазин Doshiki осуществляет бесплатную доставку по всей России.<br><br>
        Минимальная сумма заказа для бесплатной доставки в пределах Санкт-Петербурга - 200р.<br>По всей России - 400р.<br>
        В остальных случаях - цена согласно службы выбранной вами курьерской службы</div>
        <div class="headerSmall q-my-sm-xl q-my-xs-lg">Как оформить заказ</div>
        <div class="q-mb-sm-xl q-mb-xs-lg shipText">1. Выбираете нужный товар, нажимаете кнопку «Купить».<br>
          2. Переходите в раздел «Корзина», внимательно проверяете наименование и количество товаров.<br>
          3. После этого нажимаете кнопку «Оформить заказ».<br>
          4. Указываете запрашиваемые данные для доставки.<br>
          5. Выбираете удобный способ доставки и оплаты, при курьерской доставке указываете адрес.<br>
          6. Подтверждаете оформление заказа.<br>
          7. После оформления заказа на сайте с вами свяжется ответственный менеджер для подтверждения заказа.<br>
          8. После передачи заказа менеджерами магазина в службу доставки для отправки в регионы придут данные для мониторинга посылки.</div>
        <div class="headerSmall q-my-sm-xl q-my-xs-lg">Сроки оплаты заказа</div>
        <div class="q-mb-sm-xl q-mb-xs-lg shipText">Оплата заказа с помощью способов, отличающихся от оплаты наличными, должна быть произведена в течение 24 часов с момента его оформления. Если в течение 24 часов не производится оплата и покупатель не выходит на связь, заказу присваивается статус «отменен» и товар выставляется на продажу. Не оплачивайте отменённые заказы, они не подлежат восстановлению.<br>
          В дальнейшем, при необходимости, сформируйте новый заказ.</div>
        <div class="headerSmall q-my-sm-xl q-my-xs-lg">Способы оплаты заказа</div>
        <div class="q-mb-sm-xl q-mb-xs-lg shipText">При покупке в интернет-магазине Doshiki.ru можно выбрать наиболее удобный способ оплаты из предложенных вариантов в вашем регионе.<br><br>
          <span class="headerText">Наличными или банковской картой при получении заказа</span><br><br>
          Способ оплаты наличными при получении действует в г. Санкт-Петербург (в пределах КАД).<br><br>
          <span class="headerText">Банковской картой онлайн</span><br><br>
          Оплата банковской картой возможна онлайн при оформлении заказа через сайт магазина ezviz.ru<br><br>
          <span class="headerText">Безналичный расчет</span><br><br>
          Для осуществления безналичного расчета сообщите об этом менеджеру по телефону. Далее вам будет выставлен счет для оплаты по безналичному расчету. Выставление счетов возможно для юридических лиц и для физических лиц. Все цены включают в себя НДС.</div>
        <div class="headerSmall q-my-sm-xl q-my-xs-lg">Условия доставки заказов</div>
        <div class="q-mb-sm-xl q-mb-xs-lg shipText"><span class="headerText">Курьерская доставка по Москве и Санкт-Петербургу</span><br><br>
          Доставка производится курьерскими службами в течение 1-3 рабочих дней по предварительному согласованию с покупателем временного промежутка.<br><br>
          <span class="headerText">Доставка в остальные населённые пункты России</span><br><br>
          Доставка заказов производится через курьерские службы. Такой заказ должен быть оплачен онлайн с помощью банковской карты. В случае появления уточнений или вопросов по оформлению заказа, по ранее оформленным заказам, по срокам доставки, просим связываться с менеджерами интернет-магазина по почте doshiki@gmail.com, либо по телефону горячей линии 8 800 555 36 35 (в рабочие часы, по России звонок бесплатный).</div>
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
