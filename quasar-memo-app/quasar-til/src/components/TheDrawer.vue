<template>
  <q-drawer v-model="drawer" show-if-above>
    <q-list>
      <q-item-label header>Quasar Vue Component Test</q-item-label>
      <q-item v-for="item in items" :key="item.name" clickable :to="item.to">
        <q-item-section>
          <q-item-label>{{ item.name }}</q-item-label>
          <q-item-label caption>{{ item.caption }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script setup>
import { computed, ref } from "vue";

// prop , emit
const props = defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);

const drawer = computed({
  get() {
    return props.modelValue;
  },
  set() {
    emit("update:modelValue", props.modelValue);
  },
});
// drawer

const items = [
  {
    name: "Main",
    to: "/main",
    caption: "main",
  },
  {
    name: "Button",
    to: "/button",
    caption: "q-btn",
  },
];
</script>

<style lang="scss" scoped></style>
