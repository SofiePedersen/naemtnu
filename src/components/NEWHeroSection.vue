<script setup>
import { ref } from "vue";
import { computed } from "vue";

const apiKey = import.meta.env.VITE_API_TOKEN;
const apiEndpoint = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://web.dev/&key=${apiKey}`;
const targetUrl = ref("https://naemt.nu/");
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
    <Suspense>
      <!-- resultat (skal være component) -->

      <template #default>
        <p>
          tal:
          {{ number }}
        </p>
      </template>

      <!-- default loading state (loading bar) -->
      <template #fallback>
        <p>
          loading.....
        </p>
      </template>

    </Suspense>


    <button v-if="!resultData" class="btn__green" id="submit-btn" @click="fetchPageSpeedData">
      search test url now
    </button>

  </main>
</template>

<style lang="scss" scoped>
@import "../assets/main.scss";

* {
  border: 1px solid black;
}
</style>
