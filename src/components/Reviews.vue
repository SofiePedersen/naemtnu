<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import Arrow from "@/assets/icons/arrow.svg";
import Star from "@/assets/icons/star.svg";
import User from "@/assets/icons/user.svg";
import Logo from "@/assets/icons/logo.svg";

const reviews = ref([
  {
    name: "Randi Trabjerg",
    reviewsCount: 2,
    imagesCount: 1,
    rating: 5,
    timeAgo: "for 3 måneder siden",
    text: `Odense Iværksætterservice sætter stor pris på samarbejdet med Sebastian fra næmt.nu. Sebastian er både skarp, engageret og lydhør, og han har udviklet et stærkt og praksisnært grundkursus i SEO, der giver nye og mindre virksomheder et solidt afsæt til at styrke deres synlighed online.`,
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
    text: "Virkelig nogle kompetente og reelle gutter, som har lavet hjemmeside for min arbejdsplads. Du går ikke galt i byen her.",
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
const slidesToShow = ref(3);

const updateSlidesToShow = () => {
  const width = window.innerWidth;
  if (width < 768) {
    slidesToShow.value = 1;
  } else if (width < 1200) {
    slidesToShow.value = 2;
  } else {
    slidesToShow.value = 3;
  }
};

onMounted(() => {
  updateSlidesToShow();
  window.addEventListener("resize", updateSlidesToShow);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateSlidesToShow);
});

const visibleReviews = computed(() => {
  const result = [];
  for (let i = 0; i < slidesToShow.value; i++) {
    result.push(reviews.value[(activeIndex.value + i) % reviews.value.length]);
  }
  return result;
});

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
      <div class="review--logo"><img :src="Logo" alt="næmt.nu logo" /></div>

      <div class="reviewslider">
        <button @click="prevReview" aria-label="Forrige anmeldelser">
          <img :src="Arrow" alt="" aria-hidden="true" />
        </button>

        <div class="review__cards--wrapper">
          <div
            class="review__card"
            v-for="(review, index) in visibleReviews"
            :key="index"
          >
            <div class="review__card--header">
              <div><img :src="User" alt="Bruger" /></div>
              <div class="review__card--author">
                <h5>{{ review.name }}</h5>
                <p>
                  {{ review.reviewsCount }} anmeldelser ·
                  {{ review.imagesCount }} billeder
                </p>
              </div>
            </div>

            <div class="review__card--rating">
              <img
                v-for="n in review.rating"
                :key="n"
                :src="Star"
                alt=""
                aria-hidden="true"
              />
              <p>{{ review.timeAgo }}</p>
            </div>

            <p class="review__card--text">{{ review.text }}</p>
          </div>
        </div>

        <button @click="nextReview" aria-label="Næste anmeldelser">
          <img :src="Arrow" alt="" aria-hidden="true" />
        </button>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import "../assets/main.scss";
.review {
  position: relative;
  background-color: $color-kelp-green;
  color: $color-cloudy-white;
  padding: 4rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  p {
    font-size: 0.75rem;
  }
}

.review--logo {
  position: absolute;
  z-index: 0;
  top: 24%;
  right: 7.5rem;
  transform: translateY(-50%);
  opacity: 0.1;
  width: 12.5rem;
  display: none;
  img {
    width: 100%;
  }
}

.reviewslider {
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 0.5rem;
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

.review__cards--wrapper {
  display: flex;
  justify-content: center;
  gap: 1rem;
  width: 80%;
  overflow: hidden;
}

.review__card {
  background-color: $color-cloudy-white;
  color: $color-charcoal-black;
  z-index: 1;
  width: 100%;
  padding: 2rem 0.625rem 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 2rem;
  height: 18.3rem;
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

/* ─── Tablet ───────────────────────────────── */

@media (min-width: 768px) {
  .reviewslider {
    gap: 1rem;
  }
}

/* ─── Desktop ─────────────────────────────── */

@media (min-width: 1200px) {
  .review {
    padding-left: 9.375rem;
    padding-right: 9.375rem;
  }

  .review__cards--wrapper {
    width: 90%;
  }

  .review--logo {
    display: block;
  }
}
</style>
