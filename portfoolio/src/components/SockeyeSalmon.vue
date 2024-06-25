<template>
  <div v-if="inTank">
    <img
      src="/portfoolio/src/assets/Sockeye_Salmon_Base.png"
      alt="Sockeye Salmon drawn in a pixel art style"
      id="salmon"
    />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

let inTank = ref(true)

const swimming = () => {}

onMounted(() => {
  swimming()
})
</script>

<style scoped></style>
