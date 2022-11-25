<template>
  <div class="text-h5 text-center text-primary q-mb-lg text-weight-bold">
    Edit Post
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
    ></q-input>
    <div class="btn-wrap flex">
      <q-btn
        class="q-ml-auto"
        color="primary"
        round
        type="submit"
        icon="create"
      >
        <!-- <q-spinner color="white" size="1em" /> -->
      </q-btn>
    </div>
  </q-form>
  <p class="text-h6 text-negative text-weight-bold">{{ logMessage }}</p>
</template>

<script setup>
import { ref, unref } from "vue";
import { editPost, fetchPost } from "src/api/posts";
import { useRoute, useRouter } from "vue-router";
import { usePostStore } from "src/stores/posts/post";
import { storeToRefs } from "pinia";

const router = useRouter();
const route = useRoute();

const { getPost: posts } = storeToRefs(usePostStore());
const data = posts.value.find((x) => x._id == route.params.id);
// const { data } = fetchPost(route.params.id);

const title = ref(data.title);
const contents = ref(data.contents);
const logMessage = ref("");

const submitForm = async () => {
  try {
    const postData = {
      title: unref(title),
      contents: unref(contents),
    };
    const response = await editPost(route.params.id, postData);
    console.log(response);
    router.push("/main");
  } catch (error) {
    console.log(error);
    // logMessage.value = error.response.data.message;
  }
};
</script>

<style lang="scss" scoped></style>
