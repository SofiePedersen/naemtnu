<script setup>
import Facebook from "@/assets/icons/facebook.svg";
import Instagram from "@/assets/icons/instagram.svg";
import Linkedin from "@/assets/icons/linkedin.svg";
import Youtube from "@/assets/icons/youtube.svg";
import Logo from "@/assets/images/header-logo.webp";
</script>

<template>
  <footer class="footer">
    <div class="footer-content">
      <img :src="Logo" alt="næmt.nu" class="logo" />
      <p class="footer-description">
        Vi udvikler professionelle hjemmesider, webshops og SEO-løsninger til
        små og mellemstore virksomheder. Vi er der for dig før, under og efter.
      </p>

      <p class="footer-description">
        Samarbejdet med os er næmt - fordi vi tager det svære på os
      </p>

      <div class="footer-contact">
        <p>Kontoret:</p>
        <p>Brandts Passage 29, 1. sal</p>
        <p>5000 Odense C</p>
        <p>Tlf.: +45 60 46 44 56</p>
        <a href="mailto:kontakt@naemt.nu">kontakt@naemt.nu</a>
      </div>

      <div class="footer-legal">
        <p>CVR: 45086569</p>
        <p>Reg. nr.: 6845</p>
        <p>Kontonr.: 2578476</p>
        <div class="footer-links">
          <a href="/privatlivspolitik">Privatlivspolitik</a> |
          <a href="/cookiepolitik">Cookiepolitik</a> |
        </div>
      </div>

      <div class="footer-social">
        <a href="https://www.facebook.com" target="_blank">
          <img :src="Facebook" alt="Facebook" />
        </a>
        <a href="https://www.instagram.com" target="_blank">
          <img :src="Instagram" alt="Instagram" />
        </a>
        <a href="https://www.linkedin.com" target="_blank">
          <img :src="Linkedin" alt="LinkedIn" />
        </a>
        <a href="https://www.youtube.com" target="_blank">
          <img :src="Youtube" alt="YouTube" />
        </a>
      </div>

      <p class="footer-copyright">
        næmt.nu © 2026 · Alle rettigheder forbeholdes
      </p>
      <a href="/sitemap">Sitemap</a>
      <div class="footer-smv">
        <p>Medlem af SMV Danmark</p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import "../assets/main.scss";
.footer {
  background-color: $color-kelp-green;
  color: $color-cloudy-white;
}
</style>
