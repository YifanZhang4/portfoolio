<template>
  <div>
    <div @click="open()" v-for="review in reviews" :key="review">
      <div class="tab-open">
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
      <div class="tab-closed">
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

const open = (tab) => {}

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

const tl = gsap.timeline({})
tl.to(".tab-closed", {height:30rem, duration: 1})
</script>

<style>
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
.tab-open {
  width: 30rem;
  height: 30rem;
  font-style: var(--text);
  border-radius: 20px;
  display: none;
}
.tab-closed {
  width: 30rem;
  height: 4rem;
  display: block;
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
