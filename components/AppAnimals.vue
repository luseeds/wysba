<script setup lang="ts">
import animals from "public/animals.json";

const { t: $t } = useI18n({
  useScope: "local",
});

type Props = {
  ratio: number;
};

defineProps<Props>();

const detailed = ref(false);
</script>
<template>
  <div>
    <label
      class="mb-8 flex w-fit cursor-pointer gap-2 rounded-sm border bg-stone-600 p-2 text-sm text-stone-50 transition-colors hover:bg-stone-500"
    >
      <input v-model="detailed" type="checkbox" class="cursor-pointer" />
      {{ $t("detailed") }}
    </label>
    <div class="flex flex-wrap gap-8">
      <AppAnimal v-for="animal in animals.data" :key="animal.key" :animal :ratio :detailed />
    </div>
  </div>
</template>
<i18n lang="json">
{
  "en": {
    "detailed": "Show detailed version"
  },
  "fr": {
    "detailed": "Voir la version détaillée"
  }
}
</i18n>
