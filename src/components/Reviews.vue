<script setup>
import Arrow from "@/assets/icons/arrow.svg";
import Star from "@/assets/icons/star.svg";
import User from "@/assets/icons/user.svg";
</script>
<script setup></script>

<template>
  <main>
    <div class="review">
      <h4>Det ikke kun os selv, der siger, det er næmt...</h4>
      <h2>Det siger vores kunder også</h2>

      <div class="reviewslider">
        <button src><img :src="Arrow" alt="Pil" /></button>

        <div class="review__card">
          <div class="review__card-header">
            <div src><img :src="User" alt="Bruger" /></div>

            <div class="review__card-author">
              <h5>Randi Trabjerg</h5>
              <p>2 anmeldelser · 1 billeder</p>
            </div>
          </div>

          <div class="review__card-rating">
            <img :src="Star" alt="Stjerne" />
            <img :src="Star" alt="Stjerne" />
            <img :src="Star" alt="Stjerne" />
            <img :src="Star" alt="Stjerne" />
            <img :src="Star" alt="Stjerne" />
            <p>for 3 måneder siden</p>
          </div>

          <p class="review__card-text">
            Odense Iværksætterservice sætter stor pris på samarbejdet med
            Sebastian fra næmt.nu. Sebastian er både skarp, engageret og lydhør,
            og han har udviklet et stærkt og praksisnært grundkursus i SEO, der
            giver nye og mindre virksomheder et solidt afsæt til at styrke deres
            synlighed online.
          </p>
        </div>
        <button src><img :src="Arrow" alt="Pil" /></button>
      </div>
    </div>
  </main>
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
  gap: 1rem;
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

.review__card {
  background-color: $color-cloudy-white;
  color: $color-charcoal-black;
  width: 65%;
  padding: 2rem 0.625rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 2rem;
  img {
    width: 1.25rem;
  }
}

.review__card-header {
  display: flex;
  flex-direction: row;
  gap: 0.625rem;
  align-items: center;
}

.review__card-author {
  p {
    font-size: 0.875rem;
  }
}

.review__card-rating {
  display: flex;
  gap: 0.2rem;
  img {
    width: 0.625rem;
  }
  p {
    font-size: 0.875rem;
  }
}
</style>
