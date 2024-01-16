import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    user: false,
  }),
  getters: {
    isLoggedIn: (state) => state.user !== false,
    getUser: (state) => state.user,
  },
  actions: {
    async fetchUser() {
      try {
        const tokenType = localStorage.getItem('token_type');
        const accessToken = localStorage.getItem('access_token');
        if (!tokenType || !accessToken) {
          console.error("Token tidak ditemukan di localStorage");
          this.user = false;
          return;
        }
        const { data } = await axios.get('https://zullkit-backend.demo.belajarkoding.com/api/user', {
          headers: {
            Authorization: `${tokenType} ${accessToken}`,
          },
        });
        this.user = data;
      } catch (error) {
        console.error("Error fetching user:", error.response);
        this.user = false;
      }
    },
  },
});
