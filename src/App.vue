<script setup>
import headerComponent from "./components/header.vue";
import loader from "./components/loader.vue";
import { usePageScrollStore } from "./stores/pageScrollStore";
const pageScrollStore = usePageScrollStore();
</script>

<template>
  <headerComponent />
  <router-view />
  <loader
    v-if="pageScrollStore.loading"
    class="absolute h-screen top-0 opacity-50 w-screen"
  />
</template>
