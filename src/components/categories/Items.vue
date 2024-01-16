<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import ItemsCard from "../layouts/ItemsCard.vue";
import { useRoute } from "vue-router";

const items = ref([]);
const category = ref({})
const route = useRoute();

async function getItemsData() {
  try {
    const response = await axios.get('https://zullkit-backend.demo.belajarkoding.com/api/categories?id='+ route.params.id +'&show_products=1')
    items.value = response.data.data.products
    category.value = response.data.data
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

onMounted(() => {
  getItemsData()
})
</script>

<template>


<div class="container px-4 mx-auto my-16 md:px-12">

<h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">{{ category.name }}</h2>
<div class="flex flex-wrap -mx-1 lg:-mx-4">
    <ItemsCard
        v-for="item in items"
        :id = "item.id"
        :key="item.id"
        :title="item.name"
        :description="item.subtitle"
        :image="item.thumbnails"
      />
</div>
</div>
</template>


   

