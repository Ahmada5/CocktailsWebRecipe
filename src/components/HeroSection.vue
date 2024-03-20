<template>
    <v-responsive class="Hero  align-center justify-center h-screen">
      <div class="Hero-banner">
        <div class="banner-overlay"></div>
      </div>
      <div class="d-flex mr-16">
        <v-div class="font-Hero d-flex align-end ml-16 flex-column">
          <h1 class="font-italic text-end text-white">Sip, Shake, and Stir Up Your Cocktail Creativity with Recipe Around the World!</h1>\
          <h1 class="font-italic text-white text-h6 mt-n8">~CoctailsClubs~</h1>
        </v-div>
      </div>
      
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
    .font-Hero{
      font-family: 'Times New Roman', Times-New-Roman;    
      width: 60vh;
      height: 30vh;
      
    }
  </style>