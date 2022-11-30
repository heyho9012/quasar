<template>
  <q-page padding>
    <div>
      <q-carousel
        v-model="slide"
        transition-prev="slide-right"
        transition-next="slide-left"
        navigation
        control-color="primary"
        class="rounded-borders"
        height="500px"
        arrows
        padding
        animated
        swipeable
        :autoplay="autoplay"
        v-model:fullscreen="fullscreen"
      >
        <q-carousel-slide
          v-for="n in 4"
          :key="n"
          :name="n"
          class="column no-wrap flex-center"
          :img-src="n < 3 ? `https://cdn.quasar.dev/img/parallax${n}.jpg` : ''"
        >
          <q-icon size="56px" name="login" />
          <div class="q-mt-md text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, numquam quaerat! Saepe totam quasi alias eveniet, omnis
            dolorum placeat libero commodi impedit. Exercitationem, voluptatem.
            Deserunt architecto ipsam magnam quibusdam repudiandae.
          </div>
        </q-carousel-slide>
        <template #control>
          <q-carousel-control
            position="bottom-right"
            :offset="[66, 66]"
            class="text-white rounded-borders"
            style="
              background: rgba(0, 0, 0, 0.5);
              padding: 4px;
              margin-right: 16px;
            "
          >
            <q-toggle
              dense
              dark
              color="orange"
              v-model="autoplay"
              label="Auto Play"
            />
          </q-carousel-control>
          <q-carousel-control
            position="bottom-right"
            :offset="[18, 18]"
            class="text-white rounded-borders"
          >
            <q-btn
              push
              dense
              round
              color="white"
              text-color="primary"
              :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
              @click="fullscreen = !fullscreen"
            />
          </q-carousel-control>
        </template>
      </q-carousel>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

const slide = ref(1);
const autoplay = ref(true);
const fullscreen = ref(false);
</script>

<style lang="scss" scoped></style>
