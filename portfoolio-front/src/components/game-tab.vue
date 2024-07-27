<template>
  <div>
    <div @click="closed = open">
      <div v-if="open" class="tab-open">
        <h3>{{ review.name }}</h3>
        <img :src="review.image" alt="" />
        <h4>Rating: {{ review.rating }}/10</h4>
        <h4>Review:</h4>
        <h6>{{ review.review }}</h6>
        <h4>Links:</h4>
        <div>
          <div class="steam" v-if="review.slink">
            <button :href="review.slink">Steam</button>
          </div>
          <div class="itch" v-if="review.ilink">
            <button :href="review.ilink">Itch.io</button>
          </div>
        </div>
        <h4>Tags:</h4>
        <div>
          <div v-for="tag in review.tags" :key="tag" class="tag">
            {{ review.tag }}
          </div>
        </div>
        <p>Last Played: {{ review.played }}</p>
      </div>
      <div v-if="closed" class="tab-closed">
        <h3>{{ review.name }}</h3>
        <h3>{{ review.rating }}/10</h3>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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
h3,
h4,
h6,
p {
  color: var(--text-color);
}
h3 {
  font-size: var(--h3);
}
h4 {
  font-size: var(--h4);
}
h6 {
  font-size: var(--h6);
  text-align: center;
}
p {
  font-size: var(--p);
}
.tab-closed {
  width: 30rem;
  height: 33rem;
  font-style: var(--text);
  border-radius: 20px;
}
.tab-open {
  width: 30rem;
  height: 8rem;
}
.steam,
.itch,
.tag {
  width: 7.5rem;
  height: 2rem;
  text-align: center;
}
.steam {
  color: var(--steam);
}
.itch {
  color: var(--itch);
}
.tag {
  color: var(--fronter);
}
</style>
