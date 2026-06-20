<template>
  <div v-if="show" class="app-alter alert" :class="styleClass" role="alert">
    {{ msg }}
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  msg: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "error",
    validator: (value) => ["success", "error"].includes(value),
  },
});
const styleClass = computed(() =>
  props.type === "error" ? "alert-danger" : "alert-primary",
);
</script>

<style>
.app-alter {
  position: fixed;
  top: 10px;
  right: 10px;
}
</style>
