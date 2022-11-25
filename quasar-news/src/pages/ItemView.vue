<template>
  <q-page padding>
    <UserProfile>
      <template #username>
        <div class="text-h4">{{ item.title }}</div>
        <router-link class="text-secondary" :to="`/user/${item.user}`">{{
          item.user
        }}</router-link>
      </template>
      <template #time
        ><span class="q-ml-sm text-grey"
          >Posted {{ item.time_ago }}</span
        ></template
      >
      <template #comments>
        <div class="text-h6">Comments 👇🏻</div>
        <div v-for="comment in item.comments" :key="comment.id">
          <div class="comment text-subtitle2" v-html="comment.content"></div>
          <p class="text-secondary">
            <span class="text-grey">{{ comment.time_ago }}</span> by
            {{ comment.user }}
          </p>
        </div>
      </template>
    </UserProfile>
  </q-page>
</template>

<script setup>
import UserProfile from "src/components/UserProfile.vue";
import { useItem } from "../composables/useFetch";

const item = useItem();
</script>

<style lang="scss">
a {
  text-decoration: none;
}
.comment {
  p {
    margin: 0;
  }
}
</style>
