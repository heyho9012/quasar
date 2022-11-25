import { defineStore } from "pinia";
import { fetchCommentItem } from "src/api";

export const useItemStore = defineStore("item", {
  state: () => ({
    item: [],
  }),
  getters: {
    getItem() {
      return this.item;
    },
  },
  actions: {
    async FETCH_ITEM(payload) {
      const response = await fetchCommentItem(payload);
      console.log(response);
      this.item = response.data;
      return response;
    },
  },
});
