// ================ YANG LAMA ================
  // import { ref, computed } from 'vue'
  // import { defineStore } from 'pinia'

  // export const useCounterStore = defineStore('counter', () => {
  //   const count = ref(0)
  //   const doubleCount = computed(() => count.value * 2)
  //   function increment() {
  //     count.value++
  //   }

  //   return { count, doubleCount, increment }
  // })
// ================ YANG LAMA ================



// stores/counter.js
// Mengimport fungsi defineStore dari Pinia untuk membuat toko (store)
import { defineStore } from 'pinia';

// Mendefinisikan toko "Counter" menggunakan Pinia
export const useCounterStore = defineStore({
  // Setiap toko memiliki ID unik untuk diidentifikasi
  id: 'counter',
  
  // Mendefinisikan state dari toko "Counter"
  state: () => ({
    counter: 0, // State berupa hitungan, dimulai dari 0
  }),
  
  // Mendefinisikan getter "doubleCount" untuk menghitung dua kali lipat dari counter
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  
  // Mendefinisikan action "increment" untuk menambahkan nilai counter
  actions: {
    increment() {
      this.counter++; // Menambah nilai counter saat action dipanggil
    },
  },
});
