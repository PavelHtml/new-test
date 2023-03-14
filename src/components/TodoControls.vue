<script setup>
import {ref} from "vue"
import {mapMutations} from "@/lib"
import {useRoute, useRouter} from "vue-router"

const router = useRouter()
const route = useRoute()

const { addNewNoteItem, openNote, saveNote } = mapMutations()
const open = ref(false)
const openRemove = ref(false)
const saveNoteHandler = () => {
  saveNote(route.params.id)
  open.value = true
  setTimeout(() => {
    open.value = false
  }, 2000)
}
const openPopUpRemoveUpdate = () => {
  openRemove.value = true
}
const closeRemovePopUp = () => {
  openRemove.value = false
}
const removeUpdate = () => {
  openNote(route.params.id)
  closeRemovePopUp()
}
</script>

<template>
  <div class="todo_controls">
    <custom-button @click.prevent="addNewNoteItem" color="white" background="blue">Добавить заметку</custom-button>
    <custom-button @click.prevent="saveNoteHandler" color="white" background="green">Сохранить</custom-button>
    <custom-button @click.prevent="openPopUpRemoveUpdate" color="white" background="red">Отменить редактирование</custom-button>
    <custom-button @click.prevent="router.push('/')" color="white" background="black">На главную</custom-button>
  </div>
  <modal-dialog :open="openRemove">
    <h2>Отменить редактирование?</h2>
    <div class="popup_buttons">
      <custom-button @click.prevent="closeRemovePopUp">Нет</custom-button>
      <custom-button @click.prevent="removeUpdate()">Да</custom-button>
    </div>
  </modal-dialog>

  <modal-dialog :open="open">
    <h2>Изменения сохранены</h2>
  </modal-dialog>
</template>

<script>
export default {
  name: 'TodoControls'
}
</script>

<style scoped>
</style>
