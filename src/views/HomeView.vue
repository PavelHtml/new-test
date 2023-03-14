<script setup>
import NotePreview from "@/components/NotePreview.vue";
import { mapGetters } from '@/lib'
import Button from "@/components/UI/Button.vue";

const { getNotes } = mapGetters()

</script>

<template>
  <div class="home">
    <Button text="Добавить Заметку" color="white" background="green"></Button>
    <NotePreview  v-for="(note, index) in getNotes" :title="note.title" :note-list="note.list" :note-index="index" :key="index" />
  </div>
</template>

<style>
.home {
  max-width: 1024px;
  margin: 0 auto;
  padding: 10px;
}
</style>
