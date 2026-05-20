<script setup>
import { computed } from "vue";

const props = defineProps({
  seoScore: Number
});

/*
  Google PageSpeed score:
  0.92 -> 92
*/
const scorePercent = computed(() =>
  Math.round(props.seoScore * 100)
);

/*
  Convert percentage into degrees
  92% -> 331.2deg
*/
const circleFill = computed(() =>
  `conic-gradient(
    #22c55e ${scorePercent.value * 3.6}deg,
    #e5e7eb 0deg
  )`
);
</script>

<template>
  <div
    class="score-circle"
    :style="{ background: circleFill }"
  >
    <div class="inner-circle">
      {{ scorePercent }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.score-circle {
  width: 160px;
  height: 160px;

  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.3s ease;
}

.inner-circle {
  width: 120px;
  height: 120px;

  background: white;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 2rem;
  font-weight: bold;

  color: #111827;
}
</style>