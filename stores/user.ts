export const HUMAN_LIFE_EXPECTANCY = 80;

export const useUserStore = defineStore("user", () => {
  const age = ref<number | null>(null);
  const ratio = ref<number>(0);

  function setAge(newAge: number) {
    age.value = newAge;
    ratio.value = newAge
      ? parseFloat(((100 * newAge) / HUMAN_LIFE_EXPECTANCY).toFixed(2))
      : 0;
  }

  return { age, setAge, ratio };
});
