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
              <h5>Kenneth Jensen</h5>
              <p>2 anmeldelser · 2 billeder</p>
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
            Det er et par gæve gutter der virkelig har opdateret vores
            hjemmeside og bragt den ind i en ny tidsalder. Hjemmesiden har
            skulle rumme mange nye ting vores gamle ikke havde, og de løsninger
            vi har arbejdet med har man løst efter bedste evner forsøgt at løse.
            De har arbejdet hurtigt og effektivt. Er der noget der har været
            usikkerhed om, så har det været et samarbejde, så det har lavet op
            til vores krav og forventninger. Jeg tror også NÆMT er blevet
            udfordret i de løsninger vi har lagt at bruge. På den måde har vores
            løsning skilt sig ud fra andre hjemmesider der sælger et produkt
            eller en ydelse. (Vi er en patientforening)
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
}
</style>
