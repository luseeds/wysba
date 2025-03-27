<script setup lang="ts">
import { HUMAN_LIFE_EXPECTANCY } from "~/stores/user";

const store = useUserStore();
const ratio = computed(() => store.ratio);

const exampleAnimal = {
  name: "animal name",
  lifespan: "natural lifespan",
  slaughter: "slaughter age",
  ratio: 5.7,
  key: "unknown",
};
</script>
<template>
  <UISection title="Explanation" class="bg-stone-50 py-24">
    <div class="text-justify flex flex-wrap gap-8 mt-8">
      <div class="max-w-prose pr-4">
        <div class="mb-4 text-3xl font-handwritten">How to read the data?</div>
        <AppAnimal
          :animal="exampleAnimal"
          :ratio
          class="my-8 bg-stone-300 w-96"
        />
        <div>
          <div>
            If it's green:
            <UILabel type="alive">you would still be alive</UILabel>.
          </div>
          <div>
            If it's red:
            <UILabel type="dead">you would be dead</UILabel>.
          </div>
          <p>
            The <UILabel type="slaughter">yellow part</UILabel> represents the
            animal lifespan when exploited by the meat, dairy and egg
            industries.
          </p>
          <p>
            The end of the yellow part refers to their slaughter age. This is
            <strong>how old they are when killed</strong>. The reason might be
            that they are not profitable anymore or because it's time to kill
            them for their meat.
          </p>
          <div>
            The full progressbar represents their natural life time. We can
            clearly see how short their lives are when exploited.
          </div>
          <br /><br />
        </div>
      </div>
      <div class="max-w-prose">
        <div class="mb-4 text-3xl font-handwritten">
          How is the ratio working?
        </div>
        <div>
          <div>
            When you type in your age at the top we calculate a
            <strong>ratio</strong>.
          </div>
          <div>
            This represents how many years you lived out of the
            {{ HUMAN_LIFE_EXPECTANCY }} years in average for a human.
            <span v-if="!!ratio">
              So in your case, it's <strong>{{ ratio }}%</strong>. (it's only
              statistics, of course you can live longer!)</span
            >
          </div>
          <br />
          <div>
            We then compare this <strong>ratio</strong> with the age at which
            animals are slaughtered versus their natural lifespan.
            <ul class="explanation-bar-list">
              <li>
                If the bar is
                <UILabel type="dead">red</UILabel>, your ratio is higher than
                the animal's ratio. It means that if you were this animal, you
                will be already <UILabel type="dead">dead</UILabel>.
              </li>
              <li>
                If the bar is
                <UILabel type="alive">green</UILabel>, your ratio is lower than
                the animal's ratio. It means that if you were this animal, you
                will still be
                <UILabel type="alive">alive</UILabel>
                (but <strong>exploited</strong>..).
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </UISection>
</template>
