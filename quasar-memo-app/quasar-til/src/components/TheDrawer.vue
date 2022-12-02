<template>
  <q-drawer v-model="drawer" v-if="isLogin">
    <q-list>
      <q-item-label header>Quasar Vue 3</q-item-label>
      <template v-for="item in items" :key="item.name">
        <q-item clickable :to="item.to">
          <q-item-section>
            <q-item-label>{{ item.name }}</q-item-label>
            <q-item-label caption>{{ item.caption }}</q-item-label>
          </q-item-section>
        </q-item>
        <q-separator />
      </template>
    </q-list>
  </q-drawer>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useUserStore } from "src/stores/auth/user";
import { computed } from "vue";

// prop , emit
const props = defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);

const { isLogin } = storeToRefs(useUserStore());

const drawer = computed({
  get() {
    return props.modelValue;
  },
  set(e) {
    emit("update:modelValue", e.target.value);
  },
});

const items = [
  {
    name: "Main",
    to: "/main",
    caption: "main",
  },
  {
    name: "Settings",
    to: "/color-settings",
    caption: "color setting",
  },
  {
    name: "Button",
    to: "/button",
    caption: "q-btn",
  },
  {
    name: "Carousel",
    to: "/carousel",
    caption: "q-carousel",
  },
  {
    name: "Chip, Circular Progress",
    to: "/chip",
    caption: "q-chip, q-circular-progress",
  },
  {
    name: "Dialog & Basic Editor",
    to: "/dialog",
    caption: "q-dialog, q-editor",
  },
  {
    name: "Expansion Item & FAB",
    to: "/expansionitem",
    caption: "q-expansion-item, q-fab",
  },
  {
    name: "Select & File Picker",
    to: "/select",
    caption: "q-select, q-file",
  },
  {
    name: "Radio",
    to: "/radio",
    caption: "q-radio",
  },
  {
    name: "Checkbox & Toggle",
    to: "/checkbox",
    caption: "q-checkbox, q-toggle",
  },
];
</script>

<style lang="scss" scoped></style>
