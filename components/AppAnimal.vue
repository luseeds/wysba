<script setup lang="ts">
import { filename } from "pathe/utils";
import { HUMAN_LIFE_EXPECTANCY } from "~/stores/user";

type Props = {
  ratio: number;
  detailed?: boolean;
  animal: {
    name: string;
    lifespan: string;
    slaughter: string;
    ratio: number;
    key: string;
  };
};
const props = defineProps<Props>();
const isAlive = computed(() => props.ratio <= props.animal.ratio);

const glob: Record<string, { default: string }> = import.meta.glob(
  "@/assets/img/animals/*.svg",
  { eager: true }
);
const images = Object.fromEntries(
  Object.entries(glob).map(([key, value]) => [filename(key), value.default])
);
</script>
<template>
  <div
    class="font-handwritten bg-stone-100 text-stone-950 group flex w-80 max-w-full rounded-sm p-2"
  >
    <div class="flex px-2 relative">
      <img
        :src="images[animal.key]"
        :alt="`Image of ${animal.name}`"
        class="mx-auto w-16 max-h-14 my-auto"
      />
      <div
        v-if="!isAlive"
        class="absolute left-1/2 top-1/2 transform -translate-1/2 -translate-y-2/3 text-9xl text-rose-900/80"
      >
        x
      </div>
    </div>
    <div class="flex-1 px-2 my-auto">
      <div class="text-2xl">
        {{ animal.name }}
      </div>
      <div
        class="flex h-8 border-2 flex-wrap border-stone-950 rounded-sm text-stone-50"
        :class="[isAlive ? 'bg-lime-600' : 'bg-rose-900']"
      >
        <div
          class="h-full bg-amber-400"
          :style="{ width: `${animal.ratio}%` }"
        ></div>
        <div class="ml-2">{{ animal.slaughter }}</div>
        <div class="ml-auto mr-2">{{ animal.lifespan }}</div>
      </div>
      <div v-if="detailed">
        <div>
          {{
            ((animal.ratio * HUMAN_LIFE_EXPECTANCY) / 100)
              .toFixed(1)
              .replace(/\.0$/, "")
          }}
          human years
        </div>
        <div>{{ animal.ratio.toFixed(2) }}% of their normal lifespan</div>
      </div>
    </div>
  </div>
</template>
