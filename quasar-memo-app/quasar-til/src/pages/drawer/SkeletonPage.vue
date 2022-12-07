<template>
  <q-page padding>
    <div class="text-h6 text-weight-bold">Skeleton</div>

    <Suspense>
      <ProfileCard />
      <template #fallback>
        <ProfileCardSkeleton />
      </template>
    </Suspense>
  </q-page>
</template>

<script setup>
import ProfileCardSkeleton from "src/components/ProfileCardSkeleton.vue";
import ProfileCard from "src/components/ProfileCard.vue";
</script>

<style lang="scss" scoped></style>
