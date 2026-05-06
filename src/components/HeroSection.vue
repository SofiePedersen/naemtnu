<script setup>

</script>

<template>
    <main>
        <div class="HeroSection">    
        <h1 class="HeroSection__headline__text">Tjek Din Hjemmesides SEO</h1>
            <p class="HeroSection__paragraph__text">Find ud af, hvordan din hjemmeside rangerer i søgninger og få tips til forbedring.</p>
        </div>
    </main>
</template>

<style scoped>
@import "../assets/main.scss";

.HeroSection {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    text-align: start;
    padding: 2rem;
}

.HeroSection__headline__text {
    font-family: 'Comfortaa', sans-serif;
    font-size: 3.5rem;
    color: $color-kelp-green;
    margin-bottom: 1rem;
}

.HeroSection__paragraph__text {
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
    margin-bottom: 2rem;
}

</style>