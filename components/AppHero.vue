<script lang="ts" setup>
const { t: $t } = useI18n({
  useScope: "local",
});
</script>
<template>
  <section class="relative">
    <div class="relative container">
      <div class="py-8 sm:pb-8 md:pb-64 lg:pt-24">
        <div class="flex flex-col md:flex-row">
          <div
            class="flex w-full flex-col items-center gap-7 md:w-1/2 md:items-start md:gap-8 md:pr-8 lg:w-2/3 lg:pr-36 2xl:pr-0"
          >
            <div class="py-4 text-orange-800 md:py-8">
              <div class="mt-12 text-2xl italic">
                {{ $t("intro") }}
                <img src="~/assets/img/cry.svg" class="inline-block h-6" />
              </div>
              <div class="text-2xl italic">{{ $t("question_start") }}</div>
              <h1 class="font-title text-6xl">
                <i18n-t keypath="title">
                  <template #alive>
                    <span class="relative inline-block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1418 125"
                        class="absolute -right-4 -bottom-6 -left-4 text-stone-700"
                      >
                        <path
                          d="M1412.29 72.17c-11.04-5.78-20.07-14.33-85.46-25.24-22.37-3.63-44.69-7.56-67.07-11.04-167.11-22.06-181.65-21.24-304.94-30.56C888.78 1.39 822.57 1.1 756.44 0c-46.63-.11-93.27 1.56-139.89 2.5C365.5 13.55 452.86 7.68 277.94 23.15 202.57 33.32 127.38 45.01 52.07 55.69c-11.23 2.41-22.63 4.17-33.71 7.22C6.1 66.33 5.64 66.19 3.89 67.79c-7.99 5.78-2.98 20.14 8.72 17.5 33.99-9.47 32.28-8.57 178.06-29.66 4.26 4.48 7.29 3.38 18.42 3.11 13.19-.32 26.38-.53 39.56-1.12 53.51-3.81 106.88-9.62 160.36-13.95 18.41-1.3 36.8-3.12 55.21-4.7 23.21-1.16 46.43-2.29 69.65-3.4 120.28-2.16 85.46-3.13 234.65-1.52 23.42.99 1.57-.18 125.72 6.9 96.61 8.88 200.92 27.94 295.42 46.12 40.87 7.91 116.67 23.2 156.31 36.78 3.81 1.05 8.28-.27 10.51-3.58 3.17-3.72 2.66-9.7-.78-13.13-3.25-3.12-8.14-3.44-12.18-5.08-17.89-5.85-44.19-12.09-63.67-16.56l26.16 3.28c23.02 3.13 46.28 3.92 69.34 6.75 10.8.96 25.43 1.81 34.34-4.39 2.26-1.54 4.86-2.75 6.21-5.27 2.76-4.59 1.13-11.06-3.59-13.68ZM925.4 23.77c37.64 1.4 153.99 10.85 196.64 14.94 45.95 5.51 91.89 11.03 137.76 17.19 24.25 4.77 74.13 11.21 101.72 18.14-11.87-1.15-23.77-1.97-35.65-3.06-133.46-15.9-266.8-33.02-400.47-47.21Z"
                          fill="currentColor"
                        ></path></svg
                      >{{ $t("title.alive") }}</span
                    >
                  </template>
                </i18n-t>
              </h1>
              <div class="mt-12 text-xl">{{ $t("outro") }}</div>
            </div>
          </div>
        </div>
        <svg class="absolute ml-14 hidden text-orange-800 md:block">
          <g>
            <line fill="none" stroke="currentColor" stroke-width="1" x1="30" y1="10" x2="30" y2="15"></line>
            <line fill="none" stroke="currentColor" stroke-width="2" x1="30" y1="20" x2="30" y2="30"></line>
            <line fill="none" stroke="currentColor" stroke-width="3" x1="30" y1="35" x2="30" y2="45"></line>
            <line fill="none" stroke="currentColor" stroke-width="3" x1="30" y1="50" x2="30" y2="136"></line>
            <line fill="none" stroke="currentColor" stroke-width="3" x1="15" y1="115" x2="30" y2="136"></line>
            <line fill="none" stroke="currentColor" stroke-width="3" x1="45" y1="115" x2="30" y2="136"></line>
          </g>
        </svg>
      </div>
    </div>
    <div
      class="clip-path group absolute inset-0 ml-auto hidden w-[400px] bg-cover bg-center bg-no-repeat md:z-20 md:block lg:w-[550px] xl:w-[650px]"
      style="background-image: url(/pig.jpg)"
    />
    <div class="mx-auto w-fit sm:mb-8 md:hidden">
      <img
        class="mx-auto max-h-96 rounded-none object-cover object-center sm:rounded-lg"
        :alt="$t('main_img_alt')"
        src="/pig.jpg"
        width="650"
      />
    </div>
  </section>
</template>
<style scoped>
.clip-path {
  clip-path: polygon(11% 0, 100% 0, 100% 100%, 0 100%);
}
</style>
<i18n lang="json">
{
  "en": {
    "intro": "Farmed animals are killed at a very young age..",
    "question_start": "If you were a farmed animal,",
    "title": "Would you still be {alive}?",
    "title.alive": "alive",
    "outro": "Let's find the answer.",
    "main_img_alt": "pig looking at the camera"
  },
  "fr": {
    "intro": "Les animaux d'élevage sont tués à un très jeune âge..",
    "question_start": "Si tu étais un animal d'élevage,",
    "title": "Serais-tu encore {alive} ?",
    "title.alive": "vivant",
    "outro": "Trouvons la réponse.",
    "main_img_alt": "cochon regardant la caméra"
  }
}
</i18n>
