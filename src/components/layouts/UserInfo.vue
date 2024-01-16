<script setup>
const props = defineProps({
    user:Object
    
});
</script>
<template>
    <div class="md:order-2">
        <div class="flex items-center">
            <div class="mr-1" style="display:flex; align-items: center;">
                <span>Halo, {{ user.name }}</span>
            </div>
            <button type="button"
                class="flex mx-1 text-sm bg-gray-800 rounded-full md:m-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                id="user-menu-button"
                aria-expanded="false"
                data-dropdown-toggle="dropdown">
                <span class="sr-only">Open user menu</span>
                <img
                    class="w-8 h-8 rounded-full"
                    :src="user.profile_photo_url"
                    alt="user photo"/>
            </button>
        </div>
        <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown">
            <div class="py-1">
                <span class="block px-4 py-3">
                    <span class="block text-sm text-gray900 dark:text-white">{{ user.name }}</span>
                    <span class="text-xs font-semibold tracking-wide uppercase regular dark:text-gray600">@{{ user.email }}</span>
                </span>
            </div>
            <ul class="py1" aria-labelledby="dropdown">
                <li>
                    <a href="#" class="block px4 py2 text-sm textgray700 hover:bggray100 dark:hover:bggray600 dark:textgray200 dark:hover:textwhite">Subscriptions</a>
                </li>
                <!-- Tambahkan lebih banyak opsi di sini -->
            </ul>
        </div>
    </div>
</template>



