<template>
  <div>
    <img
      src="../assets/Sockeye_Salmon_Base.png"
      alt="Sockeye Salmon drawn in a pixel art style"
      id="salmon"
      ref="salmon"
    />
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import { gsap } from 'gsap'

let inTank = ref(true)
let finished = ref(false)

const swimming = () => {
  finished.value = false
  var maxX = 304
  var maxY = 206
  var xValue = Math.floor(Math.random() * (maxX - -100 + 1))
  var yValue = Math.floor(Math.random() * (maxY - -100 + 1))
  console.log(xValue, yValue)

  var tl = gsap.timeline()
  tl.to('#salmon', { x: xValue, y: yValue })
  finished.value = true
}

onMounted(() => {
  swimming()
})

watch(finished, (newValue) => {
  console.log('swim')
  if (newValue === true) {
    swimming()
  }
})
</script>

<style scoped>
#salmon {
  display: inline-block;
  transform: scale(0.4);
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>
