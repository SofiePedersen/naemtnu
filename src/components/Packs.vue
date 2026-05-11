<script setup>

</script>

<template>
    <section class="pricing">
        
        <h2 class="pricing__title">Kom foran dine konkurrenter med en SEO-aftale</h2>

        <div class="pricing__wrapper">
            <div class="pricing__packs">
                <div class="pricing__pack-wrapper">
                    <div class="pricing__pack">
                        <h3 class="pack__name">1-5 Søgeord</h3>
                        <p class="pack__subtitle">Alt til nyopstartet</p>

                        <ul class="pack__list">
                            <li class="pack__item pack__item--check">Løbende SEO analyse af din hjemmeside</li>
                            <li class="pack__item pack__item--check">Optimering af indhold, billeder og tekster</li>
                            <li class="pack__item pack__item--check">Optimering af SEO-titler og meta-beskrivelser</li>
                            <li class="pack__item pack__item--check">Oprettelse af nyt indhold</li>
                            <li class="pack__item pack__item--check">Konverteringsoptimering</li>
                            <li class="pack__item pack__item--check">On-page linkbuilding</li>
                            <li class="pack__item pack__item--check">Lokal SEO</li>
                            <li class="pack__item pack__item--plus">Mulighed for: Webshopoptimering</li>
                            <li class="pack__item pack__item--plus">Mulighed for: Off-page linkbuilding</li>
                            <li class="pack__item pack__item--plus">Giver 50% rabat på serviceaftale</li>
                        </ul>

                        <div class="pack__price">
                            <p><span class="pack__price-amount">6.000,- kr.</span></p>
                            <p class="pack__price-note">om året pr. søgeord ex. moms</p>
                        </div>
                    </div>

                    <button class="btn__green">Få kunder igennem google!</button>
                </div>

                <div class="pricing__pack-wrapper">
                    <div class="pricing__pack">
                        <h3 class="pack__name">+5 Søgeord</h3>
                        <p class="pack__subtitle">Alt du skal bruge</p>

                        <ul class="pack__list">
                            <li class="pack__item pack__item--check">Løbende SEO analyse af din hjemmeside</li>
                            <li class="pack__item pack__item--check">Optimering af indhold, billeder og tekster</li>
                            <li class="pack__item pack__item--check">Optimering af SEO-titler og meta-beskrivelser</li>
                            <li class="pack__item pack__item--check">Oprettelse af nyt indhold</li>
                            <li class="pack__item pack__item--check">Konverteringsoptimering</li>
                            <li class="pack__item pack__item--check">On-page linkbuilding</li>
                            <li class="pack__item pack__item--check">Lokal SEO</li>
                            <li class="pack__item pack__item--plus">Mulighed for: Webshopoptimering</li>
                            <li class="pack__item pack__item--plus">Mulighed for: Off-page linkbuilding</li>
                            <li class="pack__item pack__item--plus">Giver 50% rabat på serviceaftale</li>
                        </ul>

                        <div class="pack__price">
                            <p><span class="pack__price-amount">3.600,- kr.</span></p>
                            <p class="pack__price-note">om året pr. søgeord ex. moms</p>
                        </div>
                    </div>

                    <button class="btn__green">Kom foran konkurrenterne!</button>
                </div>

            </div>

            <div class="pricing__image-wrapper">
                <img src="@/assets/images/tore.webp" alt="Tore fra næmt.nu står og smiler" class="pricing__image" />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import "../assets/main.scss";

.pricing {
    padding: 4rem 1rem;
    background-color: $color-foam-blue;
}

.pricing__title {
    color: $color-kelp-green;
    margin-bottom: 2rem;
}

.pricing__wrapper {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

/* ─── Pakkerne ───────────────────────────────────────────── */

    .pricing__packs {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .pricing__pack-wrapper {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

/* ─── Enkelt pakke kort ──────────────────────────────────── */

    .pricing__pack {
        background-color: $color-cloudy-white;
        border-radius: 1rem;
        padding: 1.5rem;
        border: 1px solid $color-kelp-green;
        box-shadow: 4px 4px 4px rgba($color-kelp-green, 0.15);
    }

    .pack__name {
        color: $color-kelp-green;
        text-align: center;
        margin-bottom: 1rem;
        font-weight: bold;
    }

    .pack__subtitle {
        font-family: $font-comfortaa;
        font-size: 1.125rem;
        color: $color-kelp-green;
        margin-bottom: 1.25rem;
        text-align: center;
        font-weight: bold;
    }

/* ─── Liste ──────────────────────────────────────────────── */

    .pack__list {
        list-style: none;
        margin-bottom: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 0.9rem;
    }

    .pack__item {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        color: $color-charcoal-black;
    }

    .pack__item {
        position: relative;
    }

    .pack__item::before {
        content: '';
        flex-shrink: 0;
        width: 1.9rem;
        height: 1.9rem;
        border-radius: 100%;
        background-color: $color-kelp-green;
    }

    .pack__item::after {
        content: '';
        position: absolute;
        left: 0.29rem;
        top: 50%;
        transform: translateY(-50%);
        width: 1.25rem;
        height: 1.25rem;
        background-size: 70%;
        background-repeat: no-repeat;
        background-position: center;
    }

    /* Checkmark SVG */
    .pack__item--check::after {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'/%3E%3C/svg%3E");
    }

    /* Plus SVG */
    .pack__item--plus::after {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='3' stroke-linecap='round'%3E%3Cline x1='12' y1='5' x2='12' y2='19'/%3E%3Cline x1='5' y1='12' x2='19' y2='12'/%3E%3C/svg%3E");
    }

/* ─── Pris ───────────────────────────────────────────────── */

    .pack__price {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
    }

    .pack__price-amount {
        font-size: 1.75rem;
        font-weight: 700;
        color: $color-charcoal-black;
    }

    .pack__price-note {
        color: $color-charcoal-black;
        opacity: 0.7;
    }

/* ─── Billede ──────────────────────────── */

    .pricing__image-wrapper {
        display: none;
    }

    .pricing__image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top;
    }

/* ─── Tablet ───────────────────────────────── */

@media (min-width: 768px) {
    .pricing__packs {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
    }

    .pricing__title {
        text-align: center;
    }
}

/* ─── Desktop ─────────────────────────────── */

@media (min-width: 1200px) {

    .pricing {
        padding: 4rem 2rem;
        background-color: $color-cloudy-white;
    }

    .pricing__title {
        text-align: center;
        margin-bottom: 2.5rem;
    }

    .pricing__wrapper {
        flex-direction: row;
        align-items: flex-start;
        background-color: $color-foam-blue;
        border-radius: 1.5rem;
        max-width: 100rem;
        margin: 0 auto;
        overflow: visible;
        position: relative;
    }

    .pricing__pack {
        border: none;
    }

    .pricing__packs {
        flex: 1;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
    }

    .pricing__image-wrapper {
        display: block;
        flex: 0 0 32rem;
        align-self: flex-end;
        margin-right: -3rem;
        margin-bottom: -5px;
    }

    .pricing__image {
        width: 100%;
        height: auto;
        object-fit: contain;
        object-position: bottom;
    }

    .pricing__pack-wrapper {
        padding: 2.5rem;
        justify-content: space-between;
    }

    .pricing__pack-wrapper:first-of-type {
        padding-right: 0rem;
    }

    .pricing__pack-wrapper:last-of-type {
        padding: 0rem;
        padding-top: 2.5rem;
        padding-bottom: 2.5rem;
    }

    .btn__green{
        font-size: 0.92rem;
    }
}
</style>