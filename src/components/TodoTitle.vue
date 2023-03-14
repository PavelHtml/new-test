<script setup>
import {mapGetters, mapMutations} from "@/lib";
import Button from "@/components/UI/Button.vue";
import TextInput from "@/components/UI/TextInput.vue";
import {onBeforeMount, ref} from "vue";
import {useRoute} from "vue-router";

const { getCurrentNote } = mapGetters()
const { openNote } = mapMutations()
const route = useRoute()

const update = ref(false)
const updateTitle = () => {
  update.value = !update.value
}

onBeforeMount(() => {
  openNote(route.params.id)
  if (!getCurrentNote.value.title) update.value = true
})
</script>

<template>
  <div class="todo_title">
    <div class="todo_title_content">
      <h1 v-if="!update">{{ getCurrentNote.title }}</h1>
      <div v-else>
        <TextInput v-model="getCurrentNote.title"/>
      </div>
    </div>
    <div class="todo_title_controls">
      <Button color="white" background="blue" @click.prevent="updateTitle">{{ !update ? 'Редактировать заголовок' : 'Сохранить'}}</Button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoTitle'
}
</script>

<style scoped>
.todo_title {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

.todo_title_controls {
  margin-left: 10px;
}

</style>
