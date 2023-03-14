<script setup>
import {onBeforeMount} from "vue";
import {mapActions, mapGetters} from "@/lib";
import {useRouter} from "vue-router";


const { getCurrentNote } = mapGetters();
const { getLocalNotes } = mapActions();
const router = useRouter()

onBeforeMount(() => {
  getLocalNotes()
  if (!getCurrentNote.value) router.push('/')
})
</script>

<template>
  <router-view/>
</template>


<style>
@import url(@/assets/global.css);
</style>
