<script setup>
// Import fungsi defineProps dari Vue untuk mendefinisikan properti
import { defineProps } from 'vue';
// Import komponen RouterLink dari Vue Router
import { RouterLink } from 'vue-router';

// Mendefinisikan properti komponen menggunakan defineProps
const props = defineProps(['id','title', 'image', 'description']);
</script>

<template>
    <!-- Container dengan kelas CSS untuk mengatur lebar dan margin -->
    <div class="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
        <!-- Elemen div dengan properti gaya CSS untuk border dan border-radius -->
        <div class="overflow-hidden border border-gray-200 rounded-xl">
            <!-- Menggunakan RouterLink untuk membuat tautan ke rute '/product/' + image -->
            <RouterLink :to="'/product/' + image">
                <!-- Elemen div dengan properti gaya CSS lainnya -->
                <div class="m-4 overflow-hidden rounded-xl">
                    <!-- Elemen gambar dengan sumber dari properti image -->
                    <img alt="Placeholder" class="block w-full h-auto" :src="image" />
                </div>
            </RouterLink>

            <!-- Elemen header dengan properti gaya CSS untuk padding dan margin -->
            <header class="px-4 mb-4 leading-tight">
                <!-- Elemen heading level 1 dengan properti gaya CSS untuk ukuran teks -->
                <h1 class="text-lg">
                    <!-- Menggunakan RouterLink untuk membuat tautan ke rute '/product/' + id -->
                    <RouterLink class="font-semibold text-black no-underline hover:underline" :to="'/product/' + id">
                        <!-- Menampilkan nilai properti title -->
                        {{ title }}
                    </RouterLink>
                </h1>
                <!-- Elemen span dengan beberapa properti gaya CSS -->
                <span class="block text-sm font-light text-gray-500 no-underline">
                    <!-- Menampilkan nilai properti description -->
                    {{ description }}
                </span>
            </header>
        </div>
    </div>
</template>
