<script setup>
import Sebastian from "@/assets/images/sebastian.webp";
</script>

<template>
  <main>
    <div class="contact">
      <div class="contact__content">
        <h4>Vil du også have det næmt? Så lad os tage en snak.</h4>

        <h2>Din virksomhed fortjener en hjemmeside, der arbejder for dig</h2>

        <div class="contact__text--wrapper">
          <p>Hiv fat i Sebastian og få en ærlig snak om din hjemmeside.</p>

          <p>
            Vi lytter, spørger ind - og finder sammen en løsning, der gør det
            næmt for dig. Nu.
          </p>
        </div>

        <div class="contact__wrapper--buttons">
          <a
            href="https://naemt.nu/kontakt/"
            class="btn__green"
            target="_blank"
          >
            Skriv til Sebastian
          </a>

          <a
            href="https://naemt.nu/kontakt/"
            class="btn__white"
            target="_blank"
          >
            Ring til Sebastian
          </a>
        </div>
      </div>

      <div class="contact__wrapper--sebastian">
        <img :src="Sebastian" alt="Sebastian fra næmt" />
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

.contact__content {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact__text--wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.contact__wrapper--buttons {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  .btn__green {
    padding: 1.25rem 25%;
  }
  .btn__white {
    padding: 1.25rem 25%;
  }
}

.contact__wrapper--sebastian {
  width: 100%;

  display: flex;
  justify-content: center;

  img {
    width: 60%;
    height: auto;
  }
}

p,
h4 {
  color: $color-charcoal-black;
}

/* ─── Tablet ───────────────────────────────── */

@media (min-width: 768px) {
  .contact {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }

  .contact__content {
    width: 65%;
    padding-bottom: 2rem;
  }

  .contact__text--wrapper {
    gap: 0rem;
  }

  .contact__wrapper--sebastian {
    width: 30%;
    margin-top: auto;

    img {
      width: 100%;
    }
  }

  .contact__wrapper--buttons {
    flex-direction: row;
    .btn__green {
      padding: 1.25rem 3rem;
    }
    .btn__white {
      padding: 1.25rem 3rem;
    }
  }
}

/* ─── Desktop ─────────────────────────────── */

@media (min-width: 1200px) {
  .contact {
    margin-top: 3rem;
    padding: 0rem 9.375rem;
    height: 30.625rem;
    overflow: visible;
  }

  .contact__wrapper--sebastian {
    margin-top: 2rem;
    img {
      width: 23.1rem;
      height: 35.25rem;
      transform: translateY(-3.25rem);
    }
  }
}
</style>
