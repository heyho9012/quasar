<template>
  <q-page padding>
    <q-linear-progress color="deep-orange" size="2px" indeterminate />
    <div class="text-h6 text-weight-bold">Intersection</div>
    <q-linear-progress color="deep-orange" size="2px" query />
    <q-list tag="ul" class="row items-start">
      <q-item tag="li" dense>
        <q-item-section>
          <q-item-label header>basic</q-item-label>
          <div class="row q-gutter-md wrapper">
            <q-intersection v-for="index in 10" :key="index" class="item">
              <q-card>
                <img src="https://cdn.quasar.dev/img/mountains.jpg" />
                <q-card-section>
                  <div class="text-h6">Card #{{ index }}</div>
                  <div class="text-subtitle2">by John Doe</div>
                </q-card-section>
              </q-card>
            </q-intersection>
          </div>
        </q-item-section>
      </q-item>
      <q-item tag="li" dense>
        <q-item-section>
          <q-item-label header>with transition</q-item-label>
          <div class="row q-gutter-x-md">
            <div class="row q-gutter-md wrapper">
              <q-intersection
                v-for="index in 10"
                :key="index"
                class="item"
                transition="scale"
              >
                <q-card>
                  <img src="https://cdn.quasar.dev/img/mountains.jpg" />
                  <q-card-section>
                    <div class="text-h6">Card #{{ index }}</div>
                    <div class="text-subtitle2">by John Doe</div>
                  </q-card-section>
                </q-card>
              </q-intersection>
            </div>
            <div class="q-gutter-md wrapper">
              <q-intersection
                v-for="index in 30"
                :key="index"
                class="item2"
                transition="scale"
              >
                <q-item clickable v-ripple>
                  <q-item-section avatar>
                    <q-avatar color="primary" text-color="white"> Q </q-avatar>
                  </q-item-section>

                  <q-item-section>
                    <q-item-label>Contact #{{ index }}</q-item-label>
                    <q-item-label caption lines="1"
                      >some@email.com</q-item-label
                    >
                  </q-item-section>

                  <q-item-section side>
                    <q-icon name="chat_bubble" color="green" />
                  </q-item-section>
                </q-item>
              </q-intersection>
            </div>
          </div>
        </q-item-section>
      </q-item>
      <q-item tag="li" dense>
        <q-item-section>
          <q-item-label header>once</q-item-label>
          <div class="row q-gutter-md wrapper">
            <q-intersection
              v-for="index in 10"
              :key="index"
              class="item"
              once
              transition="scale"
            >
              <q-card>
                <img src="https://cdn.quasar.dev/img/mountains.jpg" />
                <q-card-section>
                  <div class="text-h6">Card #{{ index }}</div>
                  <div class="text-subtitle2">by John Doe</div>
                </q-card-section>
              </q-card>
            </q-intersection>
          </div>
        </q-item-section>
      </q-item>
      <q-item tag="li" dense :active="true" active-class="text-orange">
        <q-item-section>
          <q-item-label header>root viewport</q-item-label>
          <div class="row q-gutter-md wrapper" ref="listRef">
            <q-intersection
              v-for="index in 10"
              :key="index"
              class="item"
              :root="listEl"
              transition="scale"
            >
              <q-card>
                <img src="https://cdn.quasar.dev/img/mountains.jpg" />
                <q-card-section>
                  <div class="text-h6">Card #{{ index }}</div>
                  <div class="text-subtitle2">by John Doe</div>
                </q-card-section>
              </q-card>
            </q-intersection>
          </div>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script setup>
import { computed, ref } from "vue";

const listRef = ref(null);
const listEl = computed(() => (listRef.value ? listRef.value.$el : null));
</script>

<style lang="scss" scoped>
.q-item {
  .wrapper {
    width: 400px;
    height: 420px;
    overflow-y: scroll;
  }
  .item {
    width: 160px;
  }
  .item2 {
    height: 56px;
  }
}
</style>
