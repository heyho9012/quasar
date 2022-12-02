<template>
  <q-header class="row">
    <q-toolbar class="col-grow">
      <q-btn
        v-if="isLogin"
        flat
        dense
        round
        icon="menu"
        class="q-mr-sm"
        @click="drawer = !drawer"
      />
      <router-link :to="logoLink" class="text-white text-h5 text-weight-bold"
        >TIL</router-link
      >
      <span v-if="isLogin" class="block q-ml-md">by {{ username }}</span>
      <q-input
        dense
        standout
        dark
        input-class="text-right"
        class="q-ml-lg col-grow"
        v-model="text"
      >
        <template #append>
          <q-icon v-if="text == ''" name="search" />
          <q-icon
            v-else
            name="clear"
            class="cursor-pointer"
            @click="text = ''"
          />
        </template>
      </q-input>
    </q-toolbar>
    <q-toolbar class="col-auto q-ml-auto">
      <template v-if="!isLogin">
        <q-tabs>
          <q-route-tab to="/login" name="Login" label="Login" />
          <q-route-tab to="/signup" name="Signup" label="Signup" />
        </q-tabs>
      </template>
      <template v-else>
        <q-toggle
          v-model="darkMode"
          :icon="$q.dark.isActive ? 'dark_mode' : 'light_mode'"
          dark
          color="secondary"
        />
        <q-btn
          flat
          dense
          class="full-height q-px-sm"
          label="logout"
          @click="logoutUser"
        />
      </template>
    </q-toolbar>
  </q-header>
  <TheDrawer v-model="drawer" />
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useUserStore } from "stores/auth/user";
import { computed, ref, watch, watchEffect } from "vue";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";
import TheDrawer from "./TheDrawer.vue";

const { getUser: username, isLogin } = storeToRefs(useUserStore());

const router = useRouter();
const logoLink = computed(() => (isLogin ? "/main" : "/login"));

const text = ref("");

// drawer
const drawer = ref(false);

// logout
const { clearLog } = useUserStore();
const logoutUser = () => {
  clearLog();
  router.push("/login");
};

const $q = useQuasar();
const darkMode = ref($q.localStorage.getItem("dark_mode"));

watchEffect(() => {
  $q.dark.set(darkMode.value);
  $q.localStorage.set("dark_mode", darkMode.value);
});
</script>

<style lang="scss" scoped>
.q-item.q-router-link--active {
  color: $secondary;
}
</style>
