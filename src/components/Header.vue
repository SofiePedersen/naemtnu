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
  padding-left: 1rem;
  padding-right: 1rem;
}

.logo {
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
}
</style>
