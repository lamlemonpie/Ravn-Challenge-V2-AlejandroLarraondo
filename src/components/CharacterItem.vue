<template>

<div class="character-item">


    <div class="character-item__name">
    {{character.name}}
    </div>

    <div class="character-item__description">
    {{description}}
    </div>

    <div class="character-item__selector">
        <img src="../assets/Vector.png" alt="Vector">
    </div>

</div>


</template>

<script>
export default {
    name: 'CharacterItem',
    props:{
        character:{
            type: Object,
            required: true
        }
    },

    computed: {
        description(){
            if(this.character.species != null){
                return `${this.character.species.name} from ${this.character.homeworld.name}`;
            }
            return `From ${this.character.homeworld.name}`
        }
    },
}
</script>


<style>

.character-item{
    padding: 16px;
    height: 69;
    border-bottom: solid;
    border-bottom-color: grey;

    /* Grid  limits */
    display: grid;
    grid-template-columns: 9fr 1fr;
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
}

.character-item__name{

    /* Grid Area */
    grid-area: 1 / 1 / 2 / 2;

    /* Header */
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    line-height: 20px;
    display: flex;
    align-items: center;
    letter-spacing: 0.0125em;

    /* Text/Dark */
    color: #333333;
}

.character-item__description{
    
    /* Grid Area */
    grid-area: 2 / 1 / 3 / 2;

    /* Paragraph */
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    
    /* identical to box height */
    display: flex;
    align-items: center;
    letter-spacing: 0.0125em;

    /* Text/Light */
    color: #828282;
    
}

.character-item__selector{

    /* Grid Area */
    grid-area: 1 / 2 / 3 / 3;


    /* Position */
    position: relative;
    top: 25%;
    bottom: 50%;
    left: 75%;
}

</style>