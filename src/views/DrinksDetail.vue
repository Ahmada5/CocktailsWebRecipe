<template>
    <navbar/>
    <div class="d-flex flex-column align-center justify-center h-screen" style="background-color: #de872b;;">
        <!-- <h1>DETAIL DRINKS {{ $route.params.id }}</h1> -->
        <v-div class="d-flex flex-column">
            <h1>{{ drink.strDrink }}</h1>
            <p class="mt-n2" >{{drink.strGlass}}</p>
        </v-div>

        <img :src="drink.strDrinkThumb" class="drink-image" alt="Drink Thumbnail">
        <v-div class="drink-teks d-flex flex-column align-center mt-4">
            <div class="d-flex flex-column align-start justify-center mt-1" style="width: fit-content;">
                <li v-for="(ingredient, index) in getIngredientsList(drink)" :key="index">
                    {{ ingredient }}
                </li>
            </div>
            <p class="d-flex justify-center text-center mt-2 font-weight-bold">{{drink.strInstructions}}</p>
        </v-div>
    </div>
</template>


<script>
    import navbar from "../components/NavbarSection.vue"
    export default{
        components:{
            navbar
        },
        data() {
            return {
                drink: {}
            };
        },
        async mounted() {
            const id = this.$route.params.id.replace(':id', '');
            console.log(id);        
            const url = (`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
            const options = {
                method: 'GET',
            };
            console.log(url);
            try {
                const response = await fetch(url, options);
                const result = await response.json();
                this.drink = result.drinks[0];
                console.log(result);
                window.scrollTo(0, 0);
            } catch (error) {
                console.error(error);
            };
        },
    
        methods:{
            getIngredientsList(drink) {
                const ingredients = [];
                for (let i = 1; i <= 15; i++) {
                    const ingredient = drink[`strIngredient${i}`];
                    const measure = drink[`strMeasure${i}`];
                    if (ingredient && measure) {
                    ingredients.push(`${measure} ${ingredient}`);
                    } else if (ingredient) {
                    ingredients.push(ingredient);
                    }
                }
                return ingredients;
            }
        }
    };
</script>

<style scoped>
.drink-image {
  margin-top: 3vh;
  max-width: 100%; /* Ensure the image doesn't exceed its container's width */
  height: auto; /* Maintain aspect ratio */
  width: 300px; /* Set a specific width */
}
.drink-teks {
  max-width: 100%; /* Ensure the image doesn't exceed its container's width */
  height: auto; /* Maintain aspect ratio */
  width: 600px; /* Set a specific width */
}
</style>
