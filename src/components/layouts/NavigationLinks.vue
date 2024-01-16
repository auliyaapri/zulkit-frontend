<script setup>
import { RouterLink, useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
        <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-regular">
            <li>
                <RouterLink to="/" :class="{ 'fw-bold text-indigo-600': router.currentRoute.value.path === '/' }"
                    class="block py-2 pl-3 pr-4 bg-transparent rounded"
                    aria-current="page">Home</RouterLink>
            </li>
            <li>
                <RouterLink to="/categories" :class="{ 'fw-bold text-indigo-600': isLinkActive('/categories') }"
                    class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-indigo-600 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                    Categories
                </RouterLink>
            </li>

            <li>
                <RouterLink to="/pricing" :class="{ 'fw-bold text-indigo-600': isLinkActive('/pricing') }"
                    class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-indigo-600 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                    pricing
                </RouterLink>
            </li>       
            <li>
                <a href="/study-case"
                    class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-indigo-600 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Study
                    Case</a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  methods: {
    isLinkActive(route) {
      return this.$route.path === route;
    },
  },
};
</script>