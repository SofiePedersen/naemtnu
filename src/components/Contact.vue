<script setup>
import Sebastian from "@/assets/images/sebastian.webp";
</script>

<template>
  <main>
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
        <a href="https://naemt.nu/kontakt/" class="btn__green" target="_blank"
          >Skriv til Sebastian</a
        >
        <a href="https://naemt.nu/kontakt/" class="btn__white" target="_blank"
          >Ring til Sebastian</a
        >
      </div>
      <div class="contact__wrapper--sebastian">
        <img :src="Sebastian" alt="Sebastian" />
      </div>
    </div>
  </main>
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
