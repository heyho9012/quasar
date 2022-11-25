<template>
  <q-list class="row">
    <q-item
      v-for="post in posts"
      :key="post._id"
      class="col-12 col-sm-6 col-md-4 col-lg-3"
    >
      <q-item-section>
        <q-card class="my-card bg-secondary text-white">
          <q-card-section>
            <div class="text-h5 text-weight-bold">{{ post.title }}</div>
          </q-card-section>
          <q-card-section>
            <div class="text-subtitle1">{{ post.contents }}</div>
            <div class="created-at">{{ post.createdAt }}</div>
          </q-card-section>
          <q-separator dark />
          <q-card-actions class="flex">
            <q-btn
              icon="edit"
              flat
              class="q-ml-auto"
              @click="routerEditPage(post._id)"
            />
            <q-btn
              icon="delete"
              flat
              class="q-ml-sm"
              @click="deleteItem(post._id)"
            />
          </q-card-actions>
        </q-card>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { usePostStore } from "stores/posts/post";
import { deletePost } from "src/api/posts";

const router = useRouter();
const emit = defineEmits(["refresh"]);

const { getPost: posts } = storeToRefs(usePostStore());

const routerEditPage = (id) => {
  router.push(`/post/${id}`);
};

const deleteItem = async (id) => {
  try {
    const response = await deletePost(id);
    console.log(response);
    emit("refresh");
  } catch (error) {
    console.log(error);
  }
};
</script>

<style lang="scss" scoped>
.created-at {
  text-align: right;
  font-size: 12px;
}
</style>
