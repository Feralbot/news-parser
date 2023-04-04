<template>
  <div v-for="post in newsStore.news" :Key="post">{{ post.title }}</div>
</template>

<script setup>
import { ref } from "vue";
import { useNewsStore } from "../stores/newsStore";
const newsStore = useNewsStore();
</script>
