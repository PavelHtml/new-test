<script setup>
import PopUp from "@/components/UI/PopUp.vue";
import {ref} from "vue";
import {mapMutations} from "@/lib";
import {useRoute} from "vue-router";
import Button from "@/components/UI/Button.vue";

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
    <Button @click.prevent="addNewNoteItem" color="white" background="blue">Добавить заметку</Button>
    <Button @click.prevent="saveNoteHandler" color="white" background="green">Сохронить</Button>
    <Button @click.prevent="openPopUpRemoveUpdate" color="white" background="red">Отменить редактирование</Button>
  </div>
  <PopUp :open="openRemove">
    <h2>Отменить редактирование?</h2>
    <div class="popup_buttons">
      <Button @click.prevent="closeRemovePopUp">Нет</Button>
      <Button @click.prevent="removeUpdate()">Да</Button>
    </div>
  </PopUp>

  <PopUp :open="open">
    <h2>Изменения сохранены</h2>
  </PopUp>
</template>

<script>
export default {
  name: 'TodoControls'
}
</script>

<style scoped>
</style>
