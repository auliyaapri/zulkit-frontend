<script setup>
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps(['title', 'image', 'count','id']);


</script>

<template>
  <div class="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
    <div class="overflow-hidden border border-gray-200 rounded-xl">
      <RouterLink :to="{ name: 'category-items', params: { id: id } }">
        <div class="m-4 overflow-hidden rounded-xl">
          <img :alt="title" class="block w-full h-auto" :src="image" />
        </div>
      </RouterLink>
      <header class="px-4 mb-4 leading-tight">
        <h1 class="text-lg">
          <RouterLink class="font-semibold text-black no-underline" :to="{ name: 'category-items', params: { id: id } }">
            {{ title }}
          </RouterLink>
        </h1>
        <span class="block text-sm font-light text-gray-500 no-underline">
          {{ count }} Items
        </span>
      </header>
    </div>
  </div>
</template>
