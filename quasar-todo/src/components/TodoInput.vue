<template>
  <q-input dark dense standout v-model="newTodoItem" class="col-grow q-px-md">
    <template #append>
      <q-icon v-if="newTodoItem === ''" name="search" />
      <q-icon
        v-else
        name="clear"
        class="cursor-pointer"
        @click="newTodoItem = ''"
      />
    </template>
  </q-input>
  <div>
    <q-btn class="col-auto" flat dense icon="add" @click="addTodo" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useTodoItemStore } from "stores/todo";

const newTodoItem = ref("");
const addTodo = () => {
  if (newTodoItem.value != "") {
    const { setAddOneItem } = useTodoItemStore();
    setAddOneItem(newTodoItem.value);
    newTodoItem.value = "";
  } else {
    // show.value = true;
  }
};
</script>

<style lang="scss" scoped></style>
