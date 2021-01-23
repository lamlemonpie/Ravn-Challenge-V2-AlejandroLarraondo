<template>
  <div class="characters-view">
    <!-- Character View, Navigation (PersonCells) -->
    <div class="characters-view__navigation">

      <!-- Query builder -->
      <!-- "count" defines the begin point to query -->
      <ApolloQuery
        :query="require('../graphql/allPeople.gql')"
        :variables="{ count }"
      >
        <template v-slot="{ result: { error, data }, isLoading }">
          <!-- The query is still loading -->
          <div v-if="isLoading" class="characters-view__loading">
            <img src="../assets/ActivityIndicator.png" alt="ActiviyIndicator" />
            Loading
          </div>

          <!-- The query fails to load -->
          <div v-else-if="error" class="characters-view__error">
            Failed To Load Data
          </div>

          <!-- The query fetched data correctly -->
          <!-- When event selected is detected, CharactersView triggers "changeSelected" function -->
          <div v-else-if="data">
            <CharacterItem
              v-for="(character, index) in data.allPeople.people"
              :key="index"
              :character="character"
              @selected="changeSelected"
            />
          </div>
        </template>
      </ApolloQuery>
    </div>

    <!-- Character View, Person Content -->
    <!-- CharacterContent shows the selected character (person) -->
    <div v-if="selected">
        <div class="characters-view__content">
        <CharacterContent :character="selected_character" />
        </div>
    </div>

  </div>
</template>

<script>
import CharacterItem from "../components/CharacterItem";
import CharacterContent from "../components/CharacterContent";

export default {
  name: "CharactersView",
  components: {
    CharacterItem,
    CharacterContent,
  },

  data() {
    return {
        selected: false,
        selected_character: {},
        count: 5,
    };
  },

  methods: {
    // Trigger function to change the selected character
    // called when event "selected" is detected.
    changeSelected(character) {
      console.log(`Selected: ${character.name}`);
      this.selected_character = character;
      this.selected = true;
    },
  },
};
</script>


<style>
.characters-view {
  height: 100vh;
  width: 100vw;
  display: inline-grid;
  grid-template-columns: 350px auto;
}

.characters-view__navigation {
  border-right: solid;
  border-right-color: gray;
}

.characters-view__content {
  padding-left: 100px;
  padding-right: 100px;
}

.characters-view__loading {
  /* Header */
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.0125em;

  padding-top: 18px;

  /* Text/Light */

  color: #828282;
}

.characters-view__error {
  /* Header */
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  letter-spacing: 0.0125em;

  padding-top: 16px;
  /* Text/Emphasis */

  color: #ec5757;
}
</style>
