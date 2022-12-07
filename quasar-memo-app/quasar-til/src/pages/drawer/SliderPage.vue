<template>
  <q-page padding>
    <div class="text-h6 text-weight-bold">Slider</div>
    <q-list class="row items-start">
      <q-item>
        <q-item-section>
          <q-item-label header>basic</q-item-label>
          <div>
            <q-badge> Model: {{ standard }} (0 t0 50) </q-badge>
            <q-slider :min="0" :max="50" v-model="standard" />
            <q-slider
              :min="0"
              :max="50"
              v-model="standard"
              label-always
              color="red"
            />
            <q-slider :min="0" :max="50" v-model="standard" label vertical />
          </div>
          <div>
            <q-badge
              >Model : {{ standard2 }} (0 to 100, selection 20 to 70)</q-badge
            >
            <q-slider
              v-model="standard2"
              :min="0"
              :max="100"
              :inner-min="20"
              :inner-max="70"
              color="orange"
            />
          </div>
          <div>
            <q-badge>Model : {{ standard3 }} (-20 to 20, step 4)</q-badge>
            <q-slider v-model="standard3" :min="-20" :max="20" step="4" />
            <q-badge
              >Model : {{ standard3 }} (-20 to 20, step 4, with label)</q-badge
            >
            <q-slider v-model="standard3" :min="-20" :max="20" step="4" label />
          </div>
          <div>
            <q-badge>Model : {{ standard3 }} (-20 to 20, step 4)</q-badge>
            <q-slider
              v-model="standard3"
              :min="-20"
              :max="20"
              step="4"
              label-always
              :label-value="`Value: ${standard3}px`"
            />
          </div>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label header>markers</q-item-label>
          <div>
            <q-badge>Model: {{ marker }}(0 to 10)</q-badge>
            <q-slider v-model="marker" :min="0" :max="10" markers />
            <q-badge>Model: {{ marker }}(0 to 10, with snap)</q-badge>
            <q-slider v-model="marker" :min="0" :max="10" markers snap />
            <q-badge
              >Model: {{ marker }}(0 to 16, step 2, marker step 4 with
              snap)</q-badge
            >
            <q-slider
              v-model="marker"
              :min="0"
              :max="16"
              :markers="4"
              :step="2"
              snap
            />
          </div>
          <div>
            <q-badge>Model: {{ marker }}(0 to 10)</q-badge>
            <q-slider :min="0" :max="10" marker-labels v-model="marker" />
            <q-badge>Model: {{ marker }}(0 to 10)</q-badge>
            <q-slider
              :min="0"
              :max="10"
              :marker-labels="fnMarkerLabel"
              markers
              v-model="marker"
            />
            <q-badge>Model: {{ marker }}(0 to 10)</q-badge>
            <q-slider
              :min="0"
              :max="10"
              markers
              :marker-labels="objMarkerLabel"
              v-model="marker"
            />
            <q-badge>Model: {{ marker }}(0 to 10)</q-badge>
            <q-slider
              :inner-min="3"
              :inner-max="6"
              :min="0"
              :max="10"
              markers
              :marker-labels="arrMarkerLabel"
              v-model="marker"
            />
          </div>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label header>marker label slot</q-item-label>
          <div>
            <q-slider
              class="q-mt-xl"
              v-model="slotMarker"
              color="orange"
              markers
              :min="0"
              :max="5"
              marker-labels
            >
              <template v-slot:marker-label-group="{ markerList }">
                <div
                  v-for="val in 4"
                  :key="val"
                  class="cursor-pointer"
                  :class="markerList[val].classes"
                  :style="markerList[val].style"
                  @click="slotMarker = val"
                >
                  {{ val }}
                </div>

                <q-icon
                  v-for="val in [0, 5]"
                  :key="val"
                  class="cursor-pointer"
                  :class="markerList[val].classes"
                  :style="markerList[val].style"
                  size="sm"
                  color="orange"
                  :name="val === 0 ? 'volume_off' : 'volume_up'"
                  @click="slotMarker = val"
                />
              </template>
            </q-slider>
          </div>
        </q-item-section>
      </q-item>
    </q-list>
    <div>
      <div class="text-h6 text-weight-bold">Slider(, Range)</div>
      <q-item>
        <q-item-section>
          <q-item-label header
            >Slider와 동일하지만, 범위를 설정할 수 있는 점이 다르다.
          </q-item-label>
          <div>
            <q-range v-model="range" label-always></q-range>
          </div>
        </q-item-section>
      </q-item>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

const standard = ref(0);
const standard2 = ref(0);
const standard3 = ref(0);

const marker = ref(2);
const fnMarkerLabel = (val) => `${val}%`;
const objMarkerLabel = { 0: "0°C", 3: { label: "3°C" }, 5: "5°C", 6: "6°C" };
const arrMarkerLabel = [
  { value: 3, label: "$3" },
  { value: 4, label: "$4" },
  { value: 5, label: "$5" },
  { value: 6, label: "$6" },
];
const slotMarker = ref(0);

const range = ref({
  min: 0,
  max: 50,
});
</script>

<style lang="scss" scoped>
.q-item {
  width: 400px;
}
.q-badge {
  background-color: $secondary;
}
</style>
