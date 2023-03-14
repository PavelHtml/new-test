<script setup>
import {mapGetters, mapMutations} from "@/lib";
import TextInput from "@/components/UI/TextInput.vue";
import Button from "@/components/UI/Button.vue";
import CheckBox from "@/components/UI/CheckBox.vue";
import PopUp from "@/components/UI/PopUp.vue";
import {ref} from "vue";

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
            <CheckBox v-model.boolean="item.ready"/>
          </div>
          <div class="list_item_field" v-if="item.update">
            <TextInput v-model="item.text"/>
          </div>
          <div class="list_item_title" v-else>
            {{item.text}}
          </div>
        </div>
        <div class="list-item_controls">
          <Button background="blue" color="white" @click="updateListItem(item)">{{ item.update ? 'Ок' : 'Редактировать'}}</Button>
          <Button background="red" color="white" @click="openPopUpDelete(index)">Удалить</Button>
        </div>
      </li>
    </ul>
  </div>
  <PopUp :open="openPopup">
    <h2>Вы уверены?</h2>
    <div class="popup_buttons">
      <Button @click="closePopUp">Нет</Button>
      <Button @click="deleteListItemHandler">Да</Button>
    </div>
  </PopUp>
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
