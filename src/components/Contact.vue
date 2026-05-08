<script setup>
import Sebastian from "@/assets/images/sebastian.webp";
</script>

<template>
  <div class="contact">
    <h4>Vil du også have det næmt? Så lad os tage en snak.</h4>
    <h2>Din virksomhed fortjener en hjemmeside, der arbejder for dig</h2>
    <div class="contact__text--wrapper">
      <p>Hiv fat i Sebastian og få en ærlig snak om din hjemmeside.</p>
      <p>
        Vi lytter, spørger ind - og finder sammen en løsning, der gør det næmt
        for dig. Nu.
      </p>
    </div>
    <div class="contact__wrapper--buttons">
      <button>Skriv til Sebastian</button>
      <button class="rts">Ring til Sebastian</button>
    </div>
    <div class="contact__wrapper--sebastian">
      <img :src="Sebastian" alt="Sebastian" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/main.scss";
.contact {
  background-color: $color-foam-blue;
  padding: 1rem;
  padding-top: 4rem;
  padding-bottom: 0rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  h2 {
    color: $color-kelp-green;
  }
}

.contact__wrapper--buttons {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;
  button {
    background-color: $color-kelp-green;
    color: $color-cloudy-white;
    width: 75%;
  }
  .rts {
    background-color: $color-cloudy-white;
    color: $color-kelp-green;
    border: 1px solid $color-kelp-green;
  }
}

.contact__wrapper--sebastian {
  width: 100%;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  img {
    padding: 0rem;
    width: 85%;
    height: auto;
  }
}
</style>
