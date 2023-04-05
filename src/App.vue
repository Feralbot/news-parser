<script setup>
import headerComponent from "./components/header.vue";
</script>

<template>
  <headerComponent />
  <router-view />
  <headerComponent />
</template>
