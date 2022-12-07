<template>
  <q-page padding>
    <div class="text-h6 text-weight-bold">Parallex</div>
    <q-list>
      <q-item class="q-mt-lg">
        <q-item-section>
          <q-item-label header>basic</q-item-label>
          <q-parallax src="https://cdn.quasar.dev/img/parallax2.jpg">
            <h2 class="text-white">Basic</h2>
          </q-parallax>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label header>custom speed</q-item-label>
          <q-parallax :height="200" :speed="0.5">
            <template #media>
              <img src="https://cdn.quasar.dev/img/parallax1.jpg" />
            </template>
            <h2 class="text-white">Custom speed</h2>
          </q-parallax>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label header>custom speed</q-item-label>
          <q-parallax>
            <template v-slot:media>
              <img src="https://cdn.quasar.dev/img/parallax2.jpg" />
            </template>

            <template #content="{ percentScrolled }">
              <div
                class="absolute column items-center"
                :style="{
                  opacity: 0.45 + (1 - percentScrolled) * 0.55,
                  top: percentScrolled * 60 + '%',
                  left: 0,
                  right: 0,
                }"
              >
                <img
                  src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"
                  style="width: 150px; height: 150px"
                />
                <div class="text-h3 text-white text-center">
                  Quasar Framework
                </div>
                <div class="text-h6 text-grey-3 text-center">
                  v{{ $q.version }}
                </div>
              </div>
            </template>
          </q-parallax>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script setup></script>

<style lang="scss" scoped>
.q-list {
  height: 2000px;
}
</style>
