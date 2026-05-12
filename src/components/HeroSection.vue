<script setup>
import { ref } from 'vue';


const apiKey = import.meta.env.VITE_API_TOKEN;
const apiEndpoint = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://web.dev/&key=${apiKey}`;
const targetUrl = ref('');
const resultData = ref(null);
const isLoading = ref(false);


const fetchPageSpeedData = async () => {
    const url = new URL(apiEndpoint);
    url.searchParams.set('url', targetUrl.value);
    url.searchParams.set('key', apiKey);

    isLoading.value = true;

    try {
        const response = await fetch(url);
        resultData.value = await response.json();
        console.log(resultData.value);
    } catch (error) {
        console.error('Error fetching PageSpeed data:', error);
    } finally {
        isLoading.value = false;
    }
};


</script>

<template>
    <main>
        <div class="HeroSection" v-if="resultData">
            <h2 class="HeroSection__text__h1">Resultater:</h2>
                <div class="HeroSection__circle__wrapper">
                    <div class="HeroSection__circle__outer">
                        <div class="HerosSection__circle__inner">
                            <div id="number">
                                <p>{{ Math.round(resultData.lighthouseResult.categories.performance.score * 100) }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <svg width="400px" height="400px">
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style="stop-color:#4CAF50; stop-opacity:1" />
                            <stop offset="100%" style="stop-color:#8BC34A; stop-opacity:1" />
                        </linearGradient>
                    </defs>
                    <circle cx="200px" cy="200px" r="185" />
                </svg>
            <p>{{ Math.round(resultData.lighthouseResult.categories.performance.score * 100) }}</p>
        </div>
        <div v-if="isLoading" class="HeroSection">
            <span class="loader"></span>
            <p>Indlæser din seo, vent venligst...</p>
        </div>
        <div class="HeroSection">    
            <h1 class="HeroSection__text__h1">Tjek Din Hjemmesides SEO</h1>
            <p class="HeroSection__text__p">Find ud af, hvordan din hjemmeside rangerer i søgninger og få tips til forbedring.</p>
        </div>
        <p class="HeroSection__text__pbold">Link til hjemmeside:</p>
        <div class="HeroSection__button--SEO">
            <input type="text" v-model="targetUrl" @keydown.enter="fetchPageSpeedData" placeholder="Indsæt linket til den side du vil teste..." />
            <button class="btn__green" type="submit" :disabled="isLoading" id="submit-btn" @click="fetchPageSpeedData">{{ isLoading ? 'Indlæser...' : 'Tjek min SEO' }}</button>
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

.HeroSection__circle__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25rem;
    height: 25rem;
    position: relative;
}

.HeroSection__circle__outer {
    width: 25rem;
    height: 25rem;
    box-shadow: -1px -1px 5px 0px rgba(0, 0, 0, 0.25), 3px 3px 5px 0px rgba(0, 0, 0, 0.25);
    border-radius: 50%;
    padding: 1.875rem;
}

.HeroSection__circle__inner {
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: inset -1px -1px 5px 0px rgba(0, 0, 0, 0.25), inset 3px 3px 5px 0px rgba(0, 0, 0, 0.25);
    width: 21.25rem;
    height: 21.25rem;
    border-radius: 50%;
}

#number { 
    font-size: 2.5rem;
    font-weight: 400;
    color: $color-kelp-green;
}

svg {
    position: absolute;
}

circle {
    fill: none;
    stroke: url(#gradient);
    stroke-width: 1.875rem;
    stroke-dasharray: 1165;
    stroke-dashoffset: 200;
    stroke-linecap: round;
    animation: anim 1s ease forwards;
}

@keyframes anim {
    100% {
        stroke-dashoffset: 407.75;
    }
}

.loader {
      width: 25rem;
      height: 25rem;
      border-radius: 50%;
      position: relative;
      animation: rotate 1s linear infinite
    }
    .loader::before {
      content: "";
      box-sizing: border-box;
      position: absolute;
      inset: 0px;
      border-radius: 50%;
      border: 5px solid #FFF;
      animation: prixClipFix 2s linear infinite ;
    }

    @keyframes rotate {
      100%   {transform: rotate(360deg)}
    }

    @keyframes prixClipFix {
        0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
        25%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
        50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
        75%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)}
        100% {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)}
    }
</style>