<template>
  <q-layout view="hHh lpR fFf">
    <AppHeader />
    <q-page-container>
      <RouterView v-slot="{ Component, route }">
        <transition
          appear
          duration="500"
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
        >
          <component :is="Component" :key="route.path" />
        </transition>
      </RouterView>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import AppHeader from "components/AppHeader.vue";
</script>

<style lang="scss" scoped></style>
