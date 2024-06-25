<template>
  <div>
    <h1>Tank</h1>
    <div id="tank" ref="tank">
      <SockeyeSalmon></SockeyeSalmon>
    </div>
  </div>
</template>

<script setup>
import SockeyeSalmon from '@/components/SockeyeSalmon.vue'
import { onMounted, ref } from 'vue'

const tankHeight = ref(0)
const tankWidth = ref(0)

function getMeasurements() {
  console.log('oi')
  tankHeight.value = tank.clientHeight
  tankWidth.value = tank.clientWidth
  console.log(tankWidth.value, tankHeight.value)
}

onMounted(() => {
  window.addEventListener('resize', getMeasurements())
})
</script>

<style scoped>
#tank {
  display: block;
  position: absolute;
  background-color: cornflowerblue;
  left: 0;
  right: 0;
  height: 60%;
  width: 100%;
  overflow: hidden;
}
</style>
