<template>
  <q-banner class="bg-secondary text-white" inline-actions v-if="banner">
    <template #avatar>
      <q-icon name="signal_wifi_off" size="sm" class="self-center" />
    </template>
    <template #default> 서버에 연결되지 않았습니다. </template>
    <template #action>
      <q-btn flat color="white" label="확인" @click="banner = false" />
    </template>
  </q-banner>
  <q-form @submit.prevent="submitForm" class="q-pa-md q-col-gutter-y-lg">
    <q-input
      filled
      label="id"
      hint="Email"
      v-model="username"
      ref="nameRef"
      lazy-rules
      :rules="useMailRules"
      error-message="Invalid email address."
    />
    <q-input
      filled
      label="password"
      :type="isType"
      hint="Password with toggle"
      v-model="password"
      ref="pwdRef"
      lazy-rules
      :rules="[(val) => val && val.length >= 8]"
      error-message="The password must have at least 8 characters."
    >
      <template v-slot:append>
        <q-icon
          :name="isVisibility"
          class="cursor-pointer"
          @click="isPwd = !isPwd"
        />
      </template>
    </q-input>
    <div class="flex flex-center">
      <span class="text-negative text-weight-bold">{{ logMessage }}</span>
      <q-btn label="login" type="submit" class="q-ml-auto" />
    </div>
  </q-form>
</template>

<script setup>
import { computed, ref, unref } from "vue";
import { useUserStore } from "stores/auth/user";
import { useMailRules } from "src/composables/validation";
import { useRouter } from "vue-router";

// input options
const isPwd = ref(true);
const isType = computed(() => (isPwd.value ? "password" : "text"));
const isVisibility = computed(() =>
  isPwd.value ? "visibility_off" : "visibility"
);
const username = ref("");
const nameRef = ref(null);
const password = ref("");
const pwdRef = ref(null);
const logMessage = ref("");

const banner = ref(false);

// submit signup form
const { FETCH_LOGIN } = useUserStore();
const router = useRouter();

const submitForm = async () => {
  try {
    const user = {
      username: unref(username),
      password: unref(password),
    };
    const response = await FETCH_LOGIN(user);
    console.log(response);
    nameRef.value.resetValidation();
    pwdRef.value.resetValidation();
    router.push("/main");
  } catch (error) {
    banner.value = true;
    console.log(error);
    logMessage.value = error;
  }
};
</script>

<style lang="scss" scoped>
.q-form {
  margin: 40px auto 0;
  width: 400px;
}
</style>
