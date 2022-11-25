<template>
  <q-header>
    <q-toolbar class="bg-secondary">
      <q-tabs align="left">
        <q-route-tab
          v-for="list in lists"
          :key="list"
          :to="`/${list}`"
          :label="list"
          active-class="text-orange text-weight-bold"
        />
      </q-tabs>
    </q-toolbar>
  </q-header>
</template>

<script setup>
const lists = ["news", "ask", "jobs"];
</script>

<style lang="scss" scoped></style>
