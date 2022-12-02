<template>
  <q-layout view="lHh Lpr fFf">
    <TheHeading />
    <q-page-container>
      <RouterView v-slot="{ Component, route }">
        <transition
          appear
          mode="out-in"
          enter-active-class="animated fadeInLeft"
          leave-active-class="animated fadeOutLeft"
          :duration="300"
        >
          <component :is="Component" :key="route.path" />
        </transition>
      </RouterView>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import TheHeading from "src/components/TheHeading.vue";
</script>
