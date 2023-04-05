<template>
  <ul class="overflow-scroll h-custom" @scroll="pageScrollStore.loadmore">
    <postCardVue v-for="post in pageScrollStore.itemsOnPage" :Key="post" />
  </ul>
</template>

<script setup>
import { ref } from "vue";

import postCardVue from "../components/postCard.vue";

import { useNewsStore } from "../stores/newsStore";
import { usePageScrollStore } from "../stores/pageScrollStore";

const newsStore = useNewsStore();
const pageScrollStore = usePageScrollStore();
</script>
