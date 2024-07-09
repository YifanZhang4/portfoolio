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
import { onMounted, ref, watch, toRefs } from 'vue'
import { gsap } from 'gsap'

const salmon = ref(null)
const props = defineProps({ dim: Object })
const { dim } = toRefs(props)

onMounted(() => {
  console.log(props.dim)
  let randomY = gsap.utils.random(dim.value.top, dim.value.bottom, 1)
  let randomX = gsap.utils.random(dim.value.left, dim.value.right, 1)

  let tl = gsap.timeline({ repeat: -1, repeatDelay: 5 })
  console.log(salmon)
  tl.to(salmon.value, {
    x: randomX,
    y: randomY,
    stagger: 0.3
    // onComplete: fishFlip
  })
})

// const fishFlip = () => {
//   if (salmon) {
//     gsap.to(salmon.value, { rotationX: 180, duration: 0.4 })
//   } else {
//     gsap.to(salmon.value, { rotationX: 0, duration: 0.4 })
//   }
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
