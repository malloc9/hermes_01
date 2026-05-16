<template>
  <div id="app">
    <h1>Project: {{ projectName }}</h1>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const projectName = ref('')

onMounted(async () => {
  try {
    const response = await fetch('/api/project-name')
    const data = await response.json()
    projectName.value = data.name
  } catch (error) {
    console.error('Error fetching project name:', error)
    projectName.value = 'Unknown'
  }
})
</script>

<style>
#app {
  text-align: center;
  margin-top: 50px;
  font-family: sans-serif;
}
</style>
