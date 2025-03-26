<script setup lang="ts">
import animals from "public/animals.json";

type Props = {
  ratio: number;
};

defineProps<Props>();
</script>
<template>
  <div class="flex flex-wrap gap-8">
    <AppAnimal
      v-for="animal in animals.data"
      :key="animal.key"
      :animal
      :ratio
    />
  </div>
</template>
