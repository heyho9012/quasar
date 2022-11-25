import { defineStore } from "pinia";
import { fetchUserInfo } from "src/api";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: [],
  }),
  getters: {
    getUser() {
      return this.user;
    },
  },
  actions: {
    async FETCH_USER(payload) {
      const response = await fetchUserInfo(payload);
      console.log(response);
      this.user = response.data;
      return response;
    },
  },
});
