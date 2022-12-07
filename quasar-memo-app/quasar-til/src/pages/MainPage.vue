<template>
  <q-page padding>
    <div class="text-h5 text-center text-weight-bold text-primary q-mb-md">
      Quasar Vue3 {{ electron ? "Electron" : "" }}
    </div>
    <TheFormPostList @refresh="FETCH_POST" />
  </q-page>
</template>

<script setup>
import TheFormPostList from "components/posts/TheFormPostList.vue";
import { useQuasar } from "quasar";
import { usePostStore } from "stores/posts/post";

const { FETCH_POST } = usePostStore();

FETCH_POST();

const $q = useQuasar();
const electron = $q.platform.is.electron;
</script>

<style lang="scss">
.btn-wrap-1 {
  position: absolute;
  right: 32px;
  bottom: 32px;
}
</style>
