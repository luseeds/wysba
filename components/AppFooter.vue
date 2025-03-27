<template>
  <footer class="bg-stone-300 text-orange-950 py-8">
    <div class="container">
      <div class="text-4xl font-title">WYSBA?</div>
      <NuxtLink
        to="https://luseeds.com"
        class="flex group items-end shrink-0 md:ml-auto gap-2"
      >
        <span class="text-base font-sans"
          >A project by
          <span class="underline group-hover:text-orange-800"
            >luseeds</span
          ></span
        >
        <img src="/luseeds-logo.png" alt="luseeds logo" class="h-8" />
      </NuxtLink>
      The source code is available
      <NuxtLink
        to="https://github.com/luseeds/wysba"
        class="underline hover:text-orange-800"
        >on GitHub</NuxtLink
      >.
      <div class="text-xs mt-8">
        Animals illustration by
        <a
          href="https://www.freepik.com/free-vector/farm-animals-set_3977258.htm"
          class="underline hover:text-orange-800"
          >Freepik</a
        >
        and the pig image is from
        <a
          href="https://unsplash.com/photos/white-pig-on-brown-soil-Y06imaOLycY"
          class="underline hover:text-orange-800"
          >Dan Renco on Unsplash</a
        >.
      </div>
    </div>
  </footer>
</template>
