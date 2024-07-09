<template>
  <div>
    <img
      src="../assets/Sockeye_Salmon_Base.png"
      alt="Sockeye Salmon drawn in a pixel art style"
      id="salmon"
      :ref="fish"
    />
  </div>
</template>

<script setup>
import { ref, toRefs, defineProps } from 'vue'

const props = defineProps({ dim: Object })
const { dim } = toRefs(props)
const fish = ref(null)

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

function swimming() {
  const fishDims = fish.value.getBoundingClientRect()
  const x = random(0, props.dim.width - fishDims.width)
  const y = random(0, props.dim.height - fishDims.height)
  const move = Math.sqrt((y - fishDims.y) ** 2 + (x - fishDims.x) ** 2)
  if (move < 300) {
    swimming()
    return
  }
  fish.style.transform = `scaleX(${x > fishDims.x ? -1 : 1})`
  setTimeout(swimming, random(Math.max(move * 2, 500), move * 4))
}

setTimeout(() => {
  swimming()
}, 3000)
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
