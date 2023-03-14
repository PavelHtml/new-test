<script setup>
import {defineProps} from "vue"

defineProps({
  open: Boolean,
})

</script>

<template>
  <div class="popup" v-if="open">
    <div class="popup_content">
      <slot></slot>
    </div>
  </div>
</template>


<script>
export default {
  name: 'ModalDialog',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.popup {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
}

.popup_content {
  margin: auto;
  padding: 10px;
  border-radius: 10px;
  background: #fff;
}
</style>
