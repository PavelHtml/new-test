<script setup>
import { defineProps } from 'vue'

defineProps({
  title: String,
  noteList: Array
})
</script>

<template>
  <div class="note">
    <h2 class="title">{{title}}</h2>
    <ul class="list">
      <li class="list_item" v-for="(noteItem, key) in noteList" :key="key">{{noteItem}}</li>
    </ul>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.note {
  height: 300px;
  border-radius: 10px;
  box-shadow: 0 0 0 10px #2c3e50;
  margin-bottom: 10px;
}
</style>
