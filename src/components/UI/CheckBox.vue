<script setup>
import {defineProps, defineEmits} from "vue";

defineProps({
  modelValue: Boolean
})

const emit = defineEmits(['update:modelValue'])

const updateValue = (event) => {
  emit('update:modelValue', Boolean(event.target.checked))
}
</script>

<template>
    <label class="input-box">
      <input type="checkbox" :checked="modelValue" @change="updateValue">
    </label>
</template>

<script>
export default {
  name: 'CheckBox',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
