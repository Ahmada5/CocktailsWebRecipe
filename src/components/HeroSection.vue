<template>
    <v-responsive class="Hero  align-center justify-center h-screen">
      <div class="Hero-banner">
        <div class="banner-overlay"></div>
      </div>
      <v-div class="d-flex align-center justify-center" >
        <h1 >This is Hero section</h1>
      </v-div>
    </v-responsive>
    <DrinksMain/>
  </template>
  
  <script>
    import DrinksMain from "../views/DrinksMain.vue";
    export default {
      components: {
        DrinksMain
      }
    };
  </script>
  
  <style scoped>
    .Hero{
      background: url('https://img.hotimg.com/photo-1629993193599-b8528703adb0.jpeg');
      background-position-x: center;
    }
  </style>