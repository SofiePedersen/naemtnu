<script setup>
import { ref } from "vue";

import SeoCheckerResult from "./SeoCheckerResult.vue";

const apiKey = import.meta.env.VITE_API_TOKEN;
const apiEndpoint = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed";

const targetUrl = ref("");
const result = ref(0);
const isLoading = ref(false);

const fetchPageSpeedData = async () => {
  isLoading.value = true
  // const requestUrl = {apiEndpoint} + "?url= " + {encodeURIComponent(targetUrl.value)} + "&key=" + {apiKey};
  const requestUrl = `${apiEndpoint}?url=${encodeURIComponent(targetUrl.value)}&key=${apiKey}`;
  console.log(requestUrl)

  try {
    const response = await fetch(requestUrl);
    const data = await response.json();

    result.value = data.lighthouseResult.categories.performance.score;

  } catch (error) {
    isLoading.value = false
    console.error("Error fetching PageSpeed data:", error);
  }
  finally {
    isLoading.value = false
  }
};
</script>

<template>
  <main>

    <div v-show="result == 0 && !isLoading " class="section-wrapper">
        <h1 class="section-wrapper__heading" >Tjek din hjemmesides SEO</h1>
        <h2 class="section-wrapper__sub-heading">
          Tjek om din hjemmeside har grundlæggende SEO i orden. Det giver dig en hurtig fornemmelse af, hvor din
          hjemmeside står nu.
        </h2>

        <p class="section-wrapper__input-label">
          Link til hjemmeside:
        </p>
        
      <div>
        <input v-model="targetUrl" type="text" placeholder="indsæt linket til hjemmesiden du vu vil teste">
        <button class="btn__green" id="submit-btn" @click="fetchPageSpeedData">
          search test url now
        </button>
      </div>

    </div>







    <!-- #2 - loading fallback -->
    <div class="loader" v-show="isLoading">
    </div>

    <!-- #3 - resulstat komponent -->
    <div v-show="result !== 0">
      <SeoCheckerResult :seoScore="result" />
    </div>


  </main>
</template>

<style scoped lang="scss">
@import '../assets/main.scss';













.loader {
  margin: auto;
  --d: 33px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  color: $color-kelp-green;
  box-shadow:
    calc(1*var(--d)) calc(0*var(--d)) 0 0,
    calc(0.707*var(--d)) calc(0.707*var(--d)) 0 1px,
    calc(0*var(--d)) calc(1*var(--d)) 0 2px,
    calc(-0.707*var(--d)) calc(0.707*var(--d)) 0 3px,
    calc(-1*var(--d)) calc(0*var(--d)) 0 4px,
    calc(-0.707*var(--d)) calc(-0.707*var(--d))0 5px,
    calc(0*var(--d)) calc(-1*var(--d)) 0 6px;
  animation: l27 1s infinite steps(8);
}

@keyframes l27 {
  100% {
    transform: rotate(1turn)
  }
}
</style>