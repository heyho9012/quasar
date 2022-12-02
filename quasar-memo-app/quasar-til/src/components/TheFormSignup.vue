<template>
  <q-form @submit.prevent="submitForm" class="q-pa-md q-col-gutter-y-lg">
    <q-input
      filled
      label="id"
      type="mail"
      hint="Email"
      v-model="username"
      ref="nameRef"
      lazy-rules
      :rules="useMailRules"
      error-message="Invalid email address."
      label-color="deep-orange"
      color="deep-orange"
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
      counter
    >
      <template v-slot:append>
        <q-icon
          :name="isVisibility"
          class="cursor-pointer"
          @click="isPwd = !isPwd"
        />
      </template>
    </q-input>
    <q-input label="nickname" hint="nickname" v-model="nickname" filled />
    <div class="flex flex-center">
      <span
        class="text-subtitle1"
        :class="{ 'text-negative': error, 'text-primary': !error }"
        >{{ logMessage }}</span
      >
      <q-btn label="login" to="/login" class="q-ml-auto" />
      <q-btn label="signup" type="submit" class="q-ml-md" />
    </div>
  </q-form>
</template>

<script setup>
import { computed, ref, unref } from "vue";
import { registerUser } from "src/api/auth";
import { useMailRules } from "src/composables/validation";

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
const nickname = ref("");
const logMessage = ref("");
const error = ref(false);

// submit signup form
const submitForm = async () => {
  try {
    const user = {
      username: unref(username),
      password: unref(password),
      nickname: unref(nickname),
    };
    const response = await registerUser(user);
    error.value = false;
    logMessage.value = `${response.data.username} 🥳`;
    nameRef.value.resetValidation();
    pwdRef.value.resetValidation();
    initForm();
  } catch (err) {
    console.log(err);
    error.value = true;
    logMessage.value = `${err.response.status} ${err.response.statusText}`;
  }
};

// init form
const initForm = () => {
  username.value = "";
  password.value = "";
  nickname.value = "";
};
</script>

<style lang="scss" scoped>
.q-form {
  margin: 40px auto 0;
  width: 400px;
}
</style>
