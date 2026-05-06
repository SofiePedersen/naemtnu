<script setup>

</script>

<template>
    <main>
        <div class="HeroSection">    
            <h1 class="HeroSection__text__h1">Tjek Din Hjemmesides SEO</h1>
            <p class="HeroSection__text__p">Find ud af, hvordan din hjemmeside rangerer i søgninger og få tips til forbedring.</p>
            <h5 class="HeroSection__text__h5">Link til hjemmeside</h5>
        </div>
        <div class="HeroSection__button--SEO">
            <input type="text" placeholder="Indsæt linket til den side du vil teste..." />
            <button>Tjek min SEO</button>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@import "../assets/main.scss";

.HeroSection {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    text-align: start;
    padding: 2rem;
    background-color: $color-foam-blue;
}

.HeroSection__text__h1 {
    color: $color-kelp-green;
    margin-bottom: 1rem;
    margin-right: 18.75rem;
}

.HeroSection__text__p {
    color: $color-kelp-green;
    margin-bottom: 2rem;
    margin-right: 5rem;
    margin-top: 1.3rem;
}

.HeroSection__text__h5 {
    color: $color-kelp-green;
    margin-bottom: 0.5rem;
    font-weight: 450;
}

.HeroSection__button--SEO {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: $color-foam-blue;
}

input {
    padding: 0.8rem;
    border: 1px solid black;
    border-radius: 20px;
    margin-right: 1rem;
}

button {
    padding: 0.8rem 1rem;
    background-color: $color-kelp-green;
    color: white;
}

</style>