<template>
  <q-page>
    <ListItem :items="items">
      <template #user="item">
        <a class="text-secondary" :href="item.url" target="_blank">{{
          item.domain
        }}</a>
      </template>
    </ListItem>
  </q-page>
</template>

<script setup>
import { useFetch } from "src/composables/useFetch";
import ListItem from "src/components/ListItem.vue";

const items = useFetch();
</script>
