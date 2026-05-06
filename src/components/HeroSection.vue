<script setup>

const apiKey = import.meta.env.VITE_API_TOKEN;
const apiEndpoint = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://web.dev/&key=${apiKey}`;
const targetUrl = 'https://web.dev/';

const url = new URL(apiEndpoint);
url.searchParams.set('url', targetUrl);

const fetchPageSpeedData = async (event) => {
    if (event.key === 'Enter') {
    event.preventDefault();
    const response = await fetch(url);
    console.log(Result.value);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const json = await response.json();
    } 
  };

</script>

<template>
    <main>
        <div class="HeroSection">    
            <h1 class="HeroSection__text__h1">Tjek Din Hjemmesides SEO</h1>
            <p class="HeroSection__text__p">Find ud af, hvordan din hjemmeside rangerer i søgninger og få tips til forbedring.</p>
        </div>
        <h5 class="HeroSection__text__h5">Link til hjemmeside:</h5>
        <div class="HeroSection__button--SEO">
            <input type="text" placeholder="Indsæt linket til den side du vil teste..." />
            <button type="submit" id="submit-btn">Tjek min SEO</button>
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
    margin-right: 5rem;
    margin-top: 1.3rem;
}

.HeroSection__text__h5 {
    color: $color-kelp-green;
    padding-left: 2rem;
    padding-bottom: 1rem;
    font-weight: 450;
    background-color: $color-foam-blue;
}

.HeroSection__button--SEO {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: $color-foam-blue;
    padding-bottom: 4rem;
}

input {
    padding: 2rem;
    border: 1px solid black;
    border-radius: 50px;
    width: 34rem;
    font-size: 20px;
    margin-bottom: 0.5rem;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

button {
    padding-left: 5rem;
    padding-right: 5rem;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    background-color: $color-kelp-green;
    color: white;
    margin-bottom: 1rem;
    margin-top: 1rem;
}

</style>