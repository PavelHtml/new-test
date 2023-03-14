<script setup>
import NotePreview from "@/components/NotePreview.vue";
import { mapGetters } from '@/lib'

const { getNoties } = mapGetters()

</script>

<template>
  <div class="home">
    <NotePreview  v-for="(note, key) in getNoties" :title="note.title" :note-list="note.list" :key="key" />
  </div>
</template>
