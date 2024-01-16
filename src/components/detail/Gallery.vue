<script setup>
  // Mengimpor fungsi ref dari Vue
  import { ref } from "vue";
  
  // Mendefinisikan properti komponen menggunakan defineProps
  const props = defineProps(['defaultImage','galleries']);

  // Ini artinya bikin data baru dengan nama "thumbnail"
  const thumbnail = ref(props.defaultImage)

  function changeImage(image) {
    // Menggunakan thumbnail.value untuk mengubah nilai reactive reference
    thumbnail.value = image
  }
</script>

<template>
    <section id="gallery">
        <img :src="`${thumbnail}`" alt="" class="w-full mt-6 rounded-2xl" />
        <div class="grid grid-cols-4 gap-4 mt-4">
            <template v-for="gallery in galleries" :key="gallery.id">
                <div @click="changeImage(gallery.url)" class="overflow-hidden cursor-pointer rounded-2xl" :class="{ 'ring-2 ring-indigo-500': thumbnail === gallery.url }">
                    <img :src="`${gallery.url}`" class="w-full" alt="" />    
                </div>
            </template>
                    
        </div>
    </section>
</template>
