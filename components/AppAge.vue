<script setup lang="ts">
import { HUMAN_LIFE_EXPECTANCY } from "~/stores/user";

const { t: $t } = useI18n({
  useScope: "local",
});

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
        <i18n-t keypath="age_sentence">
          <template #age_input>
            <input
              :value="age"
              type="number"
              min="0"
              step="0.5"
              class="input-age font-handwritten w-20 border-0 border-b-2 border-orange-50 bg-stone-600 text-center text-5xl hover:bg-stone-500 focus:bg-stone-500 focus:outline-0 md:w-32"
              placeholder="   ?"
              @input="onInput"
            />
          </template>
          <template #year> {{ $t("year", age || 0) }} </template>
        </i18n-t>
      </div>
      <div class="pt-6 font-sans">
        <div v-if="!ratio">
          {{ $t("subtitle") }}
          <small class="text-xs italic">{{ $t("subtitle.private") }}</small>
        </div>
        <div v-else-if="ratio">
          <i18n-t keypath="answer_ratio">
            <template #human_year>{{ HUMAN_LIFE_EXPECTANCY }}</template>
            <template #ratio>
              <strong>{{ ratio }}%</strong>
            </template>
          </i18n-t>
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
<i18n lang="json">
{
  "en": {
    "subtitle": "Enter your age above so that we can personalize your results. {private}",
    "subtitle.private": "(we don't save or share any data)",
    "answer_ratio": "Ok, so based on an average human lifespan of {human_year} years, you lived {ratio} of a \"standard\" life.",
    "age_sentence": "I am {age_input} {year} old.",
    "year": "year | years"
  },
  "fr": {
    "subtitle": "Entre ton âge ci-dessus pour qu'on puisse personnaliser tes résultats. {private}",
    "subtitle.private": "(on ne sauvegarde ni ne partage aucune donnée)",
    "answer_ratio": "D'accord, donc en se basant sur une durée de vie humaine moyenne de {human_year} ans, tu as vécu {ratio} d'une vie \"standard\".",
    "age_sentence": "J'ai {age_input} {year}.",
    "year": "an | ans"
  }
}
</i18n>
