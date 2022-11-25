<template>
  <q-layout view="lHh Lpr lFf">
    <TodoHeader />
    <q-page-container>
      <TodoList />
    </q-page-container>
    <TodoFooter />
  </q-layout>
</template>

<script setup>
import TodoHeader from "components/TodoHeader.vue";
import TodoFooter from "components/TodoFooter.vue";
import TodoList from "./components/TodoList.vue";
</script>

<style lang="scss" scoped></style>
