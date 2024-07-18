<template>
  <div>
    <div v-for="review in reviews" :key="review" @click="closed = open">
      <div v-if="open" class="tab-open">
        <h3>{{ review.name }}</h3>
        <img :src="review.image" alt="" />
        <h4>Rating: {{ review.rating }}/10</h4>
        <h4>Review:</h4>
        <h6>{{ review.review }}</h6>
        <p>Last Played: {{ review.played }}</p>
      </div>
      <div v-if="closed" class="tab-closed">
        <h3>{{ review.name }}</h3>
        <h3>{{ review.rating }}/10</h3>
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

<style scoped>
@import url(../assets/variables.css);

body {
  background-color: var(--primary);
}
.tab-closed {
  width: 30rem;
  height: 4rem;
  font-style: var(--text);
  border-radius: 20px;
}
</style>
