<script setup>
import { onMounted, computed } from 'vue';
import { useUserStore } from "@/stores/user";

import Logo from './Logo.vue';
import NavigationLinks from "./NavigationLinks.vue";
import UserInfo from "./UserInfo.vue";
import AuthButtonVue from "./AuthButton.vue";

// Dapatkan instance dari toko "User"
const userStore = useUserStore();
// Gunakan computed untuk mendapatkan nilai getter dari toko "User"
const user = computed(() => userStore.getUser);
const isLoggedIn = computed(() => userStore.isLoggedIn);


// Callback yang dijalankan setelah komponen dimount (created dalam kasus komponen setup)
onMounted(() => {
  // Lakukan sesuatu setelah komponen dimount
  // Contoh: Memanggil fetchUser untuk mengambil informasi pengguna
  userStore.fetchUser();
});
</script>

<template>
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
        <div class="container flex flex-wrap items-center justify-between mx-auto my-2">
            <Logo />
            <AuthButtonVue v-if="!isLoggedIn" />
            <UserInfo v-else :user="user.data"/>
            <NavigationLinks />
        </div>
    </nav>
</template>