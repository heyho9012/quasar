<template>
  <q-footer>
    <q-toolbar class="row flex-center">
      <q-btn class="col-auto" flat dense icon="delete" @click="clearAllTodo" />
    </q-toolbar>
  </q-footer>
</template>

<script setup>
import { useTodoItemStore } from "../stores/todo";

const { setClearAll } = useTodoItemStore();
const clearAllTodo = () => {
  setClearAll();
};
</script>

<style lang="scss" scoped></style>
