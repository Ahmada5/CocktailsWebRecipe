<script setup>
  import NavbarSectionVue from "./components/NavbarSection.vue";
  import FooterSectionVue from "./components/FooterSection.vue";
</script>

<template>
  <NavbarSectionVue/>
  <router-view></router-view>
  <FooterSectionVue/>
</template>