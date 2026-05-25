<script setup>
import { computed } from "vue";

const props = defineProps({
  seoScore: Number,
});

const emit = defineEmits(["goBack"]);

/* Google PageSpeed score: 0.92 -> 92 */
const scorePercent = computed(() => Math.round(props.seoScore * 100));

/* Convert percentage into degrees 92% -> 331.2deg */
const circleFill = computed(
  () =>
    `conic-gradient(
    #1c4d48 ${scorePercent.value * 3.6}deg,
    #F8F8F8 0deg
  )`,
);
</script>

<template>
  <div class="result-wrapper">
    <div class="result__content">
      <div class="result__text-wrapper">
        <h2 class="result__heading">Hvad betyder din score?</h2>
        <p class="result__text">
          Dit fundament er lagt, men der er altid plads til optimering. Ved at
          finjustere dit indhold og styrke din tekniske SEO, kan vi sikre, at
          din forretning bliver fundet af de helt rigtige kunder, når de søger
          efter dine ydelser.
        </p>
      </div>
      <div class="btn__wrapper">
        <a
          class="btn__green"
          href="https://naemt.nu/kontakt/"
          target="_blank"
          rel="noopener"
          >Kontakt os</a
        >
        <button class="btn__white" @click="emit('goBack')">Søg igen</button>
      </div>
    </div>
    <div class="result__circle--wrapper">
      <div class="score-circle" :style="{ background: circleFill }">
        <div class="inner-circle">
          {{ scorePercent }}
        </div>
      </div>
      <p class="score-label">SEO Score</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/main.scss";

.result-wrapper {
  display: flex;
  justify-content: space-between;
  flex-direction: column-reverse;
}

.result__content {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.result__heading {
  margin-bottom: 1rem;
  color: $color-kelp-green;
}

.result__text-wrapper {
  align-self: center;
  width: 70%;
}

.result__text {
  margin-bottom: 2.5rem;
  color: $color-kelp-green;
}

.result__circle--wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
}

.btn__wrapper {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  .btn__green,
  .btn__white {
    text-align: center;
    width: 70%;
    white-space: nowrap;
  }
}

.score-circle {
  width: 15rem;
  height: 15rem;

  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.3s ease;
  box-shadow: 0px 0px 4px rgba($color-kelp-green, 0.2);
  margin-bottom: 2rem;
}

.inner-circle {
  width: 10rem;
  height: 10rem;

  background: $color-foam-blue;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 3.5rem;
  font-weight: bold;
  font-family: $font-comfortaa;
  box-shadow: inset 0 0 4px rgba($color-kelp-green, 0.2);

  color: $color-kelp-green;
}

.score-label {
  color: $color-kelp-green;
  font-family: $font-comfortaa;
  font-size: 1.5rem;
  text-align: center;
}

/* ─── Tablet ───────────────────────────────── */

@media (min-width: 768px) {
  .result__circle--wrapper {
    width: 60%;
    align-self: center;
  }
}

/* ─── Desktop ───────────────────────────────── */

@media (min-width: 1200px) {
  .result-wrapper {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .result__content {
    justify-content: flex-end;
  }

  .result__text-wrapper {
    width: 100%;
  }

  .result__text {
    margin-bottom: 2rem;
    max-width: 75%;
  }

  .btn__wrapper {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    margin-top: 0;

    .btn__green,
    .btn__white {
      width: auto;
    }
  }

  .result__circle--wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: auto;
    margin-left: 2rem;
  }

  .score-circle {
    width: 17rem;
    height: 17rem;
    margin-bottom: 1.5rem;
  }

  .score-label {
    font-size: 1.75rem;
  }

  .inner-circle {
    width: 11.875rem;
    height: 11.875rem;
    font-size: 4rem;
    font-weight: 400;
  }

  .btn__green,
  .btn__white {
    padding: 1.25rem 3rem;
  }
}
</style>
