<template>
  <div
    class="btn-group w-100"
    role="group"
    aria-label="Scisa check button"
  >
    <input
      type="checkbox"
      class="btn-check w-100"
      :id="id"
      autocomplete="off"
      :checked="props.modelValue"
      @change="$emit('update:modelValue', $event.target.checked)"
    />
    <label
      style="min-height: 50px"
      class="btn btn-outline-primary w-100 fw-semibold d-flex align-items-center justify-content-center"
      :for="id"
    >
      <slot></slot>
    </label>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

// Define la prop modelValue para recibir la referencia
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
});

const id = `s-button-check-${crypto.randomUUID()}`

</script>

<style scoped>
.btn.btn-outline-primary {
  color: #9397a1;
  border-color: #9397a1;
  z-index: 0 !important;
}

input:checked + .btn {
  color: #f08125;
  background-color: rgba(240, 129, 37, 0.1);
  border-color: #f08125;
}

.scisa-input-mui {
  border: none;
  border-bottom: 1px solid #555;
  background-color: transparent;
  min-width: 20rem;
  min-height: 3rem;
}

.scisa-input-mui:focus {
  box-shadow: #f08125;
}

.separator-button:hover {
  background-color: rgba(240, 129, 37, 0.15);
  transition: 0.3s;
}
</style>
