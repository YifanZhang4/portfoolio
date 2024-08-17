<template>
  <div>
    <div v-for="review in reviews" :key="review" class="dark">
      <div class="tab">
        <h4>{{ review.name }}</h4>
        <img :src="review.image" alt="" class="image" />
        <h5>Rating: {{ review.rating }}/10</h5>
        <h5>Review:</h5>
        <p>{{ review.review }}</p>
        <h5>Links:</h5>
        <div class="buttons">
          <button :href="review.slink" class="steam" v-if="review.slink">Steam</button>
          <button :href="review.ilink" class="itch" v-if="review.ilink">Itch.io</button>
        </div>
        <h5>Tags:</h5>
        <div class="tagsContain">
          <div v-for="tag in reviews.tags" :key="tag" class="tag">
            {{ review.tag }}
          </div>
        </div>
        <p>Last Played: {{ review.played }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

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

<style scoped>
@import url(../assets/variables.css);

body {
  background-color: var(--primary);
}
.tab {
  width: 30rem;
  height: auto;
  font-style: var(--text);
  border-radius: 20px;
  background-color: var(--front);
  text-align: left;
  padding: 0.5rem;
}
.image {
  display: block;
  height: 10rem;
  width: auto;
  border-radius: 20px;
  margin-left: auto;
  margin-right: auto;
}

.steam,
.itch,
.tag {
  width: 7.5rem;
  height: 2rem;
  text-align: center;
  color: var(--text-color);
  border: none;
  border-radius: 20px;
  margin-left: auto;
  margin-right: auto;
}
.buttons {
  display: flex;
}
.steam {
  background-color: var(--steam);
}
.itch {
  background-color: var(--itch);
}
.tag {
  color: var(--fronter);
}
</style>
