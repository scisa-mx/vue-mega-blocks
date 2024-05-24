<template>
  <div class="input-group input-searcher-scisa">
    <span class="input-group-text">
      <i class="bi bi-search"></i>
    </span>
    <input type="text" class="form-control" placeholder="Buscar" @input="updateValue($event)" :value="internalValue" />
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, watch } from 'vue'

const emit = defineEmits()

const props = defineProps<{
  modelValue: string;
}>()

const internalValue = ref(props.modelValue)

// Observa cambios en props.modelValue y actualiza internalValue
watch(() => props.modelValue, (newValue) => {
  internalValue.value = newValue
})

const updateValue = (event: Event) => {
  const target = event.target as HTMLInputElement | null;
  if (target) {
    emit('update:modelValue', target.value)
  }
}
</script>

<style scoped>
span.input-group-text {
  border: none;
  background-color: #2C2C2C;
  border-radius: 20px;
  height: 40px;
}

input.form-control {
  border: none;
  background-color: #2C2C2C;
  border-radius: 20px;
  height: 40px;
}

.input-group:focus-within input.form-control,
.input-group:focus-within .input-group-text {
  border-color: #f08125 !important;
}

input.form-control:focus {
  box-shadow: none !important;
  border-color: #f08125 !important;
}
</style>
