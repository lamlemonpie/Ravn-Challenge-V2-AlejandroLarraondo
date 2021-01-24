<template>
  <div class="characters-view">
    <!-- Character View, Navigation (PersonCells) -->
    <div class="characters-view__navigation">
      
      <!-- The query fetched data correctly -->
      <!-- If allPeople exists, the people is show with a v-for loop -->
      <div v-if="allPeople" >
            <CharacterItem
              v-for="(character, index) in allPeople.people"
              :key="index"
              :character="character"
              @selected="changeSelected"
        />
      </div>

      <!-- The query is still loading -->
      <!-- If loading, a loading indicator is shown -->
      <div v-if="$apollo.loading" class="characters-view__loading">
            <div class="characters-view__loading-item">
              <img
                src="../assets/ActivityIndicator.png"
                alt="ActiviyIndicator"
              />
            </div>
            <div class="characters-view__loading-item">Loading</div>
      </div>

    <!-- The query fails to load -->
    <!-- If failed, an error message is shown -->
    <div v-else-if="error" class="characters-view__error">
      Failed To Load Data
    </div>
      
    </div>
    
    <!-- Character View, Person Content -->
    <!-- If an item is selected, CharacterContent component is called -->
    <!-- CharacterContent shows the selected character (person) content  -->
    <div v-if="selected">
      <div class="characters-view__content">
        <CharacterContent :character="selected_character" />
      </div>
    </div>

  </div>

</template>

<script>
//Importing components
import CharacterItem    from "../components/CharacterItem";
import CharacterContent from "../components/CharacterContent";

//Importing query 
import allPeopleQuery from "../graphql/allPeople.gql";

export default {
  name: "CharactersView",
  components: {
    CharacterItem,
    CharacterContent,
  },

  apollo:{
    allPeople: {
      // gql query
      query: allPeopleQuery,
      // Static parameters
      variables: {
        first: 5, //take 5
        after: "", //starting point (page)
      },
      error(error) {
       this.error = JSON.stringify(error.message);
     }
    },
  },

  data() {
    return {
      selected: false,
      selected_character: {},
      first: 5,
      hasMore: true, //to verify if there is more to query 
      error: null, // to stores error in query
      page: ""
    };
  },

  methods: {
    // Trigger function to change the selected character
    // called when event "selected" is detected.
    // selected character is saved
    changeSelected(character) {
      console.log(`Selected: ${character.name}`);
      this.selected_character = character;
      this.selected = true;
    },

    // Function to load more characters (people) from the API
    // the ammount (5 according to challenge) is needed to know how many to take
    // the pageinfo (endCursor) is needed to know where to continue fetching
    loadMore(){
      this.$apollo.queries.allPeople.fetchMore(
        {
          variables: { first: this.first, after: this.page },
          
          updateQuery: (previousResult, {fetchMoreResult}) => {
            //if the query returns empty values, we stop fetching
            if( fetchMoreResult.allPeople.people.length == 0 ){
              this.hasMore = false;
              return {}
            }
            //new query data is appended to old query data
            return{
              allPeople: {
                __typename: fetchMoreResult.allPeople.__typename,
                people: [...previousResult.allPeople.people, ...fetchMoreResult.allPeople.people],
                pageInfo: {
                          endCursor: fetchMoreResult.allPeople.pageInfo.endCursor, 
                          __typename: fetchMoreResult.allPeople.pageInfo.__typename
                          }
              }
            }            
          },
        });
    }

  },

  // We watch if allPeople is changed.
  // If allPeople is changed, it means new data has been loaded
  // so in order to continue fetching we save the page 
  watch:{
    allPeople(){
      this.page = this.allPeople.pageInfo.endCursor;
      setTimeout(() => {  this.loadMore(); }, 1500); //to test delay while loading
      //this.loadMore(); //load more inmediately without delay
    },
  }

};

</script>


<style>
.characters-view {
  height: 92vh;
  width: 100%;

  display: inline-grid;
  grid-template-columns: 350px auto;
}

.characters-view__navigation {
  border-right: solid;
  border-right-color: rgba(0, 0, 0, 0.1);
  border-right-width: 1px;
  overflow-y: auto;
  overflow-x: hidden;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.characters-view__navigation::-webkit-scrollbar {
  display: none;
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

.characters-view__loading-item {
  margin-right: 8px;
}
</style>
