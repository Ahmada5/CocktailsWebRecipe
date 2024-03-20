<template>
    <v-row>
        <v-col class="h-30vh" style="background-color: #de872b;">
          <v-col class="gradient mb-n4">
            
          </v-col>
        </v-col>
    </v-row>
    <v-container fluid class="color-cor d-flex flex-column justify-center" >	
        <v-data-iterator
            class="color-cor mt-16 d-flex flex-column align-center justify-center"
            :items="cocktail"
            :items-per-page="5"
    >
             <template v-slot:default="{ items }" class="d-flex align-center" >
                     <v-row class=" d-flex justify-center align-center mt-0">
                         <v-col
                            class="d-flex justify-center"
                            v-for="item in items"
                            :key="item.idDrink"
                         >
                             <v-card
                                width="250"
                                elevation="16" 
                                class="border" 
                                style="background-color: #7c3209;">
                                <router-link :to="'/DrinksDetail/' + item.raw.idDrink">
                                    <v-img 
                                        :src="item.raw.strDrinkThumb" 
                                        cover
                                        aspect-ratio="1/1" 
                                        height='getImageHeight()'>
                                    </v-img>
                                </router-link>
                                    <v-list-item>
                                        <template v-slot:title>
                                            <strong class="no-decoration text-h6 mb-1 text-white d-flex justify-center">{{ item.raw.strDrink }}</strong>
                                        </template>
                                    </v-list-item>
                                
                             </v-card>
                         </v-col>
                     </v-row>
             </template>
                 
             <template v-slot:footer="{ page, pageCount, prevPage, nextPage }">
                 <div class="d-flex align-center justify-center mt-5" style="background-color: #7c3209;">
                     <v-btn
                         :disabled="page === 1"
                         icon="mdi-arrow-left"
                         density="comfortable"
                         variant="tonal"
                         rounded
                         @click="prevPage"
                         
                     ><span class="custom-icon mdi mdi-arrow-left"></span></v-btn>

                     <div class="mx-2 text-h6 text-white">
                         Page {{ page }} of {{ pageCount }}
                     </div>

                     <v-btn
                         :disabled="page >= pageCount"
                         icon='mdi-arrow-right'
                         density="comfortable"
                         variant="tonal"
                         rounded
                         @click="nextPage"
                     ><span class="custom-icon mdi mdi-arrow-right"></span></v-btn>
                 </div>
             </template>
   </v-data-iterator>
</v-container>
</template>

<script>
    import '@mdi/font/css/materialdesignicons.min.css'  
    export default {
        data() {
            return {
            cocktail: [],
            arowL:'mdi-arrow-right'
            };
        },
        async mounted() {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic';
            const options = {
                method: 'GET',
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json(); // Parse response as JSON
                this.cocktail = result.drinks; // Update recipes data
                console.log(result);
            } catch (error) {
                console.error(error);
            };
        }
    };
    
</script>

<style>
    .color-cor{
        background-color: #de872b;
    }
    .no-decoration {
        text-decoration: none; /* Remove underline */
        color: inherit; /* Inherit text color */
    }
    .custom-icon {
        color: white; /* Change this to the desired color */
    }
    .gradient{
        background: linear-gradient(to bottom, #b75e11, transparent);
    }

</style>