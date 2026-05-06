<script setup></script>

<template>
  <footer class="footer">
    <div class="footer-content">
      <p class="footer-description">
        Vi udvikler professionelle hjemmesider, webshops og SEO-løsninger til
        små og mellemstore virksomheder. Vi er der for dig før, under og efter.
      </p>

      <p class="footer-description">
        Samarbejdet med os er næmt - fordi vi tager det svære på os
      </p>

      <!-- Kontaktoplysninger -->
      <p class="footer-contact">
        <strong>Kontoret:</strong>
        <br />
        Brandts Passage 29, 1. sal
        <br />
        5000 Odense C
        <br />
        <strong>Telefon:</strong> +45 60 46 44 56
        <br />
        <strong>Email:</strong>
        <a href="mailto:kontakt@naemt.nu">kontakt@naemt.nu</a>
      </p>

      <div class="footer-legal">
        <p>
          <strong>CVR:</strong> 45086569 | <strong>Reg. nr.:</strong> 6845 |
          <strong>Kontonr.:</strong> 2578476
        </p>
        <div class="footer-links">
          <a href="/privatlivspolitik">Privatlivspolitik</a> |
          <a href="/cookiepolitik">Cookiepolitik</a> |
          <a href="/sitemap">Sitemap</a>
        </div>
      </div>

      <div class="footer-social">
        <a href="https://www.facebook.com" target="_blank"
          ><img src="facebook-icon.png" alt="Facebook"
        /></a>
        <a href="https://www.instagram.com" target="_blank"
          ><img src="instagram-icon.png" alt="Instagram"
        /></a>
        <a href="https://www.youtube.com" target="_blank"
          ><img src="youtube-icon.png" alt="YouTube"
        /></a>
      </div>

      <div class="footer-smv">
        <p>Medlem af <strong>SMV Danmark</strong></p>
      </div>

      <p class="footer-copyright">
        næmt.nu © 2026 · Alle rettigheder forbeholdes
      </p>
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
