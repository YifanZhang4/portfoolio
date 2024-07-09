<template>
  <div>
    <h1>Linkedin</h1>
    <div id="tank">
      <SockeyeSalmon v-if="tankDim" :dim="tankDim"></SockeyeSalmon>
    </div>
  </div>
</template>

<script setup>
import SockeyeSalmon from '../components/SockeyeSalmon.vue'
import { onMounted, ref, watchEffect } from 'vue'

const tankDim = ref(null)

function getMeasurements() {
  const tank = document.getElementById('tank')
  if (tank) {
    tankDim.value = tank.getBoundingClientRect()
    console.log(tankDim.value)
  } else {
    console.error()
  }
  console.log('ran')
}

onresize = () => {
  getMeasurements()
}

onMounted(() => {
  getMeasurements()
})
</script>

<style scoped>
#tank {
  display: block;
  position: absolute;
  background-color: cornflowerblue;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>
