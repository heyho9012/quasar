<template>
  <ListItem :items="items">
    <template #link="item">
      <router-link
        class="text-secondary text-subtitle2"
        :to="`/item/${item.id}`"
        >{{ item.title }}</router-link
      >
    </template>
  </ListItem>
</template>

<script setup>
import { useFetch } from "src/composables/useFetch";
import ListItem from "src/components/ListItem.vue";

const items = useFetch();
</script>

<style lang="scss" scoped></style>
