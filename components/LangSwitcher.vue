<script setup>
const { locale, locales, setLocale } = useI18n();

// const availableLocales = computed(() =>
//   locales.value.filter((i) => i.code !== locale.value)
// );
</script>

<template>
  <div class="flex gap-2">
    <a
      v-for="l in locales"
      :key="l.code"
      href="#"
      class="px-3 py-1 rounded-sm"
      :class="[
        l.code === locale
          ? 'bg-orange-900 text-orange-50 hover:cursor-default'
          : 'text-orange-950 hover:text-orange-700 bg-stone-50',
      ]"
      @click.prevent.stop="setLocale(l.code)"
    >
      {{ l.name }}
    </a>
  </div>
</template>
