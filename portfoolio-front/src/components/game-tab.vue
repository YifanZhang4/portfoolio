<template>
  <div>
    <div v-for="review in reviews" :key="review" class="dark">
      <div class="tab-open" v-if="open" @click="close()">
        <h4>{{ review.name }}</h4>
        <img :src="review.image" alt="" class="image" />
        <h5>Rating: {{ review.rating }}/10</h5>
        <h5>Review:</h5>
        <p>{{ review.review }}</p>
        <h5>Links:</h5>
        <div class="buttons">
          <div class="steam" v-if="review.slink">
            <button :href="review.slink">Steam</button>
          </div>
          <div class="itch" v-if="review.ilink">
            <button :href="review.ilink">Itch.io</button>
          </div>
        </div>
        <h5>Tags:</h5>
        <div class="tagsContain">
          <div v-for="tag in reviews.tags" :key="tag" class="tag">
            {{ review.tag }}
          </div>
        </div>
        <p>Last Played: {{ review.played }}</p>
      </div>
      <div class="tab-closed" v-if="!open" @click="open()">
        <h3>{{ review.name }}</h3>
        <h3>{{ review.rating }}/10</h3>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'

const reviews = ref([])

const open = (tab) => {
  let open = false
}

const close = (tab) => {
  let open = true
}

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

<style>
@import url(../assets/variables.css);

body {
  background-color: var(--primary);
}
.tab-open {
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
.tab-closed {
  width: 30rem;
  height: 4rem;
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

@keyframes expand {
  0% {
    height: 4rem;
  }
  100% {
    height: 30rem;
  }
}
@keyframes unexpand {
  0% {
    height: 30rem;
  }
  100% {
    height: 4rem;
  }
}
</style>
