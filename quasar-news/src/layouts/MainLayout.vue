<template>
  <q-layout view="hHh lpR fFf">
    <AppHeader />
    <q-page-container>
      <RouterView v-slot="{ Component, route }">
        <Transition name="fade">
          <component :is="Component" :key="route.path" />
        </Transition>
      </RouterView>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import AppHeader from "components/AppHeader.vue";
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s linear;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
