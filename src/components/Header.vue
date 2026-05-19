<script setup></script>

<template>
  <header>
    <img src="../assets/icons/header-logo.svg" alt="Logo" class="logo" />
  </header>
</template>

<style lang="scss" scoped>
@import "../assets/main.scss";

header {
  display: flex;
  justify-content: start;
  background-color: $color-foam-blue;
  padding-top: 1rem;
}

.logo {
  margin-left: 2rem;
  margin-right: 18.75rem;
  margin-bottom: 3.75rem;
  // jeg gav rem på 4 fordi størrelsen ellers blev helt ødelagt //
  height: 4rem;
  width: 9.7rem;
}

/* ─── Tablet ───────────────────────────────── */

@media (min-width: 768px) {
  .logo {
    width: 13.25rem;
  }
}

/* ─── Desktop ─────────────────────────────── */

@media (min-width: 1200px) {
  header {
    padding-left: 9.375rem;
    padding-right: 9.375rem;
  }

  .logo {
    margin-left: 0rem;
  }
}
</style>
