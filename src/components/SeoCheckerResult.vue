<script setup>
import { computed } from "vue";

const props = defineProps({
  seoScore: Number
});

/* Google PageSpeed score: 0.92 -> 92 */
const scorePercent = computed(() =>
  Math.round(props.seoScore * 100)
);

/* Convert percentage into degrees 92% -> 331.2deg */
const circleFill = computed(() =>
  `conic-gradient(
    #1c4d48 ${scorePercent.value * 3.6}deg,
    #F8F8F8 0deg
  )`
);
</script>

<template>
  <div>
    <h2>Hvad betyder din score?</h2>
    <p>
      Dit fundament er lagt, men der er altid plads til optimering.
      Ved at finjustere dit indhold og styrke din tekniske SEO, 
      kan vi sikre, at din forretning bliver fundet af de helt
      rigtige kunder, når de søger efter dine ydelser.
    </p>
  </div>
  <div class="score-circle" :style="{ background: circleFill }">
    <div class="inner-circle">
      {{ scorePercent }}
    </div>
  </div>
  <div>
    <button></button>
    <a></a>
  </div>
</template>

<style scoped lang="scss">
@import '../assets/main.scss';

.score-circle {
  width: 10rem;
  height: 10rem;

  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.3s ease;
  box-shadow: 0px 0px 4px rgba($color-kelp-green, 0.2);
}

.inner-circle {
  width: 7.5rem;
  height: 7.5rem;

  background: $color-foam-blue;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 2.5rem;
  font-weight: bold;
  font-family: $font-comfortaa;
  box-shadow: inset 0 0 4px rgba($color-kelp-green, 0.2);

  color: $color-kelp-green;
}
</style>