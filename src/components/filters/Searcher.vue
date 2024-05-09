<template>
  <div :class="``">
    <label class="my-2" for="">{{ props.label }}</label>
    <input v-model="query" class="form-control" type="text" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

interface Searcher {
  label: string;
  identifier: string;
  size?: number;
}

const props = defineProps<Searcher>();
const emit = defineEmits();
const query = ref<string>("");

const debounce = (fn: Function, delay: number) => {
  let timeoutId: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};


watch(
  query,
  debounce((_: string, __: string) => {
    emit("update:modelValue", {value: query.value, key: props.identifier});
  }, 700), // Tiempo de espera en milisegundos (300 ms en este caso)
);
</script>
