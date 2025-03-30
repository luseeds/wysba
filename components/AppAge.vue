<script setup lang="ts">
import { HUMAN_LIFE_EXPECTANCY } from "~/stores/user";

const store = useUserStore();
const age = computed(() => store.age);
const ratio = computed(() => store.ratio);

function onInput(event: Event) {
  const newAge = parseFloat((event.target as HTMLInputElement).value);
  store.setAge(newAge);
}
</script>
<template>
  <div class="text-orange-50">
    <div class="mb-12">
      <div class="font-handwritten text-3xl md:text-5xl">
        I am
        <input
          :value="age"
          type="number"
          min="0"
          step="0.5"
          class="input-age font-handwritten text-center border-0 border-b-2 hover:bg-stone-500 focus:bg-stone-500 bg-stone-600 border-orange-50 w-20 md:w-32 text-5xl focus:outline-0"
          placeholder="   ?"
          @input="onInput"
        />
        {{ age ?? 0 > 1 ? "years" : "year" }} old.
      </div>
      <div class="pt-6 font-sans">
        <div v-if="!ratio">
          Enter your age above so that we can personalize your results.
          <small class="text-xs italic"
            >(we don't save or share any data)</small
          >
        </div>
        <div v-else-if="ratio">
          Ok, so based on an average human lifespan of
          {{ HUMAN_LIFE_EXPECTANCY }} years, you lived
          <strong>{{ ratio }}%</strong> of a "standard" life.
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.input-age {
  appearance: textfield;
  -moz-appearance: textfield;
}

.input-age::-webkit-outer-spin-button,
.input-age::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
