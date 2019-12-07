<template>
  <div>
    <div class="q-pa-md">
      <q-card class="my-card">
        <q-video src="https://www.youtube.com/embed/gFwz-SvcBV4?rel=0" />
        <q-card-section>
          <div class="text-h6">Chicken ramen</div>
          <div class="text-subtitle2">Nissin</div>
          <q-rating size="24px" v-model="stars" :max="5" />
        </q-card-section>
      </q-card>
    </div>
    <q-toggle v-model="visible" label="Visible image" class="q-mb-md" />

    <q-slide-transition>
      <div v-show="visible" class="q-px-md">
        <q-card class="q-pa-md bg-grey-2 shadow-3">

          <div class="q-pa-md row justify-center">
            <div style="width: 300px; max-width: 400px">
              <q-chat-message
                :text="['hey, how are you?']"
                sent
              />
              <q-chat-message
                :text="['doing fine, how r you?']"
              />
            </div>
          </div>
          <q-input filled v-model="text" label="Type a message..." />
        </q-card>
      </div>
    </q-slide-transition>

    <p v-for="n in 15" :key="n">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?
    </p>

    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="chat_bubble_outline" color="grey-5" text-color="black">
        <q-menu persistent anchor="top right" self="bottom right" :offset="[0, 10]">
          <q-card class="q-pa-md bg-grey-2 ">
            <q-card-section class="row items-center q-pa-none">
              <div class="text-h6">Чат с консультантом</div>
              <q-btn icon="close" flat round dense v-close-popup class="q-ml-auto"/>
            </q-card-section>
            <div class="q-pa-md row justify-center">
              <div style="width: 300px; max-width: 400px">
                <q-chat-message
                  :text="['hey, how are you?']"
                  sent
                />
                <q-chat-message
                  :text="['doing fine, how r you?']"
                />
              </div>
            </div>
            <q-input filled bottom-slots v-model="text" label="Type a message..." class="q-pa-none">
              <template v-slot:append>
                <q-icon name="close" @click="text = ' '" class="cursor-pointer" />
              </template>
              <template v-slot:after>
                <q-btn round dense flat icon="send" />
              </template>
            </q-input>
          </q-card>
        </q-menu>
      </q-btn>
    </q-page-sticky>

    <q-list class="col-xs-12 col-sm-8">
      <q-separator spaced/>
      <q-item class="text-h5 text-grey-9 mRatBold customer">
        <q-item-section thumbnail class="sectionChip">
          <q-chip color="deep-orange-13" text-color="white" size="lg">Новый</q-chip>
        </q-item-section>
        <q-item-section>
          <div>Заказ №60</div>
        </q-item-section>
        <q-item-section>
          <div class="mRat">покупатель: <span class="text-deep-orange-12">Арина</span></div>
        </q-item-section>
        <q-item-section side>
          <div class="text-grey-9">750 ₽</div>
        </q-item-section>
      </q-item>
      <q-separator spaced/>
      <q-item class="text-h5 text-grey-9 mRatBold customer">
        <q-item-section thumbnail class="sectionChip">
          <q-chip color="indigo-10" text-color="white" size="lg">Звонок</q-chip>
        </q-item-section>
        <q-item-section>
          <div>Заказ №61</div>
        </q-item-section>
        <q-item-section>
          <div class="mRat">покупатель: <span class="text-deep-orange-12">Дарья</span></div>
        </q-item-section>
        <q-item-section side>
          <div class="text-grey-9">1750 ₽</div>
        </q-item-section>
      </q-item>
      <q-separator spaced/>
    </q-list>

  </div>
</template>
