<script setup>
import { defineProps } from "vue";

defineProps({
  text: String
})

</script>

<template>
  <button>{{text}}</button>
</template>

<script>
export default {
  name: `Button`
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
