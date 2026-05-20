<script setup>
import { ref } from "vue";
import { computed } from "vue";

const apiKey = import.meta.env.VITE_API_TOKEN;
const apiEndpoint = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://web.dev/&key=${apiKey}`;
const targetUrl = ref("");
const resultData = ref(null);
const isLoading = ref(false);
const number = ref(0);
const CIRCUMFERENCE = 911;
let intervalId = null;

const reloadPage = () => {
  window.location.reload();
};

intervalId = setInterval(() => {
  if (resultData.value) {
    const score = Math.round(
      resultData.value.lighthouseResult.categories.performance.score * 100,
    );
    if (number.value < score) {
      number.value += 1;
    }
  }
}, 20);

const currentOffset = computed(() => {
  return CIRCUMFERENCE - (number.value / 100) * CIRCUMFERENCE;
});

const fetchPageSpeedData = async () => {
  const url = new URL(apiEndpoint);
  url.searchParams.set("url", targetUrl.value);
  url.searchParams.set("key", apiKey);

  isLoading.value = true;

  try {
    const response = await fetch(url);
    resultData.value = await response.json();
    console.log(resultData.value);
  } catch (error) {
    console.error("Error fetching PageSpeed data:", error);
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <main>
    <div class="HeroSection__wrapper">
      <div class="HeroSection" v-if="!resultData && !isLoading">
        <h1 class="HeroSection__text__h1">Tjek Din Hjemmesides SEO</h1>
        <p class="HeroSection__text__p">
          Tjek om din hjemmeside har grundlæggende SEO i orden. Det giver dig en
          hurtig fornemmelse af, hvor din hjemmeside står lige nu.
        </p>
      </div>
      <div class="HeroSection" v-if="resultData">
        <h2 class="HeroSection__text__h1">Hvad betyder din score?</h2>
        <p class="HeroSection__text__p">
          Dit fundament er lagt, men der er altid plads til optimering. Ved at
          finjustere dit indhold og styrke din tekniske SEO, kan vi sikre, at
          din forretning bliver fundet af de helt rigtige kunder, når de søger
          efter dine ydelser.
        </p>
        <div class="wrapper">
          <div class="outer">
            <div class="inner">
              <div id="number">{{ number }}</div>
            </div>
          </div>
          <svg width="20rem" height="20rem" viewBox="0 0 320 320">
            <circle
              cx="160"
              cy="160"
              r="145"
              :style="{ strokeDashoffset: currentOffset }"
            />
          </svg>
        </div>
        <h2 class="HeroSection__text__h2">SEO Score</h2>
      </div>
      <div v-if="isLoading" class="HeroSection">
        <span class="loader"></span>
      </div>
      <div class="HeroSection__button--SEO HeroSection__button--SEOpreloaded">
        <p v-if="!resultData && !isLoading" class="HeroSection__text__pbold">
          Link til hjemmeside:
        </p>
        <input
          v-if="!resultData && !isLoading"
          type="text"
          v-model="targetUrl"
          @keydown.enter="fetchPageSpeedData"
          placeholder="Indsæt dit fulde link her..."
        />
        <button
          v-if="!resultData"
          class="btn__green btn__SEO"
          type="submit"
          :disabled="isLoading"
          id="submit-btn"
          @click="fetchPageSpeedData"
        >
          {{ isLoading ? "Indlæser..." : "Tjek min SEO" }}
        </button>
        <div class="result-btns-data">
          <a
            class="btn__green"
            v-if="resultData"
            type="submit"
            :disabled="isLoading"
            id="submit-btn"
            href="https://www.linkedin.com/company/naemt-nu/posts/?feedView=all"
            >Kontakt os</a
          >
          <button
            v-if="resultData"
            class="btn__white"
            type="submit"
            id="submit-btn"
            @click="reloadPage"
          >
            Søg igen
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import "../assets/main.scss";

*{
  border: 1px solid black;
}

.HeroSection__wrapper {
  background-color: $color-foam-blue;
  padding-left: 1rem;
  padding-right: 1rem;
}

.HeroSection {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  background-color: $color-foam-blue;
}

.HeroSection__image {
  display: none;
  position: relative;
  transform: rotateY(180deg);
}

.HeroSection__text__h1 {
  align-self: flex-start;
  text-align: left;
  color: $color-kelp-green;
  margin-bottom: 1rem;
  padding-top: 2rem;
}

.HeroSection__text__h2 {
  color: $color-kelp-green;
  text-align: center;
  margin-bottom: 2rem;
}

.HeroSection__text__p {
  color: $color-kelp-green;
}

.HeroSection__text__link {
  background-color: $color-foam-blue;
}

.HeroSection__button--SEO {
  padding-bottom: 3rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: $color-foam-blue;
}

.HeroSection__text__pbold {
  color: $color-kelp-green;
  justify-content: start;
  padding-top: 2rem;
  padding-bottom: 1rem;
  font-weight: 450;
}

input {
  font-family: "Montserrat";
  font-style: italic;
  padding: 1.5rem;
  border: 1px solid $color-kelp-green;
  border-radius: 50px;
  width: 100%;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
  box-shadow: 4px 4px 4px rgba($color-kelp-green, 0.15);
}

.btn__green--inner {
  border: none;
  background-color: none;
}

.result-btns-data {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
}

.wrapper {
  width: 100%;
  height: 20rem;
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 2rem;
}

.outer {
  box-sizing: border-box;
  width: 20rem;
  height: 20rem;
  box-shadow:
    -1px -1px 5px 0px rgba($color-kelp-green, 0.15),
    3px 3px 5px rgba($color-kelp-green, 0.15);
  border-radius: 50%;
  padding: 1.875rem;
}

.inner {
  width: 16.25rem;
  height: 16.25rem;
  box-shadow:
    inset -1px -1px 5px 0px rgba($color-kelp-green, 0.15),
    inset 3px 3px 5px rgba($color-kelp-green, 0.15);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#number {
  font-size: 5rem;
  font-family: "montserrat", sans-serif;
  font-weight: 400;
  color: $color-kelp-green;
}

svg {
  position: absolute;
}

circle {
  fill: none;
  stroke: $color-kelp-green;
  stroke-width: 30;
  stroke-dasharray: 911;
  stroke-linecap: round;
  transform: rotate(-90deg);
  transform-origin: center;
  animation: anim 1s ease forwards;
}

.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  position: relative;
  animation: rotate 1s linear infinite;
}
.loader::before {
  content: "";
  box-sizing: border-box;
  position: absolute;
  inset: 0px;
  border-radius: 50%;
  border: 5px solid $color-kelp-green;
  animation: prixClipFix 2s linear infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes prixClipFix {
  0% {
    clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
  }
  25% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
  }
  50% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
  }
  75% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
  }
  100% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);
  }
}

@media (max-width: 360px) {
  .HeroSection {
    padding: 0rem 1rem;
  }

  .HeroSection__button--SEOpreloaded {
    padding: 0rem 1rem;
    gap: 0rem;
  }

  .result-btns-data {
    gap: 0.5rem;
    margin-bottom: 3rem;

    .btn__green,
    .btn__white {
      padding: 1rem 1.5rem;
      width: 50%;
      text-align: center;
    }
  }
}

@media (max-width: 420px) {
  .HeroSection {
    padding: 0rem 1rem;
  }

  .HeroSection__button--SEOpreloaded {
    padding: 0rem 1rem;
    gap: 0rem;
  }

  .result-btns-data {
    gap: 0.5rem;
    margin-bottom: 3rem;

    .btn__green,
    .btn__white {
      padding: 1rem 1.5rem;
      width: 50%;
      font-size: 0.875rem;
      text-align: center;
    }
  }
}

@media (min-width: 768px) {
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .HeroSection__button--SEO {
    flex-direction: row;
    justify-content: center;
  }

  .HeroSection__button--SEOpreloaded {
    flex-direction: column;
    align-items: center;
  }

  input {
    width: 80%;
  }

  .HeroSection__text__pbold {
    align-items: start;
  }

  .btn__green {
    align-items: center;
    justify-content: center;
  }

  .btn__SEO {
    width: 50%;
  }

  .btn__white {
    align-items: center;
    justify-content: center;
  }
}

@media (min-width: 1200px) {
  .HeroSection__wrapper {
    padding-left: 9.375rem;
    padding-right: 9.375rem;
    padding-top: 10rem;
  }

  .HeroSection {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding-bottom: 1rem;
  }

  .HeroSection__button--SEO {
    flex-direction: column;
    align-items: flex-start;
  }

  .wrapper {
    flex-shrink: 0;
    margin-top: 0;
    margin-bottom: 0;
  }

  .result-btns-data {
    justify-content: flex-start;
  }

  .loader {
    margin: 2rem;
    align-self: center;
  }
}
</style>
