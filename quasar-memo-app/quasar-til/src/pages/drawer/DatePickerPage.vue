<template>
  <q-page padding>
    <div class="text-h6 text-weight-bold">Date Picker</div>
    <q-list class="row items-start">
      <q-item>
        <q-item-section>
          <q-item-label header>basic</q-item-label>
          <div class="flex items-start q-gutter-x-md">
            <q-date v-model="date" />
            <q-date v-model="date" minimal />
            <q-date v-model="date" landscape class="q-mt-md" />
          </div>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label header
            >multiple, range, multiple-range, custom title,
            today-btn</q-item-label
          >
          <div class="flex items-start q-gutter-x-md">
            <div>
              <div class="ellipsis" :style="{ maxWidth: '280px' }">
                Model: {{ multipleDate }}
                <q-tooltip>
                  {{ multipleDate }}
                </q-tooltip>
              </div>
              <q-date v-model="multipleDate" multiple />
            </div>
            <div>
              <div>Model: {{ rangeDate }}</div>
              <q-date v-model="rangeDate" range />
            </div>
            <div class="q-mt-md">
              <q-date
                v-model="date"
                title="custom title"
                subtitle="custom subtitle"
                today-btn
              />
            </div>
          </div>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label header>event, options</q-item-label>
          <div class="flex items-start q-gutter-x-md">
            <q-date v-model="date" :events="events"></q-date>
            <q-date
              v-model="date"
              :events="eventsFn"
              :options="eventsFn"
            ></q-date>
          </div>
        </q-item-section>
      </q-item>
      <q-item class="input">
        <q-item-section>
          <q-item-label header>with input</q-item-label>
          <q-input filled v-model="date" :rules="['date']" mask="date">
            <template #append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy cover>
                  <q-date v-model="date">
                    <div class="row items-center justify-end" color="primary">
                      <q-btn v-close-popup flat label="close" /></div
                  ></q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

const date = ref("2022/01/01");
const multipleDate = ref(["2022/01/01", "2022/01/06"]);
const rangeDate = ref({ from: "2022/01/01", to: "2022/01/06" });
const events = ["2022/01/05", "2022/01/14"];
const eventsFn = (date) => {
  const [year, month, day] = date.split("/");
  return day % 2 === 0;
};
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
