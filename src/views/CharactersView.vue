<template>
    
<div class="characters-view">

    <div class="characters-view__navigation"> 


    <CharacterItem 
        v-for="(character,index) in people"
        :key="index"
        :character="character"
        :index="index"
        @selected="changeSelected"
     />

    </div>

    <div class="characters-view__content"> 

    <CharacterContent  :character="people[selected]"/>

    </div>

</div>

</template>

<script>

import CharacterItem from '../components/CharacterItem';
import CharacterContent from '../components/CharacterContent';

export default {
    name: 'CharactersView',
    components: {CharacterItem, CharacterContent},

    data(){
        return{
            selected: 0,
            people: [
                        {
                            "name": "Luke Skywalker",
                            "species": null,
                            "homeworld": {
                                "name": "Tatooine"
                            },
                            "eyeColor": "blue",
                            "hairColor": "blond",
                            "skinColor": "fair",
                            "birthYear": "19BBY",
                            "vehicleConnection": {
                                "vehicles": [
                                {
                                    "name": "Snowspeeder"
                                },
                                {
                                    "name": "Imperial Speeder Bike"
                                }
                                ]
                            }
                        },
                        {
                            "name": "C-3PO",
                            "species": {
                                "name": "Droid"
                            },
                            "homeworld": {
                                "name": "Tatooine"
                            },
                            "eyeColor": "yellow",
                            "hairColor": "n/a",
                            "skinColor": "gold",
                            "birthYear": "112BBY",
                            "vehicleConnection": {
                                "vehicles": []
                            }
                            },
                            {
                            "name": "R2-D2",
                            "species": {
                                "name": "Droid"
                            },
                            "homeworld": {
                                "name": "Naboo"
                            },
                            "eyeColor": "red",
                            "hairColor": "n/a",
                            "skinColor": "white, blue",
                            "birthYear": "33BBY",
                            "vehicleConnection": {
                                "vehicles": []
                            }
                            }
                    ],

        }
    },

    methods: {
        changeSelected(index){
            console.log(`Selected: ${index}`)
            this.selected = index;
        }
    },
    
}
</script>


<style>
.characters-view{
    
    height: 100vh;
    width: 100vw;
    display: inline-grid;
    grid-template-columns: 350px auto;
}

.characters-view__navigation{
   border-right: solid;
   border-right-color: gray;
}

.characters-view__content{
     
    padding-left: 100px;
    padding-right: 100px;
}

</style>
