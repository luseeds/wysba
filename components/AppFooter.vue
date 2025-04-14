<script setup lang="ts">
const { t: $t } = useI18n({
  useScope: "local",
});
</script>
<template>
  <footer class="bg-stone-300 py-8 text-orange-950">
    <div class="container">
      <img src="/logo.png" class="mb-4 w-60" alt="WYSBA?" />
      <!-- <div class="text-4xl font-title">WYSBA?</div> -->
      <NuxtLink to="https://luseeds.com" class="group flex shrink-0 items-end gap-2 md:ml-auto">
        <span class="font-sans text-base">
          {{ $t("project_by") }}
          <span class="underline group-hover:text-orange-800">luseeds</span></span
        >
        <img src="/luseeds-logo.png" alt="luseeds logo" class="h-8" />
      </NuxtLink>
      <i18n-t keypath="github">
        <template #github>
          <NuxtLink to="https://github.com/luseeds/wysba" class="underline hover:text-orange-800">{{
            $t("github_text")
          }}</NuxtLink>
        </template>
      </i18n-t>
      <div class="mt-8 text-xs">
        <i18n-t keypath="attributions">
          <template #freepik>
            <a
              href="https://www.freepik.com/free-vector/farm-animals-set_3977258.htm"
              class="underline hover:text-orange-800"
              >Freepik</a
            >
          </template>
          <template #unsplash>
            <a
              href="https://unsplash.com/photos/white-pig-on-brown-soil-Y06imaOLycY"
              class="underline hover:text-orange-800"
              >Dan Renco on Unsplash</a
            >
          </template>
        </i18n-t>
      </div>
    </div>
  </footer>
</template>

<i18n lang="json">
{
  "en": {
    "project_by": "A project by",
    "github": "The source code is available {github}",
    "github_text": "on GitHub",
    "attributions": "Animals illustration by {freepik}, and the pig photo is by {unsplash}"
  },
  "fr": {
    "project_by": "Un projet de",
    "github": "Le code source est disponible {github}",
    "github_text": "sur GitHub",
    "attributions": "Illustration des animaux par {freepik}, et la photo du cochon est de {unsplash}"
  }
}
</i18n>
