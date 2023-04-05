import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const usePageScrollStore = defineStore("pageScrollStore", () => {
  const page = ref(1);
  const itemsPerPage = ref(4);
  const loading = ref(false);
  const itemsOnPage = computed(() => page.value * itemsPerPage.value);
  const loadmore = (e) => {
    let { scrollTop, clientHeight, scrollHeight } = e.target;
    if (!loading.value && scrollTop + clientHeight >= (scrollHeight * 4) / 5) {
      loading.value = true;
      setTimeout(() => {
        page.value++;
        loading.value = false;
      }, 1000);
    }
    console.log(e);
  };
  return {
    page,
    itemsPerPage,
    loading,
    itemsOnPage,
    loadmore,
  };
});
