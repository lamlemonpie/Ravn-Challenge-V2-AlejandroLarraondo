<template>
  <div id="app">
    <!-- App Bar -->
    <div class="app-bar" >
    <h2> Ravn Star Wars Registry </h2>
  </div>
  <!-- Route View -->
  <router-view/>
  </div>
</template>


<style>

.app-bar{
  
  background-color: #121212;
  color: #F2F2F2;
  height: 52px;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  justify-content:left;
  align-items:center;
  padding-left: 33px;

  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
}

</style>