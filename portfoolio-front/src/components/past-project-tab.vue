<template>
  <div>
    <div v-for="project in projects" :key="project">
      <h2>{{ project.name }}</h2>
      <p>{{ project.description }}</p>
      <button :href="project.link">Go</button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const projects = ref([])

const getProjects = async () => {
  try {
    const res = await fetch(`http://localhost:3000/pastprojects`)
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }
    const data = await res.json()
    projects.value = data
  } catch (error) {
    console.log(error)
  }
}

onMounted(() => {
  getProjects()
})
</script>

<style scoped></style>
