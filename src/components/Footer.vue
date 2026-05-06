<script setup>
import Facebook from "@/assets/icons/facebook.svg";
import Instagram from "@/assets/icons/instagram.svg";
import Linkedin from "@/assets/icons/linkedin.svg";
import Youtube from "@/assets/icons/youtube.svg";
import Logo from "@/assets/images/header-logo.webp";
import SMVDanmark from "@/assets/images/medlem_af_smvdanmark_white.webp";
</script>

<template>
  <footer>
    <div class="footer__content">
      <img :src="Logo" alt="næmt.nu" class="footer__content--logo" />

      <div class="footer-separator"></div>

      <div class="footer__content--description">
        <p>
          Vi udvikler professionelle hjemmesider, webshops og SEO-løsninger til
          små og mellemstore virksomheder. Vi er der for dig før, under og
          efter.
        </p>
        <p>Samarbejdet med os er næmt - fordi vi tager det svære på os</p>
      </div>

      <div class="footer__content--contact">
        <h4>Kontoret:</h4>

        <div class="footer__content--address">
          <p>Brandts Passage 29, 1. sal</p>
          <p>5000 Odense C</p>
        </div>

        <p>Tlf.: +45 60 46 44 56</p>
        <a href="mailto:kontakt@naemt.nu">kontakt@naemt.nu</a>
      </div>

      <div class="footer__content--legal">
        <p>CVR: 45086569</p>
        <p>Reg. nr.: 6845</p>
        <p>Kontonr.: 2578476</p>
      </div>

      <div class="footer__content--social">
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

      <div class="footer__content--links">
        <a href="/privatlivspolitik">Privatlivspolitik</a>
        <a href="/cookiepolitik">Cookiepolitik</a>
      </div>

      <div class="footer-separator"></div>

      <p class="footer__content--copyright">
        næmt.nu © 2026 · Alle rettigheder forbeholdes
      </p>
      <a href="/sitemap">Sitemap</a>
      <div class="footer__content--smv">
        <img :src="SMVDanmark" alt="medlem af SMVdanmark" />
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import "../assets/main.scss";
footer {
  background-color: $color-kelp-green;
  color: $color-cloudy-white;
  padding: 1rem;
}

.footer__content--logo {
  height: auto;
  width: 9.7rem;
  filter: invert(100%) brightness(200%);
}

.footer-separator {
  width: 100%;
  height: 1px;
  background-color: $color-cloudy-white;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.footer__content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer__content--description {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer__content--contact {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  a {
    text-decoration: underline;
  }
}

.footer__content--social {
  width: 16rem;
  display: flex;
  gap: 2rem;

  img {
    width: 2.25rem;
    height: 2.25rem;
    color: $color-foam-blue;
  }
}

.footer__content--links {
  display: flex;
  gap: 2rem;
}

.footer__content--smv {
  width: 100%;
  img {
    width: 12.5rem;
    height: auto;
  }
}
</style>
