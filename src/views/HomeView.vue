<script setup>
import NotePreview from "@/components/NotePreview.vue"
import { mapGetters, mapMutations } from '@/lib'
import {useRouter} from "vue-router"

const { getNotes } = mapGetters()

const { addNote } = mapMutations()
const router = useRouter()

const addNewNote = () => {
  addNote()
  router.push({
    name: 'todo',
    params: {
      id: getNotes.value.length - 1
    }
  });
}

</script>

<template>
  <div class="home">
    <custom-button color="white" background="green" @click.prevent="addNewNote">Добавить Заметку</custom-button>
    <note-preview  v-for="(note, index) in getNotes" :title="note.title" :note-list="note.list" :note-index="index" :key="index" />
  </div>
</template>

<style>
.home {
  max-width: 1024px;
  margin: 0 auto;
  padding: 10px;
}
</style>
