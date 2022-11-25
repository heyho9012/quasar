<template>
  <div class="text-h5 text-center text-primary q-mb-lg text-weight-bold">
    Create Post
  </div>
  <q-form class="q-col-gutter-y-xl" @submit.prevent="submitForm">
    <q-input v-model.trim="title" label="title" filled clearable />
    <q-input
      type="textarea"
      label="contents"
      ref="contentsRef"
      v-model="contents"
      hint="Content length must be less than 250"
      error-message="Content length must be less than 250"
      filled
      clearable
      :rules="[(val) => val && val.length <= 250]"
    />
    <div class="btn-wrap flex">
      <q-btn
        class="q-ml-auto"
        color="primary"
        round
        type="submit"
        icon="create"
      />
    </div>
  </q-form>
  <p class="text-h6 text-negative text-weight-bold">{{ logMessage }}</p>
</template>

<script setup>
import { ref, unref } from "vue";
import { createPost } from "src/api/posts";
import { useRouter } from "vue-router";

const router = useRouter();

const title = ref("");
const contents = ref("");
const contentsRef = ref(null);
const logMessage = ref("");

const submitForm = async () => {
  const postData = {
    title: unref(title),
    contents: unref(contents),
  };
  try {
    const response = await createPost(postData);
    console.log(response, "<<<");
    router.push("/main");
  } catch (error) {
    console.log(error);
    logMessage.value = error.response.data.message;
  }
};
</script>
