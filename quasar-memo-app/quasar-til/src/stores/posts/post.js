import { defineStore } from "pinia";
import { ref } from "vue";
import { Loading } from "quasar";
import { fetchPost } from "src/api/posts";

const options = {
  message: "loading...",
  spinnerSize: "100px",
  spinnerColor: "secondary",
  messageColor: "secondary",
  backgroundColor: "transparent",
};

const usePostStore = defineStore("post", {
  state: () => ({
    posts: ref([]),
  }),
  getters: {
    getPost() {
      return this.posts;
    },
  },
  actions: {
    setPosts(payload) {
      this.posts = payload;
    },
    async FETCH_POST() {
      try {
        Loading.show(options);
        const response = await fetchPost();
        this.posts = response.data.posts;
        setTimeout(() => Loading.hide(), 300);
      } catch (error) {
        console.log(error);
      }
    },
  },
});

export { usePostStore };
