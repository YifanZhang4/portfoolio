<template>
  <div>
    <h1>Tank</h1>
    <div id="tank"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

let fish = ref[]
</script>

<style scoped>
#tank {
  background-color: cornflowerblue;
  height: 20vh;
  width: 30vw;
}
</style>
