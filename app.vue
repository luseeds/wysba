<template>
  <div class="bg-stone-50 max-w-600 mx-auto">
    <AppHeader />
    <AppHero />
    <AppResults />
    <AppExplanation />
    <AppShare />
    <footer class="bg-stone-300 text-orange-950 py-8">
      <div class="container flex items-baseline">
        <div class="text-4xl font-title">WYSBA?</div>
        <NuxtLink
          to="https://luseeds.com"
          class="flex group items-end ml-auto gap-2"
        >
          <span class="text-base font-sans"
            >A project by
            <span class="underline group-hover:text-orange-800"
              >luseeds</span
            ></span
          >
          <img src="/luseeds-logo.png" alt="luseeds logo" class="h-10" />
        </NuxtLink>
      </div>
    </footer>
  </div>
</template>
<style>
body {
  background: var(--color-stone-50);
}
</style>
