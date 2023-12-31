<script setup>
import { RouterView } from "vue-router";
// import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/layouts/Navbar.vue'

</script>

<template>
  <Navbar/>
  <RouterView />
</template>

<style>
@import "assets/css/styles.css";
</style>
