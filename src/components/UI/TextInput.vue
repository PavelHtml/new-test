<script setup>
import {defineProps, defineEmits} from "vue";

defineProps({
  modelValue: String,
  label: String,
  placeholder: String
});

const emit = defineEmits(['update:modelValue']);

const updateValue = (event) => {
  emit('update:modelValue', event.target.value);
};
</script>

<template>
    <label class="input-box">
      <div class="label">{{label}}</div>
      <input type="text" :placeholder="placeholder" :value="modelValue" @input="updateValue">
    </label>
</template>

<script>
export default {
  name: 'TextInput',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input-box input {
  font-size: 18px;
  padding: 0 10px;
  border: 0;
  border-bottom: 1px solid #000000;
}
</style>
