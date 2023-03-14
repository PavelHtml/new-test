<script setup>
import {mapMutations} from "@/lib"
import {defineProps, ref} from 'vue'
import {useRouter} from 'vue-router'

defineProps({
  title: String,
  noteList: Array,
  noteIndex: Number
})

const router = useRouter()
const open = ref(false)

const {deleteNote} = mapMutations()
const popUpAction = () => {
  open.value = !open.value
}
const eventDeleteNote = (index) => {
  deleteNote(index)
  popUpAction()
}
const editeNote = (index) => {
  router.push({
    name: 'todo',
    params: {
      id: index
    }
  })
}
</script>

<template>
  <div class="note">
    <div class="note_content">
      <h2 class="title">{{ title }}</h2>
      <ul class="list">
        <template v-for="(noteItem, index) in noteList" :key="$.uid + index">
          <li class="list_item" v-if="index < 3">{{ noteItem.text }}</li>
        </template>
      </ul>
    </div>
    <div class="note_control">
      <custom-button background="green" class="btn-margin" color="white" @click="editeNote(noteIndex)">Редактировать</custom-button>
      <custom-button background="red" color="white" @click="popUpAction">Удалить</custom-button>
    </div>
  </div>
  <modal-dialog :open="open">
    <h3 class="popup_title">Вы действительно хотите удалить заметку?</h3>
    <div class="popup_buttons">
      <custom-button @click="popUpAction">нет</custom-button>
      <custom-button @click="eventDeleteNote(noteIndex)">да</custom-button>
    </div>
  </modal-dialog>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.note {
  border-radius: 10px;
  box-shadow: 0 0 12px #bbb;
  margin-top: 10px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
}

.note_control {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.title {
  margin-bottom: 10px;
}

.list {
  list-style-type: none;
}

.popup_title {
  margin-bottom: 10px;
}
</style>
