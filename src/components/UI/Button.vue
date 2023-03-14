<script setup>
import { defineProps } from "vue";

defineProps({
  background: String,
  color: String
})

</script>

<template>
  <button class="btn" :style="{'background': background, 'color': color}"><slot></slot></button>
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
  cursor: pointer;
  color: #000;
}

.btn:hover {
  opacity: 0.8;
}

.btn + .btn {
  margin-left: 10px;
}
</style>
