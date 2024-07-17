<template>
  <div>
    <div v-for="review in reviews" :key="review">
      <div v-if="open" class="tab-open">
        <h2>{{ review.name }}</h2>
        <img :src="review.image" alt="" />
        <h4>Rating: {{ review.rating }}/10</h4>
        <h4>Review:</h4>
        <h6>{{ review.review }}</h6>
        <p>Last Played: {{ review.played }}</p>
      </div>
      <div v-if="closed" class="tab-closed">
        <h2>{{ review.name }}</h2>
        <h2>{{ review.rating }}/10</h2>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const reviews = ref([])

const getDecks = async () => {
  try {
    const res = await fetch(`http://localhost:8000/reviews`)
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

<style scoped></style>
