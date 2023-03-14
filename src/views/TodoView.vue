<script setup>
import TodoTitle from "@/components/TodoTitle.vue";
import NoteList from "@/components/NoteList.vue";
import TodoControls from "@/components/TodoControls.vue";
</script>

<template>
  <div class="todo">
    <todo-title/>
    <note-list/>
    <todo-controls/>
  </div>
</template>

<style scoped>
.todo {
  max-width: 1024px;
  margin: auto;
  padding: 10px;
}

.todo_title {
  margin-bottom: 10px;
  display: flex;
}

</style>
