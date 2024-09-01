<template>
  <div id="navbar">
    <div id="logoContainer">
      <NuxtLink to="/" @click="page = 'index'">
        <img class="logo" src="" alt="" />
      </NuxtLink>
    </div>

    <div id="navLinks">
      <div class="nav-item" v-for="(link, index) in navItems" :key="index">
        <NuxtLink
          :to="link.to"
          :id="link.id"
          @click="page = link.page"
          v-bind:style="{ animation: fadeIn }"
        >
          <img class="icon" :src="link.icon" :alt="link.alt" />
          <span>{{ link.text }}</span>
        </NuxtLink>
      </div>
    </div>

    <Menu />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const page = ref('')
const navItems = [
  {
    to: '/',
    id: 'homeLink',
    icon: '../assets/homeL.svg',
    alt: 'Black pixel icon of a house',
    text: 'Home',
    page: 'index'
  }
]

const fadeIn = ref('fadeIn 0.5s ease-in-out forwards')
</script>

<style scoped>
@import url(../assets/variables.css);

#navLinks {
  display: flex;
  gap: 10px;
}

.nav-item {
  display: inline-flex;
  align-items: center;
  gap: 5px;
}

.icon {
  height: 24px;
  padding: 0 5px 0 0;
}

.group {
  display: flex;
  align-items: center;
  width: auto;
  margin-top: 1.5rem;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
