<template>
  <!-- Section Header General Information-->
  <div>
    <div class="character-content__title"><h2>General Information</h2></div>

      <div class="character-content__data-cell">
        <div class="character-content__text">Eye Color</div>
        <div class="character-content__info">{{ eyeColor }}</div>
      </div>

      <div class="character-content__data-cell">
        <div class="character-content__text">Hair Color</div>
        <div class="character-content__info">{{ hairColor }}</div>
      </div>

      <div class="character-content__data-cell">
        <div class="character-content__text">Skin Color</div>
        <div class="character-content__info">{{ skinColor }}</div>
      </div>

      <div class="character-content__data-cell">
        <div class="character-content__text">Birth Year</div>
        <div class="character-content__info">{{ character.birthYear }}</div>
      </div>

    <!-- Section Header Vehicles-->
    <div class="character-content__title"><h2>Vehicles</h2></div>
      <!-- loop to show the vehicles' names -->
      <div
        class="character-content__data-cell character-content__text"
        v-for="(vehicle, index) in character.vehicleConnection.vehicles"
        :key="index"
      >
        {{ vehicle.name }}
      </div>
  </div>
</template>

<script>
export default {
  name: "CharacterContent",
  props: {
    character: {
      type: Object,
      required: true,
    },
  },

  computed: {
    // eyeColor's first letter is capitalized
    eyeColor() {
      return capitalFirst(this.character.eyeColor);
    },
    // hairColor's first letter is capitalized
    hairColor() {
      return capitalFirst(this.character.hairColor);
    },
    // skinColor's first letter is capitalized
    skinColor() {
      return capitalFirst(this.character.skinColor);
    },
  },
};

//Function to capitalize first letter in a string
function capitalFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
</script>

<style>
.character-content__title {
  /* Header */
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 20px;
  display: flex;
  align-items: center;
  letter-spacing: 0.0125em;

  padding-top: 32px;
  padding-bottom: 8px;
  padding-right: 16px;
  padding-left: 16px;

  /* Text/Dark */
  color: #333333;
}

.character-content__data-cell {
  display: flex;
  justify-content: space-between;
  padding: 16px;
  border-bottom: solid;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-width: 1px;
}

.character-content__text {
  /* Header */

  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 20px;
  display: flex;
  align-items: center;
  letter-spacing: 0.0125em;

  /* Text/Light */

  color: #828282;
}

.character-content__info {
  /* Header */
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-align: right;
  letter-spacing: 0.0125em;

  color: #333333;
}
</style>