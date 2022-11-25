<template>
  <q-page>
    <q-list>
      <q-item
        v-for="(todoItem, index) in todoItems"
        :key="index"
        clickable
        v-ripple
      >
        <q-item-section>
          <q-checkbox
            v-model="todoItem.completed"
            class="text-weight-bold text-subtitle1"
            :class="{ 'text-strike': todoItem.completed }"
            :label="todoItem.content"
            keep-color
            color="orange"
            @click="setToggleOneItem({ todoItem, index })"
          />
        </q-item-section>
        <q-item-section class="col-auto">
          <q-btn
            flat
            dense
            icon="delete"
            color="orange"
            @click="setRemoveOneItem({ todoItem, index })"
          />
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { computed } from "vue";
import { useTodoItemStore } from "../stores/todo";

const { getTodoItem: todoItems } = useTodoItemStore();
const { setToggleOneItem, setRemoveOneItem } = useTodoItemStore();
</script>

<style lang="scss" scoped></style>
