<template>
    <div class="d-flex flex-column align-center justify-center h-screen">
        <img :src="drink.strDrinkThumb" alt="Drink Image">
        <h1>DETAIL DRINKS {{ $route.params.id }}</h1>
        <h1>NAME {{ drink.strDrink }}</h1>
        <!-- <p>DRINKS {{ drink }}</p> -->
        
        <!-- <p>{{ drink.strInstructions }}</p>
        <ul>
        <li v-for="ingredient in ingredients" :key="ingredient">{{ ingredient }}</li>
        </ul> -->
    </div>    
</template>


<script>
    export default{
        data() {
            return {
                drink: {},
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
            } catch (error) {
                console.error(error);
            };
        }
    
        // methods:{
        //     getIngredientsList(drink) {
        //         const ingredients = [];
        //         for (let i = 1; i <= 15; i++) {
        //             const ingredient = drink[`strIngredient${i}`];
        //             const measure = drink[`strMeasure${i}`];
        //             if (ingredient && measure) {
        //             ingredients.push(`${measure} ${ingredient}`);
        //             } else if (ingredient) {
        //             ingredients.push(ingredient);
        //             }
        //         }
        //         return ingredients;
        //     }
        // }
    };
</script>