<script setup lang="ts">
interface Props {
  type: "slaughter" | "alive" | "dead";
}

const props = defineProps<Props>();

const labelClass = computed(() => {
  switch (props.type) {
    case "alive":
      return "bg-lime-600 text-stone-50";
    case "slaughter":
      return "bg-amber-400";
    case "dead":
      return "bg-rose-900 text-stone-50";
    default:
      return "bg-stone-400";
  }
});
</script>

<template>
  <span :class="`${labelClass} p-0.5  px-1 rounded-sm`"><slot /></span>
</template>
