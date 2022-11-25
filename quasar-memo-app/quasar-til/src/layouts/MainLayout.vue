<template>
  <q-layout view="lHh Lpr lFf">
    <TheHeading />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import TheHeading from "src/components/TheHeading.vue";
</script>
