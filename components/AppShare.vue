<script setup lang="ts">
const { t: $t } = useI18n({
  useScope: "local",
});
</script>
<template>
  <UISection :title="$t('title')" class="bg-stone-200 py-24">
    <div class="max-w-prose">
      <p>{{ $t("intro") }}</p>
      <p>
        {{ $t("education") }}
      </p>

      <div class="mt-8">
        <i18n-t keypath="data">
          <template #file>
            <NuxtLink
              to="/animals.json"
              external
              class="underline hover:text-orange-800"
              >{{ $t("data_file") }}</NuxtLink
            >
          </template> </i18n-t
        >{{ " " }}
        <i18n-t keypath="source">
          <template #source>
            <NuxtLink
              to="https://www.farmtransparency.org/kb/food/abattoirs/age-animals-slaughtered"
              class="underline hover:text-orange-800"
              >{{ $t("source_link") }}</NuxtLink
            >
          </template>
        </i18n-t>
      </div>
    </div>
  </UISection>
</template>
<i18n lang="json">
{
  "en": {
    "title": "Share",
    "intro": "Feel free to share this website.",
    "education": "Education is super important nowadays. That's why sharing knowledge is key.",
    "data": "If you want to share the data, a {file}.",
    "data_file": "JSON file is available",
    "source": "For more information you can see {source}.",
    "source_link": "the source here"
  },
  "fr": {
    "title": "Partager",
    "intro": "N'hésite pas à partager ce site web.",
    "education": "L'éducation est super importante de nos jours. C'est pourquoi partager des connaissances est essentiel.",
    "data": "Si tu veux partager les données, un {file}.",
    "data_file": "fichier JSON est disponible",
    "source": "Pour plus d'informations, tu peux consulter {source} (en anglais).",
    "source_link": "la source ici"
  }
}
</i18n>
