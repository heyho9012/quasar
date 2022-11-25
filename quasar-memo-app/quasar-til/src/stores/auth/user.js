import {
  getAuthFromCookie,
  getUserFromCookie,
  saveAuthToCookie,
  saveUserToCookie,
  deleteCookie,
} from "src/utils/cookies";
import { loginUser } from "src/api/auth";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    username: getUserFromCookie() || "",
    token: getAuthFromCookie() || "",
  }),
  getters: {
    getUser() {
      return this.username;
    },
    getToken() {
      return this.token;
    },
    isLogin() {
      return this.username !== "";
    },
  },
  actions: {
    async FETCH_LOGIN(payload) {
      const { data } = await loginUser(payload);
      this.username = data.user.username;
      this.token = data.token;

      // cookie setup
      saveUserToCookie(data.user.username);
      saveAuthToCookie(data.token);
    },
    clearLog() {
      deleteCookie("til_user");
      deleteCookie("til_auth");
      this.username = "";
      this.token = "";
    },
  },
});
