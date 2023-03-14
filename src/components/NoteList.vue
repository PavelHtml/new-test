<script setup>
import {mapGetters, mapMutations} from "@/lib"
import {ref} from "vue"

const { getCurrentNote } = mapGetters()
const { deleteListItem } = mapMutations()
const updateListItem = (item) => {
  item.update = !item.update
}

const openPopup = ref(false)
const listItemIndex = ref(null)

const closePopUp = () => {
  openPopup.value = false
}
const openPopUpDelete = (index) => {
  openPopup.value = true
  listItemIndex.value = index
}

const deleteListItemHandler = () => {
  deleteListItem(listItemIndex.value)
  closePopUp()
}
</script>

<template>
  <div class="note_list">
    <ul class="list">
      <li
          class="list_item"
          v-for="(item, index) in getCurrentNote.list"
          :key="index"
      >
        <div class="list_item_content">
          <div class="list_item_checkbox">
            <check-box v-model.boolean="item.ready"/>
          </div>
          <div class="list_item_field" v-if="item.update">
            <text-input v-model="item.text"/>
          </div>
          <div class="list_item_title" v-else>
            {{item.text}}
          </div>
        </div>
        <div class="list-item_controls">
          <custom-button background="blue" color="white" @click="updateListItem(item)">{{ item.update ? 'Ок' : 'Редактировать'}}</custom-button>
          <custom-button background="red" color="white" @click="openPopUpDelete(index)">Удалить</custom-button>
        </div>
      </li>
    </ul>
  </div>
  <modal-dialog :open="openPopup">
    <h2>Вы уверены?</h2>
    <div class="popup_buttons">
      <custom-button @click="closePopUp">Нет</custom-button>
      <custom-button @click="deleteListItemHandler">Да</custom-button>
    </div>
  </modal-dialog>
</template>

<script>
export default {
  name: 'NoteList'
}
</script>

<style scoped>
.list {
  padding: 10px;
}

.list_item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.list_item_content {
  display: flex;
  align-items: center;
  line-height: 30px;
  font-size: 18px;
}

.list_item_checkbox {
  margin-right: 10px;
  padding-top: 6px;
}

.list_item_title {
  padding: 0 10px;
}
</style>
