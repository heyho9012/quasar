<template>
  <q-list borderd separator>
    <q-item v-for="item in items" :key="item.id" class="items-center">
      <span class="points text-secondary">{{ item.points || 0 }}</span>
      <slot name="link" v-bind="item">
        <a
          class="text-secondary text-subtitle2"
          :href="item.url"
          target="_blank"
          >{{ item.title }}</a
        ></slot
      >
      <div class="user-item flex column">
        <small class="text-grey-5">{{ item.time_ago }} </small>
        <slot name="user" v-bind="item">
          <router-link class="text-secondary" :to="`/user/${item.user}`"
            >by {{ item.user }}</router-link
          >
        </slot>
      </div>
    </q-item>
  </q-list>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>

<style lang="scss">
.q-list .q-item {
  .points {
    margin-right: 8px;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-weight: bold;
    & + a {
      text-decoration: none;
    }
  }
  .user-item {
    background-color: transparent;
    margin: 0 0 0 auto;
    small {
      font-size: 12px;
      text-align: right;
    }
    a {
      margin-left: auto;
      font-size: 12px;
      text-decoration: none;
    }
  }
}
</style>
