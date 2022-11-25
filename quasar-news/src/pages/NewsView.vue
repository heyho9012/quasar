<template>
  <q-page>
    <ListItem :items="items" />
  </q-page>
</template>

<script setup>
import { useFetch } from "src/composables/useFetch";
import ListItem from "src/components/ListItem.vue";

const items = useFetch();
</script>

<style lang="scss" scoped></style>
