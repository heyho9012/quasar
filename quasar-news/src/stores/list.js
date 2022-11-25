import { defineStore } from "pinia";
import { fetchList } from "src/api";

export const useListStore = defineStore("list", {
  state: () => ({
    list: [],
  }),
  getters: {
    getList() {
      return this.list;
    },
  },
  actions: {
    async FETCH_LIST(payload) {
      const response = await fetchList(payload);
      console.log(response);
      this.list = response.data;
      return response;
    },
  },
});
