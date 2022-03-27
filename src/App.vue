<script setup>
import Header from './components/modules/Header.vue';
import Footer from './components/modules/Footer.vue';
</script>

<template>
<div>
  <Header />
    <router-view />
  <Footer />
</div>
</template>