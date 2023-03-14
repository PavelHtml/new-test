<script setup>
import { defineProps, ref } from 'vue'
import PopUp from "@/components/UI/PopUp.vue";
import Button from "@/components/UI/Button.vue";

defineProps({
  title: String,
  noteList: Array
})

const open = ref(false)

const closePopUp = (e) => {
  e.stopPropagation()
  open.value = !open.value
}
</script>

<template>
  <div class="note" @click.prevent="closePopUp">
    <h2 class="title">{{title}}</h2>
    <ul class="list">
      <template v-for="(noteItem, index) in noteList" :key="$.uid + index">
        <li class="list_item" v-if="index < 3">{{noteItem}}</li>
      </template>
    </ul>
  </div>
  <PopUp :open="open">
    <h3 class="popup_title">Вы действительно хотите удалить заметку?</h3>
    <div class="popup_buttons">
      <Button text="Продолжить" background="green" color="white" @click="closePopUp"></Button>
      <Button text="Отменить" background="red" color="white" @click="closePopUp"></Button>
    </div>
  </PopUp>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.note {
  border-radius: 10px;
  box-shadow: 0 0 12px #bbb;
  margin-top: 10px;
  padding: 10px;
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
