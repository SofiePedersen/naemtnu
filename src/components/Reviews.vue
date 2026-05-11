<script setup>
import Arrow from "@/assets/icons/arrow.svg";
</script>
<script setup></script>

<template>
  <main>
    <div class="review">
      <h4>Det ikke kun os selv, der siger, det er næmt...</h4>
      <h2>Det siger vores kunder også</h2>

      <div class="reviewslider">
        <button src><img :src="Arrow" alt="Pil" /></button>

        <div class="reviewcard"></div>

        <button src><img :src="Arrow" alt="Pil" /></button>
      </div>
    </div>
  </main>
  <div class="review">
    <h4>Det ikke kun os selv, der siger, det er næmt...</h4>
    <h2>Det siger vores kunder også</h2>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/main.scss";
.review {
  background-color: $color-kelp-green;
  color: $color-cloudy-white;
  padding: 4rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.reviewslider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}

.reviewslider button {
  width: 3.125rem;
  height: 3.125rem;
  border-radius: 50%;
  border: none;
  background-color: $color-cloudy-white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  padding: 0;
}

.reviewslider button img {
  width: 1.5rem;
  height: 1.5rem;
}

.reviewslider button:last-child img {
  transform: rotate(180deg);
}
</style>
