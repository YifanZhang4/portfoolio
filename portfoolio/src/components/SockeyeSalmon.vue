<template>
  <div>
    <img
      src="../assets/Sockeye_Salmon_Base.png"
      alt="Sockeye Salmon drawn in a pixel art style"
      id="salmon"
      :ref="salmon"
    />
  </div>
</template>

<script setup>
import { onMounted, ref, watch, defineProps } from 'vue'
import { gsap } from 'gsap'

const salmon = ref(Object)
const props = defineProps({ dim: Object })

onMounted(() => {
  console.log(props.dim)
  dimensions()
})

let top = 0
let bottom = 0
let left = 0
let right = 0

const dimensions = () => {
  top = Math.floor(props.dim.top)
  bottom = Math.floor(props.dim.bottom)
  left = Math.floor(props.dim.left)
  right = Math.floor(props.dim.right)
  console.log(top, bottom, left, right)
  return top, bottom, left, right
}

// const fishFlip = () => {
//   if (salmon) {
//     gsap.to(salmon.value, { rotationX: 180, duration: 0.4 })
//   } else {
//     gsap.to(salmon.value, { rotationX: 0, duration: 0.4 })
//   }
// }

var randomY = gsap.utils.random(top, bottom, 1, true)
var randomX = gsap.utils.random(left, right, 1, true)

console.log(randomY(), randomX())
console.log(top)

let tl = gsap.timeline({ repeat: -1, repeatDelay: 5 })
tl.to(salmon, {
  y: randomY(),
  x: randomX(),
  stagger: 0.3
  // onComplete: fishFlip
})

// onresize = () => {
//   dimensions()
// }
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
