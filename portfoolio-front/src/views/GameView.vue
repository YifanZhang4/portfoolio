// @ts-ignore
<template>
  <div>
    <div id="reviewContain">
      <GameTab></GameTab>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import GameTab from '../components/game-tab.vue'

const reviews = ref([])

const getDecks = async () => {
  try {
    const res = await fetch(`http://localhost:3000/reviews`)
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }
    const data = await res.json()
    reviews.value = data
  } catch (error) {
    console.log(error)
  }
}

onMounted(() => {
  getDecks()
})
</script>

<style></style>
