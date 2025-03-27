<script setup lang="ts">
const store = useUserStore();
const ratio = computed(() => store.ratio);
</script>
<template>
  <UISection class="bg-stone-700 py-20 md:pt-28">
    <AppAge />
    <AppAnimals :ratio />
  </UISection>
</template>
