<script setup>
import Bubbles from "@/assets/images/hero-section-bubbles.webp";
import { ref } from "vue";

import SeoCheckerResult from "./SeoCheckerResult.vue";

const apiKey = import.meta.env.VITE_API_TOKEN;
const apiEndpoint =
  "https://www.googleapis.com/pagespeedonline/v5/runPagespeed";

const targetUrl = ref("");
const result = ref(0);
const isLoading = ref(false);

const fetchPageSpeedData = async () => {
  isLoading.value = true;
  // const requestUrl = {apiEndpoint} + "?url= " + {encodeURIComponent(targetUrl.value)} + "&key=" + {apiKey};
  const requestUrl = `${apiEndpoint}?url=${encodeURIComponent(targetUrl.value)}&key=${apiKey}`;
  console.log(requestUrl);

  try {
    const response = await fetch(requestUrl);
    const data = await response.json();

    result.value = data.lighthouseResult.categories.performance.score;
  } catch (error) {
    isLoading.value = false;
    console.error("Error fetching PageSpeed data:", error);
  } finally {
    isLoading.value = false;
  }
};

const goBack = () => {
  result.value = 0;
  targetUrl.value = "";
};
</script>

<template>
  <main>
    <div v-show="result == 0 && !isLoading" class="section-wrapper">
      <div>
        <h1 class="section-wrapper__heading">Tjek din hjemmesides SEO</h1>
        <h2 class="section-wrapper__sub-heading">
          Tjek om din hjemmeside har grundlæggende SEO i orden. Det giver dig en
          hurtig fornemmelse af, hvor din hjemmeside står nu.
        </h2>
      </div>

      <div class="section-wrapper--bottom">
        <p class="section-wrapper__p">Link til hjemmeside:</p>
        <div class="section-input-button__wrapper">
          <input
            class="section-wrapper__input"
            v-model="targetUrl"
            type="text"
            placeholder="Indsæt linket til hjemmesiden du vil teste..."
          />
          <button
            class="btn__green"
            id="submit-btn"
            @click="fetchPageSpeedData"
          >
            Tjek min SEO
          </button>
        </div>
      </div>
      <!-- #2 - loading fallback -->
    </div>

    <div v-show="isLoading" class="section-wrapper--loader">
      <div class="loader"></div>
      <p>
        Vi undersøger lige siden! <br />
        Dette kan tage nogle sekunder...
      </p>
    </div>

    <!-- #3 - resulstat komponent -->
    <div class="section-wrapper--result" v-show="result !== 0">
      <SeoCheckerResult :seoScore="result" @goBack="goBack" />
    </div>
    <img
      :src="Bubbles"
      alt="Billede med de 3 gutter fra næmt"
      class="herosection__picture"
    />
  </main>
</template>

<style scoped lang="scss">
@import "../assets/main.scss";

/* ─── Wrapper ─────────────────────────────── */

main {
  background-color: $color-foam-blue;
}

.section-wrapper,
.section-wrapper--loader,
.section-wrapper--result {
  min-height: 30rem;
  padding: 3rem 1rem;
}

.section-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.section-wrapper__heading {
  margin-bottom: 2rem;
  font-size: 2rem;
  color: $color-kelp-green;
}

.section-wrapper__sub-heading {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  font-family: $font-montserrat;
  font-weight: normal;
  color: $color-kelp-green;
}

.section-wrapper__p {
  color: $color-kelp-green;
}

.section-wrapper__input {
  padding: 1.25rem;
  width: 100%;
  margin: 1rem 0rem;
  border-radius: 300rem;
  border: 1px solid $color-kelp-green;
}

.section-wrapper__input::placeholder {
  font-style: italic;
  color: $color-charcoal-black;
  opacity: 0.5;
}

/* ─── Loader ─────────────────────────────── */

.section-wrapper--loader {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding-top: 0rem;
}

.section-wrapper--loader p {
  color: $color-kelp-green;
  font-size: 1.125rem;
  text-align: center;
}

.loader {
  margin: auto;
  --d: 33px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  color: $color-kelp-green;
  box-shadow:
    calc(1 * var(--d)) calc(0 * var(--d)) 0 0,
    calc(0.707 * var(--d)) calc(0.707 * var(--d)) 0 1px,
    calc(0 * var(--d)) calc(1 * var(--d)) 0 2px,
    calc(-0.707 * var(--d)) calc(0.707 * var(--d)) 0 3px,
    calc(-1 * var(--d)) calc(0 * var(--d)) 0 4px,
    calc(-0.707 * var(--d)) calc(-0.707 * var(--d)) 0 5px,
    calc(0 * var(--d)) calc(-1 * var(--d)) 0 6px;
  animation: l27 1s infinite steps(8);
}

.herosection__picture {
  display: none;
}

@keyframes l27 {
  100% {
    transform: rotate(1turn);
  }
}

/* ─── Tablet ───────────────────────────────── */

@media (min-width: 768px) {
}

/* ─── Desktop ───────────────────────────────── */

@media (min-width: 1200px) {
  main {
    display: flex;
    justify-content: space-between;
    padding-left: 9.375rem;
  }
  .section-wrapper,
  .section-wrapper--loader,
  .section-wrapper--result {
    padding-top: 10rem;
    padding-right: 2rem;
    padding-left: 0rem;
    padding-bottom: 5rem;
  }

  .section-wrapper--bottom {
    .section-wrapper__input {
      width: 60%;
    }
    .btn__green {
      margin-left: 1rem;
      white-space: nowrap;
    }
  }

  .herosection__picture {
    display: block;
    width: 26rem;
    height: 100%;
    align-self: flex-end;
  }
}
</style>
