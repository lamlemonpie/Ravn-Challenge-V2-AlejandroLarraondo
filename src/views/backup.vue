<template>

      <ApolloQuery
        :query="require('../graphql/allPeople.gql')"
        :variables="{ first, last }"
        
      >
        <template v-slot="{ result: { error, data }, isLoading }">
          <!-- The query is still loading -->
          <div v-if="isLoading" class="characters-view__loading">
            <div class="characters-view__loading-item">
              <img
                src="../assets/ActivityIndicator.png"
                alt="ActiviyIndicator"
              />
            </div>
            <div class="characters-view__loading-item">Loading</div>
          </div>

          <!-- The query fails to load -->
          <div v-else-if="error" class="characters-view__error">
            Failed To Load Data
          </div>

          <!-- The query fetched data correctly -->
          <!-- When event selected is detected, CharactersView triggers "changeSelected" function -->
          <div v-else-if="data" >
            <CharacterItem
              v-for="(character, index) in data.allPeople.people"
              :key="index"
              :character="character"
              @selected="changeSelected"
            />
          </div>
        </template>

      </ApolloQuery>

</template>