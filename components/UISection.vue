<script setup lang="ts">
interface Props {
  title?: string;
}

defineProps<Props>();
</script>

<template>
  <section class="py-8">
    <div class="container">
      <h3
        v-if="title"
        class="text-4xl md:text-6xl mb-8 text-orange-950 font-handwritten"
      >
        <div>{{ title }}</div>
      </h3>
      <slot />
    </div>
  </section>
</template>
