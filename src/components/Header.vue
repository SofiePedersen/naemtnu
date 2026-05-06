<script setup>

</script>

<template>
    <header>
        <img src="../assets/icons/header-logo.svg" alt="Logo" class="logo">
    </header>
</template>

<style lang="scss" scoped>
@import "../assets/main.scss";

header {
    display: flex;
    justify-content: start;
    background-color: $color-foam-blue;
    padding-top: 2rem;
}

.logo {
    margin-left: 1rem;
    margin-right: 18.75rem;
    margin-top: 2rem;
    margin-bottom: 3.75rem;
    // jeg gav rem på 4 fordi størrelsen ellers blev helt ødelagt //
    height: 4rem;
    width: 9.7rem;
}

</style>