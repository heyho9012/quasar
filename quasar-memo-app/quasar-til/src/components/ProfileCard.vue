<template>
  <q-card class="profile-card" flat bordered>
    <q-card-section horizontal>
      <q-card-section>
        <q-avatar size="5rem">
          <q-img :src="userData.pic" />
        </q-avatar>
      </q-card-section>
      <q-card-section>
        <span class="text-uppercase text-overline text-grey"> Written By </span>
        <h3>{{ userData.name }}</h3>
        <p>{{ userData.bio }}</p>
      </q-card-section>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { ref } from "vue";
const loadingData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "Matt Maribojoc",
        pic: "https://cdn-images-1.medium.com/fit/c/100/100/2*EcZb9cndrhTF7_d74dv2Fg.png",
        bio: "I run a VueJS community over at https://learnvue.co, develop web sites, and post whatever I find cool on the Internet.",
      });
    }, 2000);
  });
};
const userData = ref(await loadingData());
</script>

<style>
.profile-card {
  width: 100%;
  max-width: 700px;
  min-height: 180px;
}
</style>
