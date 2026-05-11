<script setup>
import { ref } from 'vue';


const apiKey = import.meta.env.VITE_API_TOKEN;
const apiEndpoint = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://web.dev/&key=${apiKey}`;
const targetUrl = ref('');
const resultData = ref(null);


const fetchPageSpeedData = async () => {
    const url = new URL(apiEndpoint);
    url.searchParams.set('url', targetUrl.value);
    url.searchParams.set('key', apiKey);

    try {
        const response = await fetch(url);
        resultData.value = await response.json();
        console.log(resultData.value);
    } catch (error) {
        console.error('Error fetching PageSpeed data:', error);
    }
};
</script>

<template>
    <main>
        <div class="HeroSection" v-if="resultData">
            <h2 class="HeroSection__text__h1">Resultater:</h2>
            <figure class="charts">
                <div>
                    <div class="pie"></div>
                    <div class="pie donut"></div>
                    <figcaption class="HeroSection__text__fig">{{ Math.round(resultData.lighthouseResult.categories.performance.score * 100) }}</figcaption>
                </div>
            </figure>
        </div>
        <div class="HeroSection">    
            <h1 class="HeroSection__text__h1">Tjek Din Hjemmesides SEO</h1>
            <p class="HeroSection__text__p">Find ud af, hvordan din hjemmeside rangerer i søgninger og få tips til forbedring.</p>
        </div>
        <p class="HeroSection__text__pbold">Link til hjemmeside:</p>
        <div class="HeroSection__button--SEO">
            <input type="text" v-model="targetUrl" @keydown.enter="fetchPageSpeedData" placeholder="Indsæt linket til den side du vil teste..." />
            <button class="btn__green" type="submit" id="submit-btn" @click="fetchPageSpeedData">Tjek min SEO</button>
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

.HeroSection__text__fig {
    color: $color-kelp-green;
    font-family: "montserrat";
    margin-right: 5rem;
    margin-top: 1.3rem;
}

.HeroSection__text__pbold {
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
    width: 92%;
    font-size: 20px;
    margin-bottom: 0.5rem;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

.btn__green {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
}

.charts {
    display: flex;
    flex-direction: row;
    flex-flow: wrap;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;
}

.pie {
    flex: 1 0 225px;
    max-width: 325px;
    aspect-ratio: 1;
    border: 1px solid black;
    background-image: conic-gradient(
        #1c4d48 0% 80%,
        #e0e0e0 80% 100%
    );
}

.donut {
    background-image: radial-gradient(
        #e0e0e0 0% 40%,
        transparent 40% 70%,
        #e0e0e0 70%
    );
    border-radius: 50%;
    width: 150px;
    height: 150px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>