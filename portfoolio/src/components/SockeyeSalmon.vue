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

console.log(dim.value.left, dim.value.right)

const randomY = gsap.utils.random(Math.floor(dim.value.top), Math.floor(dim.value.bottom), true)
const randomX = gsap.utils.random(Math.floor(dim.value.left), Math.floor(dim.value.right), true)

onMounted(() => {
  console.log(props.dim)
  let tl = gsap.timeline({})
  tl.to(salmon.value, {
    y: randomY(),
    x: randomX()
  })
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
