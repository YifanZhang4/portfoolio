<template>
  <div>
    <div>
      <div v-if="open" class="tab-open">
        <h2>{{ game.name }}</h2>
        <img :src="game.img" alt="" />
        <h4>Rating: {{ game.rate }}/10</h4>
      </div>
      <div v-if="closed" class="tab-closed">
        <h2>{{ game.name }}</h2>
        <h4>{{ game.rate }}/10</h4>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
