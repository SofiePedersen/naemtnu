<script setup></script>

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
      <button>Ring til Sebastian</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/main.scss";
.contact {
  padding: 1rem;
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact__wrapper--buttons {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
}
</style>
