<script setup lang="ts">
import MainNavbar from './components/navbar/MainNavbar.vue'
import MainFooter from './components/footer/MainFooter.vue'
</script>

<template>
  <main-navbar />
  <router-view />
  <main-footer />
</template>
