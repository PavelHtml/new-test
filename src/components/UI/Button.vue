<script setup>
import { defineProps } from "vue";

defineProps({
  text: String,
  background: String,
  color: String
})

</script>

<template>
  <button class="btn" :style="{'background': background, 'color': color}">{{text}}</button>
</template>

<script>
export default {
  name: `Button`
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn {
  border: 0;
  border-radius: 6px;
  padding: 10px 20px;
  font-size: 16px;
  color: #000;
}

.btn + .btn {
  margin-left: 10px;
}
</style>
