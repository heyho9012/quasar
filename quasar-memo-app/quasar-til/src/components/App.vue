<template>
  <Suspense>
    <template #default>
      <ProfileCard />
    </template>
    <template #fallback>
      <ProfileCardSkeleton />
    </template>
  </Suspense>
</template>

<script setup>
import ProfileCard from './components/ProfileCard.vue'
import ProfileCardSkeleton from './components/ProfileCardSkeleton.vue'
</script>

<style>
html,
body {
  background-color: #eee;
}

</style>