<template>
  <UserProfile>
    <template #username>
      <div class="text-h5 text-weight-bold flex items-center">
        <q-avatar class="q-mr-sm" color="dark" text-color="white">
          {{ user.id }}
        </q-avatar>
        {{ user.id }}
      </div>
    </template>
    <template #time
      ><div>Joined {{ user.created }}.</div></template
    >
    <template #karma
      ><div>{{ user.karma }} karma</div></template
    >
  </UserProfile>
</template>

<script setup>
import UserProfile from "src/components/UserProfile.vue";
import { useUser } from "src/composables/useFetch";

const user = useUser();
</script>

<style lang="scss" scoped></style>
