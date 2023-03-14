<script setup>
import {mapGetters, mapMutations} from "@/lib";
import NoteList from "@/components/NoteList.vue";
import Button from "@/components/UI/Button.vue";
import TextInput from "@/components/UI/TextInput.vue";
import {onBeforeMount, ref} from "vue";
import {useRoute} from "vue-router";
import PopUp from "@/components/UI/PopUp.vue";

const { getCurrentNote } = mapGetters()
const { openNote, saveNote } = mapMutations()
const route = useRoute()

const update = ref(false)
const open = ref(false)
const openRemove = ref(false)
const updateTitle = () => {
  update.value = !update.value
}

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

onBeforeMount(() => {
  openNote(route.params.id)
})
</script>

<template>
  <div class="todo">
    <div class="todo_title">
      <div class="todo_title_content">
        <h1 v-if="getCurrentNote.title && !update">{{ getCurrentNote.title }}</h1>
        <div v-else>
          <TextInput v-model="getCurrentNote.title"/>
        </div>
      </div>
      <div class="todo_title_controls">
        <Button @click.prevent="updateTitle">Редактировать</Button>
      </div>
    </div>
    <note-list></note-list>
    <div class="todo_controls">
      <Button @click.prevent="saveNoteHandler">Сохронить</Button>
      <Button @click.prevent="openPopUpRemoveUpdate">Отменить редактирование</Button>
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
  </div>
</template>
