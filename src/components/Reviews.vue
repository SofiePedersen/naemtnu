<script setup>
import { ref } from "vue";
import Arrow from "@/assets/icons/arrow.svg";
import Star from "@/assets/icons/star.svg";
import User from "@/assets/icons/user.svg";

const reviews = ref([
  {
    name: "Randi Trabjerg",
    reviewsCount: 2,
    imagesCount: 1,
    rating: 5,
    timeAgo: "for 3 måneder siden",
    text: `Odense Iværksætterservice sætter stor pris på samarbejdet med
    Sebastian fra næmt.nu. Sebastian er både skarp, engageret og lydhør,
    og han har udviklet et stærkt og praksisnært grundkursus i SEO, der
    giver nye og mindre virksomheder et solidt afsæt til at styrke deres
    synlighed online.`,
  },
  {
    name: "Kasper Møldrup",
    reviewsCount: 2,
    imagesCount: 0,
    rating: 5,
    timeAgo: "for 4 måneder siden",
    text: "Det var en god oplevelse, at få udviklet, designet og færdiggjort den nye hjemmeside til min virksomhed. Både mine spørgsmål og ønsker til det visuelle, teksterne og det samlede udtryk som hjemmesiden skulle have lykkedes vi med at ramme rigtigt med kyndig vejledning fra de dygtige medarbejdere i næmt.nu.",
  },
  {
    name: "Louise Bjerkstad Mortensen",
    reviewsCount: 2,
    imagesCount: 1,
    rating: 5,
    timeAgo: "for 4 måneder siden",
    text: "Næmt.nu har lavet den fineste hjemmeside til mit sted, Kunstnær. De lyttede til mange idéer og greb dem. De har været fleksible undervejs, har svaret på spørgsmål og har stået klar med hjælp og vejledning. Jeg er meget tilfreds med min nye hjemmeside, og fortryder bestemt ikke mit valg.",
  },
  {
    name: "Paul Misfeldt",
    reviewsCount: 2,
    imagesCount: 0,
    rating: 5,
    timeAgo: "for 3 måneder siden",
    text: "Virkelig nogle kompetente og reelle gutter, som har lavet hjemmeside for min arbejdsplads.  Du går ikke galt i byen her.",
  },
  {
    name: "Johannes Pham",
    reviewsCount: 1,
    imagesCount: 1,
    rating: 5,
    timeAgo: "for 3 måneder siden",
    text: "Mega fed oplevelse med Næmt.nu. Virkelig kompetente og dygtige gutter, der står bag det. Kan klart anbefales herfra!",
  },
]);

const activeIndex = ref(0);

function nextReview() {
  activeIndex.value = (activeIndex.value + 1) % reviews.value.length;
}

function prevReview() {
  activeIndex.value =
    (activeIndex.value - 1 + reviews.value.length) % reviews.value.length;
}
</script>

<template>
  <main>
    <div class="review">
      <h4>Det ikke kun os selv, der siger, det er næmt...</h4>
      <h2>Det siger vores kunder også</h2>

      <div class="reviewslider">
        <button @click="prevReview">
          <img :src="Arrow" alt="Forrige" />
        </button>

        <div class="review__card">
          <div class="review__card--header">
            <div><img :src="User" alt="Bruger" /></div>

            <div class="review__card--author">
              <h5>{{ reviews[activeIndex].name }}</h5>
              <p>
                {{ reviews[activeIndex].reviewsCount }} anmeldelser ·
                {{ reviews[activeIndex].imagesCount }} billeder
              </p>
            </div>
          </div>

          <div class="review__card--rating">
            <img
              v-for="n in reviews[activeIndex].rating"
              :key="n"
              :src="Star"
              alt="Stjerne"
            />
            <p>{{ reviews[activeIndex].timeAgo }}</p>
          </div>

          <p class="review__card--text">
            {{ reviews[activeIndex].text }}
          </p>
        </div>

        <button @click="nextReview">
          <img :src="Arrow" alt="Næste" />
        </button>
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
  p {
    font-size: 0.75rem;
  }
}

.reviewslider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.reviewslider button {
  width: 3rem;
  height: 3rem;
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
  width: 70%;
  padding: 2rem 0.625rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 2rem;
  height: 18.1rem;
  overflow-y: auto;
  img {
    width: 1.25rem;
  }
}

.review__card--header {
  display: flex;
  flex-direction: row;
  gap: 0.625rem;
  align-items: center;
}

.review__card--author {
  p {
    font-size: 0.75rem;
  }
}

.review__card--rating {
  display: flex;
  gap: 0.2rem;
  img {
    width: 0.625rem;
  }
  p {
    font-size: 0.75rem;
  }
}
</style>
