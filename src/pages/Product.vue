<template>
  <div class="q-py-xl row">
    <div class="col-10 offset-1 column">
      <q-breadcrumbs class="text-grey-8 q-pb-xl mRat" active-color="text-grey-8">
        <template v-slot:separator>
          <q-icon size="1.5em" name="chevron_right" color="text-grey-8"/>
        </template>
        <q-breadcrumbs-el label="Лапша быстрого приготовления"/>
        <q-breadcrumbs-el label="Тайланд"/>
        <q-breadcrumbs-el label="Рисовая лапша"/>
        <q-breadcrumbs-el label="Соус пад тай"/>
      </q-breadcrumbs>
      <div class="mRatBold text-grey-10 text-h4 q-pb-lg">Рисовая лапша под соусом пад тай 135гр.</div>
      <div class="row q-col-gutter-x-xl">
        <div class="col-5 column">
          <div class="q-py-xl q-px-md q-mt-xl" style="border: 3px solid #818181; border-radius: 5px">
            <img src="../statics/img/productBig.png" alt="" width="100%">
          </div>
        </div>
        <div class="col-7 column justify-around">
          <div class="row justify-between">
            <div class="column q-gutter-y-sm">
              <div class="text-body-2 text-deep-orange-13 mRat">Товар есть в наличии</div>
              <div class="text-body-2 text-grey-10 mRat">Товар есть в наличии</div>
              <div class="text-body-2 text-grey-10 mRat">Производитель: Тайланд</div>
              <div class="text-body-2 text-grey-10 mRat">Комплектация: Контейнер</div>
              <div class="text-body-2 text-grey-10 mRat">Производитель: Тайланд</div>
              <div class="text-body-2 text-grey-10 mRat">Вес: 135г</div>
              <div class="text-body-2 text-grey-10 mRat">Код товара: 599</div>
            </div>
            <div class="column items-center justify-center">
              <div class="row q-mb-sm justify-around full-width">
                <div class="row items-end q-gutter-x-md">
                  <div class="newPrice text-deep-orange-13 mRatAltBold text-h5">125 р.</div>
                  <div class="prevPrice mRatAltBold text-body1 text-grey-7" style="text-decoration: line-through">148 р.</div>
                </div>
                <q-icon class="text-h4 text-deep-orange-13 text-bold" name="favorite_border"/>
              </div>
              <q-btn flat no-caps class="bg-deep-orange-13 text-white mRatAltBold text-h5 q-px-xl q-mb-md" label="В корзину"/>
              <div class="text-body-2 text-grey-10 mRatBold" style="text-decoration: underline">Заказать в 1 клик</div>
            </div>
          </div>
          <div class="text-body-2 text-grey-10">
            <span class="text-grey-9 mRatBold">Описание:</span>
            <div class="mRat">Рисовая лапша под соусом пад тай 135гр.Описание: Рисовая лапша под соусом пад тай 135гр.Описание: Рисовая лапша под соусом пад тай 135гр.Описание: Рисовая лапша под соусом пад тай 135гр.Описание: Рисовая лапша под соусом пад тай 135гр.Описание: Рисовая лапша под соусом пад тай 135гр.Описание: Рисовая лапша под соусом пад тай 135гр.</div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-5 row items-center justify-around">
          <div>
            <img src="../statics/img/trLeft.png" alt="">
          </div>
          <div class="row q-gutter-x-md">
            <div class="q-py-md q-px-md" style="border: 3px solid #FF894C; border-radius: 5px">
              <img src="../statics/img/productSmall.png" alt="">
            </div>
            <div class="q-py-md q-px-md" style="border: 3px solid #FF894C; border-radius: 5px">
              <img src="../statics/img/productSmall.png" alt="">
            </div>
          </div>
          <div>
            <img src="../statics/img/trRight.png" alt="">
          </div>
        </div>
      </div>
      <div class="row q-gutter-x-xl q-my-xl">
        <div class="mRatBold text-h5 text-grey-10 q-mt-lg">Другие вкусы</div>
        <div v-for="n in 6" :key="n" class="column justify-center text-center">
          <div class="q-py-xl q-px-xl q-mb-md" style="border: 3px solid #FF894C; border-radius: 5px"></div>
          <div class="text-body2 mRatBold text-grey-10">Говядина</div>
        </div>
        <div class="q-mt-lg">
          <img src="../statics/img/trRight.png" alt="">
        </div>
      </div>
      <div class="column q-my-xl">
        <div class="mRatBold text-h5 text-grey-10 q-mb-xl">Просмотренные товары</div>
        <div class="row q-gutter-x-xl">
          <div v-for="n in 5" :key="n" class="column justify-center" style="width: 196px">
            <div class="q-mb-md" style="border: 3px solid #FF894C; border-radius: 5px; height: 196px;"></div>
            <div class="text-body2 mRatBold text-grey-10 q-mb-sm text-center">Рисовая лапша под соусом пад тай 135гр.</div>
            <div class="row justify-evenly items-center">
              <div class="mRatAltBold text-deep-orange-13 text-body1">Цена: 125 р.</div>
              <q-btn flat dense icon="add_shopping_cart" class="bg-deep-orange-13 text-white q-pa-xs"/>
            </div>
          </div>
          <div class="q-mt-xl">
            <img src="../statics/img/trRight.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
