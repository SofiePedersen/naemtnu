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
const errorMessage = ref("");
const hasError = ref(false);

const fetchPageSpeedData = async () => {
  if (!validateUrl()) return;
  isLoading.value = true;
  const requestUrl = `${apiEndpoint}?url=${encodeURIComponent(targetUrl.value)}&key=${apiKey}&category=seo`;
  console.log(requestUrl);

  try {
    const response = await fetch(requestUrl);
    const data = await response.json();
    result.value = data.lighthouseResult.categories.seo.score;
  } catch (error) {
    isLoading.value = false;
    console.error("Error fetching PageSpeed data:", error);
  } finally {
    isLoading.value = false;
  }
};

function validateUrl() {
  if (!targetUrl.value) {
    errorMessage.value = "Indtast venligst en URL.";
    return false;
  }
  if (!targetUrl.value.startsWith("https://")) {
    if (targetUrl.value.startsWith("http://")) {
      errorMessage.value = "Brug venligst https:// i stedet for http://";
    } else {
      errorMessage.value =
        "URL skal starte med https:// (f.eks. https://example.com)";
    }
    hasError.value = true;
    return false;
  }
  errorMessage.value = "";
  hasError.value = false;
  return true;
}

function clearError() {
  if (errorMessage.value) errorMessage.value = "";
}

const goBack = () => {
  result.value = 0;
  targetUrl.value = "";
};
</script>

<template>
  <main>
    <div v-show="result == 0 && !isLoading" class="section-wrapper">
      <div>
        <h1 class="section-wrapper__heading">
          Gratis SEO-tjek af din hjemmeside
        </h1>
        <h2 class="section-wrapper__sub-heading">
          Tjek om din hjemmeside har grundlæggende SEO i orden. Det giver dig en
          hurtig fornemmelse af, hvor din hjemmeside står nu.
        </h2>
      </div>
      <div class="section-wrapper--bottom">
        <p class="section-wrapper__p">Link til hjemmeside:</p>
        <div class="section-input-button__wrapper">
          <p v-if="errorMessage" class="Herosection__errorcode">
            {{ errorMessage }}
          </p>
          <input
            v-model="targetUrl"
            aria-label="find din seo score"
            type="text"
            class="section-wrapper__input"
            :class="{ 'input-error': errorMessage, hasError }"
            placeholder="Indsæt linket til hjemmesiden du vil teste..."
            @blur="validateUrl"
            @focus="clearError"
            @keydown.enter="fetchPageSpeedData"
          />
          <button
            class="btn__green"
            id="submit-btn"
            :aria-disabled="!!errorMessage || !targetUrl"
            :disabled="!!errorMessage || !targetUrl"
            @click="fetchPageSpeedData"
          >
            Tjek min SEO
          </button>
        </div>
      </div>
    </div>
    <!-- #2 - loading fallback -->

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
    <img :src="Bubbles" alt="" class="herosection__picture" />
  </main>
</template>

<style scoped lang="scss">
@import "../assets/main.scss";

/* ─── Wrapper ─────────────────────────────── */
main {
  background-color: $color-foam-blue;
  position: relative;
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

.section-input-button__wrapper {
  display: flex;
  flex-direction: column;
  .btn__green {
    padding-left: 0;
    padding-right: 0;
    width: 50%;
    text-align: center;
    align-self: center;
    white-space: nowrap;
  }
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
  flex-direction: column;
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
  .section-wrapper {
    min-height: 24rem;
  }

  .section-wrapper--bottom {
    .section-wrapper__input {
      width: 60%;
    }
  }
  .section-wrapper--bottom {
    .section-wrapper__input {
      width: 55%;
    }
    .btn__green {
      margin-left: 1rem;
      padding: 1.25rem 3rem;
      width: 30%;
    }
  }
  .section-input-button__wrapper {
    flex-direction: row;
  }
}

/* ─── Desktop ───────────────────────────────── */

@media (min-width: 1200px) {
  main {
    display: flex;
    padding-left: 9.375rem;
    justify-content: space-between;
  }

  .section-wrapper,
  .section-wrapper--loader,
  .section-wrapper--result {
    padding-top: 5rem;
    padding-right: 0rem;
    padding-left: 0rem;
    width: 60%;
    min-height: auto;
  }

  .section-wrapper {
    justify-content: flex-start;
    padding-bottom: 0;
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
    display: inline-block;
    // overflow: hidden;
    width: auto;
    height: 25rem;
    align-self: flex-end;
  }
}

/* ─── Error ─────────────────────────────── */
.Herosection__errorcode {
  color: rgb(218, 25, 25);
}

.input-error {
  background-color: rgb(255, 229, 229);
  border-color: rgb(218, 25, 25);
}
</style>
