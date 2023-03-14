<script setup>
import {onBeforeMount} from "vue";
import {mapActions} from "@/lib";

const { getLocalNotes } = mapActions()

onBeforeMount(() => {
  getLocalNotes()
})
</script>

<template>
  <router-view/>
</template>


<style>
@import url(@/assets/global.css);
</style>
