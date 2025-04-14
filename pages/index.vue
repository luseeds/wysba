<script setup>
const { t: $t } = useI18n({
  useScope: "local",
});

definePageMeta({
  title: "title",
});
useSeoMeta({
  title: $t("title"),
  ogTitle: $t("title"),
  description: $t("description"),
  ogDescription: $t("description"),
  ogImage: $t("ogImage"),
});
</script>
<template>
  <div class="bg-stone-50 max-w-600 mx-auto">
    <AppHeader />
    <AppHero />
    <AppResults />
    <AppExplanation />
    <AppShare />
    <AppFooter />
  </div>
</template>
<i18n lang="json">
{
  "en": {
    "title": "Would you still be alive? - WYSBA",
    "description": "Farmed animals are killed at a very young age.. if you were one, discover if you would still be alive?",
    "ogImage": "/og_image.png"
  },
  "fr": {
    "title": "Serais-tu encore vivant ? - WYSBA",
    "description": "Les animaux d'élevage sont tués à un très jeune âge.. si tu en étais un, découvre si tu serais encore vivant ?",
    "ogImage": "/og_image-fr.png"
  }
}
</i18n>
