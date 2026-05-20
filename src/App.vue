<script setup>
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import HeroSection from "./components/HeroSection.vue";
import Faq from "./components/Faq.vue";
import Contact from "./components/Contact.vue";
import Reviews from "./components/Reviews.vue";
import Packs from "./components/Packs.vue";
import SeoProcess from "./components/SeoProcess.vue";
import NEWHeroSection from "./components/NEWHeroSection.vue";
</script>

<template>
  <main>
    <Header />
    <!-- <HeroSection /> -->
    <NEWHeroSection />
    <SeoProcess />
    <Packs />
    <Reviews />
    <Faq />
    <Contact />
    <Footer />
  </main>
</template>

<style scoped></style>
