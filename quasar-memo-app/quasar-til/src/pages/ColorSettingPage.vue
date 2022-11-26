<template>
  <q-page padding>
    <div class="q-pa-md row items-start q-gutter-md">
      <div class="list" v-for="color in brandColors" :key="color">
        <div class="text-center q-mb-sm text-subtitle1">${{ color.name }}</div>
        <div>
          <q-color v-model="color.hex" class="my-picker" />
        </div>
        <div class="flex justify-between q-pt-sm">
          <q-btn @click="submit(color.name, color.hex)" label="submit" />
          <q-btn @click="reset(color.name)" label="reset" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, watch, watchEffect } from "vue";
import { getCssVar, setCssVar } from "quasar";
import { useQuasar } from "quasar";

const $q = useQuasar();

const brandColors = ref([
  { name: "primary", hex: getCssVar("primary") },
  { name: "secondary", hex: getCssVar("secondary") },
  { name: "accent", hex: getCssVar("accent") },
  { name: "dark", hex: getCssVar("dark") },
  { name: "dark-page", hex: getCssVar("dark-page") },
  { name: "positive", hex: getCssVar("positive") },
  { name: "negative", hex: getCssVar("negative") },
  { name: "info", hex: getCssVar("info") },
  { name: "warning", hex: getCssVar("warning") },
]);
const defaultBrandColors = [
  { name: "primary", hex: "#1976d2" },
  { name: "secondary", hex: "#26a69a" },
  { name: "accent", hex: "#9c27b0" },
  { name: "dark", hex: "#1d1d1d" },
  { name: "dark-page", hex: "#121212" },
  { name: "positive", hex: "#21ba45" },
  { name: "negative", hex: "#c10015" },
  { name: "info", hex: "#31ccec" },
  { name: "warning", hex: "#f2c037" },
];

const submit = (name, hex) => {
  setCssVar(name, hex);
  $q.localStorage.set(name, hex);
};
const reset = (name) => {
  const findDefaultHex = defaultBrandColors.find((x) => x.name === name).hex;
  brandColors.value.find((x) => x.name === name).hex = findDefaultHex;
  setCssVar(name, findDefaultHex);
};
</script>

<style lang="scss" scoped>
.my-picker {
  max-width: 100px;
}
.bg-color {
  width: 100px;
  height: 100px;
}
</style>
