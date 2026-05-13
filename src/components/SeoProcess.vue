<script setup>

</script>

<template>
    <div class="seo-section">
        <h2 class="seo-section__title">Sådan er processen for din SEO optimering:</h2>

        <div class="seo-section__roadmap">
            <div class="seo-section__card">
                <div class="card__circle">
                    <p class="card__number">1</p>
                </div>

                <h3 class="card__title">Der sættes en kurs</h3>

                <p class="card__text">
                    Din hjemmeside flød rundt uden retning. 
                    Ingen så den, og ingen ankom. Så tog vi 
                    roret. Vi lagde en plan, satte kursen og 
                    gjorde rejsen klar mod højere synlighed. 
                    Fra drivtømmer til planlagt togt.
                    <br>
                    Næmt? Det bliver det.
                </p>
            </div>

            <div class="seo-section__arrow-wrapper">
                <img src="@/assets/icons/arrow-swirl-1.svg" alt="" class="seo-section__arrow--1" />
            </div>

            <div class="seo-section__card">
                <div class="card__circle">
                    <p class="card__number">2</p>
                </div>

                <h3 class="card__title">Sejlene bliver sat</h3>

                <p class="card__text">
                    Med SEO som kompas fandt vi retningen.
                    Vi satte sejlene med skarpe søgeord, målrettet
                    indhold og teknisk optimering. Din hjemmeside
                    blev gjort klar til at blive fundet og 
                    valgt. Kursen var sat mod synlighed.
                </p>
            </div>

            <div class="seo-section__arrow-wrapper">
                <img src="@/assets/icons/arrow-swirl-2.svg" alt="" class="seo-section__arrow--2" />
            </div>

            <div class="seo-section__card">
                <div class="card__circle">
                    <p class="card__number">3</p>
                </div>

                <h3 class="card__title">Sikker sejlads</h3>

                <p class="card__text">
                    Søgeordene greb vinden, og siden tog 
                    fart. Vi holdt hånden på roret, justerede
                    løbende og sikrede, at du blev synlig
                    og relevant. I dag er du ikke bare let 
                    at finde, du er svær at overse.
                </p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "../assets/main.scss";

.seo-section {
    padding: 4rem 1rem;
    display: flex;
    flex-direction: column;
}

.seo-section__title {
    color: $color-kelp-green;
    padding-bottom: 2.5rem;
}

.card__text {
    color: $color-charcoal-black;
}

.seo-section__arrow-wrapper {
    display: none;
}

.seo-section__roadmap {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.seo-section__card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    max-width: 23.125rem;
    padding-bottom: 4rem;
}

.seo-section__card:last-of-type {
    padding-bottom: 0rem;
}

.card__circle {
    background-color: $color-cloudy-white;
    width: 4.688rem;
    height: 4.688rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50rem;
    box-shadow: 0px 4px 4px rgba($color-kelp-green, 0.15);
}

.card__number {
    font-size: 2rem;
    font-family: "Comfortaa";
    font-weight: bold;
    color: $color-kelp-green;
}

.card__title {
    padding: 2rem 0rem;
    color: $color-kelp-green;
}

/*──────── Tablet ────────────────────────*/

    @media (min-width: 768px) {
        .seo-section__title {
            text-align: center;
        }

        .seo-section__card {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            max-width: 40rem;
            padding-bottom: 4rem;
            margin-top: 2.7rem;
        }

        .seo-section__card:first-of-type {
            margin-top: 0rem;
        }

        .seo-section__arrow-wrapper {
            display:flex;
            transform: rotate(90deg);
        }

        .seo-section__arrow--2,
        .seo-section__arrow--1 {
            width: 7.5rem;
        }

        .card__title {
            padding: 1.5rem 0rem;
        }
    }

/*──────── Desktop ────────────────────────*/
    @media (min-width: 1200px) {
        .seo-section {
            padding: 4rem 9.375rem;
            padding-bottom: 0rem;
        }

        .seo-section__roadmap {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: flex-start;
        }

        .seo-section__card {
            justify-content: flex-start;
            margin-top: 0rem;
            padding: 0rem;
            max-width: 30rem;
            height: 23rem;
        }

        .seo-section__arrow-wrapper {
            transform: rotate(0deg);
        }

        .seo-section__arrow--2,
        .seo-section__arrow--1 {
            width: 7rem;
        }
    }

</style>

