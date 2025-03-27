<script setup lang="ts">
import animals from "public/animals.json";

type Props = {
  ratio: number;
};

defineProps<Props>();

const detailed = ref(false);
</script>
<template>
  <div>
    <label
      class="flex gap-2 p-2 text-sm border w-fit hover:bg-stone-500 transition-colors rounded-sm cursor-pointer bg-stone-600 text-stone-50 mb-8"
    >
      <input v-model="detailed" type="checkbox" class="cursor-pointer" />
      Show detailed version
    </label>
    <div class="flex flex-wrap gap-8">
      <AppAnimal
        v-for="animal in animals.data"
        :key="animal.key"
        :animal
        :ratio
        :detailed
      />
    </div>
  </div>
</template>
