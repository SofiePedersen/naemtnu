<script setup>
import { ref } from 'vue';
import { computed } from 'vue';


const apiKey = import.meta.env.VITE_API_TOKEN;
const apiEndpoint = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://web.dev/&key=${apiKey}`;
const targetUrl = ref('');
const resultData = ref(null);
const isLoading = ref(false);
const number = ref(0);
const CIRCUMFERENCE = 911; 
let intervalId = null;

const reloadPage = () => {
  window.location.reload();
};

intervalId = setInterval(() => {
    if (resultData.value) {
        const score = Math.round(resultData.value.lighthouseResult.categories.performance.score * 100);
        if (number.value < score) {
            number.value += 1;
        }
    }
}, 20);

const currentOffset = computed(() => {
    return CIRCUMFERENCE - (number.value / 100) * CIRCUMFERENCE;
});

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
        <div class="HeroSection__wrapper">
            <div class="HeroSection" v-if="!resultData && !isLoading">    
                <h1 class="HeroSection__text__h1">Tjek Din Hjemmesides SEO</h1>
                <p class="HeroSection__text__p">Find ud af, hvordan din hjemmeside rangerer i søgninger og få tips til forbedring.</p>
            </div>
            <div class="HeroSection" v-if="resultData">
                <h2 class="HeroSection__text__h1">Hvad betyder din score?</h2>
                <p class="HeroSection__text__p">Dit fundament er lagt, men der er altid plads til optimering. Ved at finjustere dit indhold og styrke din tekniske SEO, kan vi sikre, at din forretning bliver fundet af de helt rigtige kunder, når de søger efter dine ydelser.</p>
                    <div class="wrapper">
                        <div class="outer">
                            <div class="inner">
                                <div id="number">{{ number }}</div>
                            </div>
                        </div>
                        <svg width="20rem" height="20rem" viewBox="0 0 320 320">
                            <circle cx="160" cy="160" r="145" :style="{ strokeDashoffset: currentOffset }" />
                        </svg>
                    </div>
                <h2 class="HeroSection__text__h2">SEO Score</h2>
            </div>
            <div v-if="isLoading" class="HeroSection">
                <span class="loader"></span>
            </div>
            <div class="HeroSection__button--SEO">
                <p v-if="!resultData && !isLoading" class="HeroSection__text__pbold">Link til hjemmeside:</p>
                <input v-if="!resultData && !isLoading" type="text" v-model="targetUrl" @keydown.enter="fetchPageSpeedData" placeholder="Indsæt dit fulde link her..." />
                <button v-if="!resultData" class="btn__green" type="submit" :disabled="isLoading" id="submit-btn" @click="fetchPageSpeedData">{{ isLoading ? 'Indlæser...' : 'Tjek min SEO' }}</button>
                <a href="https://www.linkedin.com/company/naemt-nu/posts/?feedView=all"><button v-if="resultData" class="btn__green" type="submit" :disabled="isLoading" id="submit-btn">Kontakt os</button></a>
                <button v-if="resultData" class="btn__white" type="submit" id="submit-btn" @click="reloadPage">Søg igen</button>
            </div>
        </div>
    </main>
</template>



<style lang="scss" scoped>
@import "../assets/main.scss";

.HeroSection {
    display: flex;
    flex-direction: column;
    padding-left: 1rem;
    padding-right: 1rem;
    background-color: $color-foam-blue;
}

.HeroSection__image {
    display: none;
    position: relative;
    transform: rotateY(180deg);
}

.HeroSection__text__h1 {
    text-align: start;
    color: $color-kelp-green;
    margin-bottom: 1rem;
    margin-right: 1rem;
    padding-top: 2rem;
}

.HeroSection__text__h2 {
    color: $color-kelp-green;
    text-align: center;
}

.HeroSection__text__p {
    color: $color-kelp-green;
    margin-top: 1.3rem;
}

.HeroSection__text__link {
    background-color: $color-foam-blue;
}

.HeroSection__button--SEO {
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 3rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: $color-foam-blue;
    padding-bottom: 4rem;
}

.HeroSection__text__pbold {
    color: $color-kelp-green;
    justify-content: start;
    padding-top: 2rem;
    padding-bottom: 1rem;
    font-weight: 450;
}

input {
    font-family: 'Montserrat';
    font-style: italic;
    padding: 1.5rem;
    border: 1px solid $color-kelp-green;
    border-radius: 50px;
    width: 100%;
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    box-shadow: 4px 4px 4px rgba($color-kelp-green, 0.15);
}

.btn__green {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.btn__white {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    justify-content: center;
    align-items: center;
}

.wrapper {
    width: 20rem;
    height: 20rem;
    margin-top: 3rem;
    margin-left: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-bottom: 2rem;
}

.outer {
    box-sizing: border-box;
    width: 20rem;
    height: 20rem;
    box-shadow: -1px -1px 5px 0px rgba(0, 0, 0, 0.25), 3px 3px 5px rgba(0, 0, 0, 0.25);
    border-radius: 50%;
    padding: 1.875rem;
}

.inner {
    width: 16.25rem;
    height: 16.25rem;
    box-shadow: inset -1px -1px 5px 0px rgba(0, 0, 0, 0.25), inset 3px 3px 5px rgba(0, 0, 0, 0.25);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

#number {
    font-size: 5rem;
    font-family: 'montserrat', sans-serif;
    font-weight: 400;
    color: $color-kelp-green;
}

svg {
    position: absolute;
}

circle {
    fill: none;
    stroke: $color-kelp-green;
    stroke-width: 30;
    stroke-dasharray: 911;
    stroke-linecap: round;
    transform: rotate(-90deg);
    transform-origin: center;
    animation: anim 1s ease forwards;
}

.loader {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 3.5rem;
      margin-right: 2rem;
      margin-bottom: 3rem;
      width: 15rem;
      height: 15rem;
      border-radius: 50%;
      position: relative;
      animation: rotate 1s linear infinite;
    }
    .loader::before {
      content: "";
      box-sizing: border-box;
      position: absolute;
      inset: 0px;
      border-radius: 50%;
      border: 5px solid $color-kelp-green;
      animation: prixClipFix 2s linear infinite;
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

@media (max-width: 360px) {
    .HeroSection {
        padding: 1;
        padding-left: 1rem;
    }
}

@media (min-width: 768px) {
        .wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .HeroSection__button--SEO {
            padding-left: 1rem;
            padding-right: 1rem;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            background-color: $color-foam-blue;
            padding-bottom: 4rem;
        }

        input {
            width: 50%;
        }

        .HeroSection__text__pbold {
            align-items: start;
        }

        .btn__green {
            align-items: center;
            justify-content: center;
        }

        .btn__white {
            align-items: center;
            justify-content: center;
        }


}

@media (min-width: 1200px) {

        .HeroSection {
            padding: 0;
        }

        .HeroSection__image {
            display: flex;
            position: absolute;
            justify-content: end;
        }

        .HeroSection__text__p {
            display: flex;
            flex-direction: column;
            margin-left: 9.375rem;
        }
    
        .HeroSection__button--SEO {
            justify-content: start;
            padding-left: 9.375rem;
            flex-direction: row;
            align-items: start;
            padding-bottom: 10rem;
        }

        .HeroSection__text__pbold {
            padding-left: 0;
        }

        .HeroSection__text__h1 {
            margin-left: 9.375rem;
        }

        .HeroSection__text__h2 {
            margin-right: 9.375rem;
            text-align: end;
        }

        .loader {
            margin-left: 11rem;
        }

        .wrapper {
            text-align: end;
            display: flex;
            padding-left: 50rem;
            margin-right: 9.375rem;
        }
    }
</style>