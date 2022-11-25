<template>
  <q-page padding>
    <div class="text-h5 text-center text-weight-bold text-primary q-mb-md">
      Quasar & Vue 3
    </div>
    <TheFormPostList @refresh="FETCH_POST" />
    <div class="btn-wrap-1">
      <q-btn round class="rotate-90" color="primary" icon="add" to="/add" />
    </div>
  </q-page>
</template>

<script setup>
import TheFormPostList from "components/posts/TheFormPostList.vue";
import { usePostStore } from "stores/posts/post";
const { FETCH_POST } = usePostStore();

FETCH_POST();
</script>

<style lang="scss">
.btn-wrap-1 {
  position: absolute;
  right: 32px;
  bottom: 32px;
}
</style>
