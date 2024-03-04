<template> 
    <v-container fluid class="d-lg-flex flex-column justify-center"  style="background-color: yellow;" >	
        <v-data-iterator
            class="mt-16 d-flex flex-column align-center justify-center"
            style="background-color: violet;"
            :items="cocktail"
            :items-per-page="3"
    >
             
             <template v-slot:default="{ items }">
                     <v-row class=" d-lg-flex justify-center align-center w-100" style="background-color: tomato;">
                         <v-col
                             v-for="item in items"
                             :key="item.idDrink"
                             cols="12"
                             sm="10"
                             md="8"
                             lg="6"
                             xl="3"
                         >
                             <v-card>
                                 <v-img 
                                     :src="item.raw.strDrinkThumb"
                                     cover
                                     aspect-ratio="1/1" 
                                     height="getImageHeight()">
                                 </v-img>

                                 <v-list-item>
                                     <template v-slot:title>
                                     <strong class="text-h6 mb-2">{{ item.raw.strDrink }}</strong>
                                     </template>
                                 </v-list-item>
                                 
                                 <div class="d-flex justify-end mr-1 mb-1">
                                     <v-btn router :to="'/DrinksDetail/:id' + item.raw.idDrink" text>Read</v-btn>
                                 </div>
                             </v-card>

                         </v-col>
                     </v-row>
             </template>
                 
             <template v-slot:footer="{ page, pageCount, prevPage, nextPage }">
                 <div class="d-flex align-center justify-center mt-5" style="background-color: gray;">
                     <v-btn
                         :disabled="page === 1"
                         icon="mdi-arrow-left"
                         density="comfortable"
                         variant="tonal"
                         rounded
                         @click="prevPage"
                     ></v-btn>

                     <div class="mx-2 text-h6">
                         Page {{ page }} of {{ pageCount }}
                     </div>

                     <v-btn
                         :disabled="page >= pageCount"
                         icon="mdi-arrow-right"
                         density="comfortable"
                         variant="tonal"
                         rounded
                         @click="nextPage"
                     ></v-btn>
                 </div>
             </template>
   </v-data-iterator>
</v-container>
</template>

<script>
    export default {
        data() {
            return {
            cocktail: [] 
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
        },

        methods: {
            getImageHeight() {
                return this.$vuetify.breakpoint.smAndDown ? 200 : 500;
            },
            navigateToDetails() {
                console.log("push");
                this.$router.push("/detailComp");
            }
        }
    };
</script>