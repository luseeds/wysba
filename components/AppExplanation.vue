<script setup lang="ts">
import { HUMAN_LIFE_EXPECTANCY } from "~/stores/user";

const { t: $t } = useI18n({
  useScope: "local",
});

const store = useUserStore();
const ratio = computed(() => store.ratio);

const exampleAnimal = {
  name: $t("animal_example.name"),
  lifespan_value: $t("animal_example.lifespan"),
  slaughter_value: $t("animal_example.slaughter"),
  ratio: 5.7,
  key: "unknown",
};
</script>
<template>
  <UISection :title="$t('title')" class="bg-stone-50 py-24">
    <div class="text-justify flex flex-wrap gap-8 mt-8">
      <div class="max-w-prose pr-4">
        <div class="mb-4 text-3xl font-handwritten">{{ $t("how_to") }}</div>
        <AppAnimal
          :animal="exampleAnimal"
          :ratio
          class="my-8 bg-stone-300 w-full !max-w-96"
        />
        <div>
          <div>
            {{ $t("alive") }}
            <UILabel type="alive">{{ $t("alive_label") }}</UILabel
            >.
          </div>
          <div>
            {{ $t("dead") }}
            <UILabel type="dead">{{ $t("dead_label") }}</UILabel
            >.
          </div>
          <p>
            <i18n-t keypath="lifespan">
              <template #lifespan>
                <UILabel type="slaughter">{{ $t("lifespan_label") }}</UILabel>
              </template>
            </i18n-t>
          </p>
          <p>
            <i18n-t keypath="lifespan_explanation">
              <template #lifespan_explanation_yellow>
                <strong>{{ $t("lifespan_label") }}</strong>
              </template>
              <template #lifespan_explanation_how_old>
                <strong>{{ $t("lifespan_explanation_how_old") }}</strong>
              </template>
            </i18n-t>
          </p>
          <div>
            {{ $t("progress_bar") }}
          </div>
          <br /><br />
        </div>
      </div>
      <div class="max-w-prose">
        <div class="mb-4 text-3xl font-handwritten">
          {{ $t("how_ratio") }}
        </div>
        <div>
          <div>
            {{ $t("how_ratio_intro") }}
          </div>
          <div>
            {{ $t("how_ratio_years", { human_life: HUMAN_LIFE_EXPECTANCY }) }}
            <span v-if="!!ratio">{{ $t("how_ratio_extra", { ratio }) }}</span>
          </div>
          <br />
          <div>
            {{ $t("how_ratio_compare") }}
            <ul class="explanation-bar-list">
              <li>
                <i18n-t keypath="how_ratio_dead">
                  <template #color>
                    <UILabel type="dead">{{
                      $t("how_ratio_dead_color")
                    }}</UILabel>
                  </template>
                  <template #dead>
                    <UILabel type="dead">{{
                      $t("how_ratio_dead_text")
                    }}</UILabel>
                  </template>
                </i18n-t>
              </li>
              <li>
                <i18n-t keypath="how_ratio_alive">
                  <template #color>
                    <UILabel type="alive">{{
                      $t("how_ratio_alive_color")
                    }}</UILabel>
                  </template>
                  <template #alive>
                    <UILabel type="alive">{{
                      $t("how_ratio_alive_text")
                    }}</UILabel>
                  </template>
                </i18n-t>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </UISection>
</template>
<i18n lang="json">
{
  "en": {
    "title": "Explanation",
    "how_to": "How to read the data?",
    "animal_example": {
      "name": "animal name",
      "lifespan": "natural lifespan",
      "slaughter": "slaughter age"
    },
    "how_ratio": "How is the ratio working?",
    "alive": "If it's green:",
    "alive_label": "you would still be alive",
    "dead": "If it's red:",
    "dead_label": "you would be dead",
    "lifespan": "The {lifespan} represents the animal lifespan when exploited by the meat, dairy and egg industries.",
    "lifespan_label": "yellow part",
    "lifespan_explanation": "The end of the {lifespan_explanation_yellow} refers to their slaughter age. This {lifespan_explanation_how_old}. The reason might be that they are not profitable anymore or because it's time to kill them for their meat.",
    "lifespan_explanation_how_old": "is how old they are when killed",
    "progress_bar": "The full progressbar represents their natural life time. We can clearly see how short their lives are when exploited.",
    "how_ratio_intro": "When you type in your age at the top we calculate a ratio.",
    "how_ratio_years": "This represents how many years you lived out of the {human_life} years in average for a human.",
    "how_ratio_extra": "So in your case, it's {ratio}%. (it's only statistics, of course you can live longer!)",
    "how_ratio_compare": "We then compare this ratio with the age at which animals are slaughtered versus their natural lifespan.",
    "how_ratio_dead": "If the bar is {color}, your ratio is higher than the animal's ratio. It means that if you were this animal, you will be already {dead}.",
    "how_ratio_dead_color": "red",
    "how_ratio_dead_text": "dead",
    "how_ratio_alive": "If the bar is {color}, your ratio is lower than the animal's ratio. It means that if you were this animal, you will still be {alive} (but exploited..).",
    "how_ratio_alive_color": "green",
    "how_ratio_alive_text": "alive"
  },
  "fr": {
    "title": "Explications",
    "how_to": "Comment lire les données ?",
    "animal_example": {
      "name": "nom de l'animal",
      "lifespan": "durée de vie naturelle",
      "slaughter": "mise à mort"
    },
    "how_ratio": "Comment fonctionne le ratio ?",
    "alive": "Si c'est vert :",
    "alive_label": "vous seriez encore en vie",
    "dead": "Si c'est rouge :",
    "dead_label": "vous seriez mort",
    "lifespan": "La {lifespan} représente la durée de vie de l'animal lorsqu'il est exploité par les industries de la viande, des produits laitiers et des œufs.",
    "lifespan_label": "partie jaune",
    "lifespan_explanation": "La fin de la {lifespan_explanation_yellow} correspond à leur âge d'abattage. C'{lifespan_explanation_how_old}. La raison pourrait être qu'ils ne sont plus rentables ou qu'il est temps de les tuer pour leur viande.",
    "lifespan_explanation_how_old": "est l'âge qu'ils ont lorsqu'ils sont tués",
    "progress_bar": "La barre de progression complète représente leur durée de vie naturelle. On voit clairement combien leurs vies sont courtes lorsqu'ils sont exploités.",
    "how_ratio_intro": "Lorsque vous entrez votre âge en haut, nous calculons un ratio.",
    "how_ratio_years": "Cela représente combien d'années vous avez vécu par rapport aux {human_life} années en moyenne pour un humain.",
    "how_ratio_extra": "Donc dans votre cas, c'est {ratio}%. (ce ne sont que des statistiques, bien sûr vous pouvez vivre plus longtemps !)",
    "how_ratio_compare": "Nous comparons ensuite ce ratio avec l'âge auquel les animaux sont abattus par rapport à leur durée de vie naturelle.",
    "how_ratio_dead": "Si la barre est {color}, votre ratio est plus élevé que celui de l'animal. Cela signifie que si vous étiez cet animal, vous seriez déjà {dead}.",
    "how_ratio_dead_color": "rouge",
    "how_ratio_dead_text": "mort",
    "how_ratio_alive": "Si la barre est {color}, votre ratio est plus bas que celui de l'animal. Cela signifie que si vous étiez cet animal, vous seriez encore {alive} (mais exploité..).",
    "how_ratio_alive_color": "vert",
    "how_ratio_alive_text": "vivant"
  }
}
</i18n>
