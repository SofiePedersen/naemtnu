<script setup>
// Vi importerer `ref` fra Vue, så vi kan oprette reaktive variabler.
// Reaktiv betyder at Vue automatisk opdaterer siden, når værdien ændrer sig.
import { ref } from "vue";

// Her opretter jeg en const som skal være mit reference punkt for om nogen spørgsmål er åbne.
// Jeg starter med at vælge null for at sige ingen af dem skal være åbne.
const activeId = ref(null);

// Her spørger jeg: matcher det klikkede spørgsmål det der allerede er åbent?
// Hvis ja (?) sæt activeId til null og luk spørgsmålet.
// Hvis nej (:) skift activeId til det nye id og åbn spørgsmålet.
//
// Dette kaldes et ternary udtryk. (forkort if/else statement)
function toggle(id) {
  activeId.value = activeId.value === id ? null : id;
}

// Her opretter jeg et array som indeholder informationen i vores accordion component.
const infoTabs = [
  {
    id: 1,
    question: "Hvad er jeres åbningstider?",
    answer:
      "Vi har åbent mandag–fredag fra 9 til 17. I weekenden er vi tilgængelige via e-mail.",
  },
  {
    id: 2,
    question: "Hvordan kommer jeg i kontakt med jer?",
    answer:
      "Du kan skrive til os på kontakt@eksempel.dk eller ringe på +45 12 34 56 78.",
  },
  {
    id: 3,
    question: "Hvad koster det at bruge jeres service?",
    answer:
      "Vi tilbyder en gratis prøveperiode i 14 dage. Herefter starter priserne fra 99 kr./md.",
  },
  {
    id: 4,
    question: "Kan jeg opsige når som helst?",
    answer:
      "Ja, du kan til enhver tid opsige dit abonnement uden bindingsperiode.",
  },
  {
    id: 5,
    question: "Hvad sker der med mine data?",
    answer:
      "Vi opbevarer dine data sikkert og deler dem aldrig med tredjepart. Læs mere i vores privatlivspolitik.",
  },
  {
    id: 6,
    question: "Tilbyder I support på dansk?",
    answer:
      "Ja, vores supportteam svarer på dansk og er tilgængeligt på alle hverdage.",
  },
];
</script>

<template>
  <main>
    <div class="faq-wrapper">
      <div class="faq-wrapper__image-wrapper">
        <img
          src="@/assets/images/tore-og-sebastian.webp"
          alt="Billedet viser Tore og Sebastian fra næmt.nu, som sidder og smiler ved en bærbar"
          class="faq-wrapper__image"
        />
      </div>

      <div class="faq-wrapper__accordion">
        <h2 class="faq-accordion__title">De spørgsmål vi oftest får:</h2>

        <!-- Loop over infoTabs arrayet. Hvert item har et id, question og answer -->
        <div v-for="tab in infoTabs" :key="tab.id" class="accordion-item">
          <!-- Kalder toggle() når man klikker. Klassen `is-open` tilføjes når dette item er det aktive. -->
          <button
            class="accordion-item__header"
            :class="{ 'is-open': activeId === tab.id }"
            @click="toggle(tab.id)"
          >
            <span>{{ tab.question }}</span>

            <div class="accordion-item__icon"></div>
          </button>

          <!-- v-show tjekker om dette spørgsmåls id matcher det aktive id. 
          Hvis det matcher, viser den svaret.
          Hvis nej skjuler den svaret ved at bruge (display: none). -->
          <div
            class="accordion-item__body"
            :class="{ 'is-open': activeId === tab.id }"
          >
            <p>{{ tab.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import "../assets/main.scss";

.faq-wrapper {
  padding: 4rem 1rem;
}

/* ─── Billede ────────────────────────────────────────────── */

.faq-wrapper__image-wrapper {
  display: none;
}

.faq-wrapper__image {
  width: 100%;
  height: 480px;
  object-fit: cover;
  border-radius: 1rem;
  display: block;
}

/* ─── Accordion ──────────────────────────────────────────── */

.faq-wrapper__accordion {
  width: 100%;
}

.faq-accordion__title {
  margin-bottom: 2rem;
  color: $color-kelp-green;
}

.accordion-item {
  border-bottom: 1px solid $color-kelp-green;
}

.accordion-item__header {
  width: 100%;
  background: none;
  border: none;
  display: flex;
  padding: 1.125rem 0rem;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: color 0.2s;
  text-align: left;

  font-size: 1rem;
  font-family: $font-comfortaa;
  color: $color-kelp-green;
  font-weight: bold;
}

/*──────── Accordion-ikonet ────────────────────────*/

.accordion-item__icon {
  width: 1.75rem;
  height: 1.75rem;
  flex-shrink: 0;
  border-radius: 50%;
  background-color: #1c4d48;
  position: relative;
}

/* Oprettelse af pseudo element */
.accordion-item__icon::before,
.accordion-item__icon::after {
  content: "";
  position: absolute;
  background-color: white;
  top: 50%;
  left: 50%;
  transition: transform 0.15s ease;
}

/* Vandret streg */
.accordion-item__icon::before {
  width: 12px;
  height: 2px;
  transform: translate(-50%, -50%);
}

/* Lodret streg */
.accordion-item__icon::after {
  width: 2px;
  height: 12px;
  transform: translate(-50%, -50%);
}

/* Når åben: begge streger roterer 45° → danner et X */
.accordion-item__header.is-open .accordion-item__icon::before,
.accordion-item__header.is-open .accordion-item__icon::after {
  transform: translate(-50%, -50%) rotate(45deg);
}

/*──────── Accordion indhold ────────────────────────*/

.accordion-item__body {
  max-height: 0rem;
  overflow: hidden;
  transition: max-height 0.2s ease-in;
}

.accordion-item__body.is-open {
  max-height: 3rem;
  transition: max-height 0.25s ease-out;
}

.accordion-item__body p {
  margin-bottom: 1rem;
  color: $color-charcoal-black;
}

/*──────── Tablet ────────────────────────*/

@media (min-width: 768px) {
  .faq-wrapper__image-wrapper {
    display: block;
    margin-bottom: 3rem;
  }

  .faq-wrapper__image {
    width: 100%;
    height: 25rem;
    object-fit: cover;
    border-radius: 0.75rem;
  }
}

/*──────── Desktop ────────────────────────*/
@media (min-width: 1200px) {
  .faq-wrapper {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    gap: 2.5rem;
    padding: 4rem 9.375rem;
  }

  .faq-wrapper__image-wrapper {
    margin: 0;
  }

  .faq-wrapper__image {
    height: 30rem;
  }

  .faq-wrapper__accordion {
    flex: 1;
    min-width: 0;
  }
}
</style>
