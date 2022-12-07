<template>
  <q-page padding>
    <div class="text-h6 text-weight-bold">Time Picker</div>
    <q-list class="row items-start">
      <q-item>
        <q-item-section>
          <q-item-label header>basic</q-item-label>
          <div class="q-gutter-md">
            <q-time v-model="time" />
            <q-time v-model="timeWithSec" with-seconds />
            <q-time v-model="timeWithSec" landscape with-seconds format24h />
          </div>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label header>now button</q-item-label>
          <div class="q-gutter-md">
            <q-time now-btn v-model="time" />
          </div>
        </q-item-section>
      </q-item>
      <q-item class="input">
        <q-item-section>
          <q-item-label header>with Input, additional button</q-item-label>
          <div>
            <!-- :rules="['time']" -->
            <q-input
              filled
              v-model="inputTime"
              :rules="['fulltime']"
              mask="fulltime"
            >
              <template #append>
                <q-icon name="access_time" class="cursor-pointer">
                  <q-popup-proxy
                    cover
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-time v-model="inputTime" format24h with-seconds>
                      <div class="row items-center justify-end">
                        <q-btn
                          v-close-popup
                          label="Close"
                          color="primary"
                          flat
                        />
                      </div>
                    </q-time>
                  </q-popup-proxy>
                </q-icon> </template
            ></q-input>
            <q-input filled v-model="inputDateTime">
              <template #prepend>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    cover
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date v-model="inputDateTime" mask="YYYY-MM-DD HH:mm">
                      <div class="row items-center justify-end">
                        <q-btn
                          v-close-popup
                          label="Close"
                          color="primary"
                          flat
                        />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
              <template #append>
                <q-icon name="access_time" class="cursor-pointer">
                  <q-popup-proxy
                    cover
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-time
                      v-model="inputDateTime"
                      mask="YYYY-MM-DD HH:mm"
                      format24h
                      now-btn
                    >
                      <div class="row items-center justify-end">
                        <q-btn
                          v-close-popup
                          label="Close"
                          color="primary"
                          flat
                        />
                      </div>
                    </q-time>
                  </q-popup-proxy>
                </q-icon> </template
            ></q-input>
          </div>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

const time = ref("09:00");
const timeWithSec = ref("15:09:00");

const inputTime = ref("15:00:00");
const inputDateTime = ref("2022-01-01 14:00");
</script>

<style lang="scss" scoped>
.q-item {
  width: 680px;
  &.input {
    width: 300px;
  }
}
.q-time {
  width: 200px;
}
</style>
