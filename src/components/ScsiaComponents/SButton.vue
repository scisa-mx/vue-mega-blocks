<template>
  <button :class="classes">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';

interface ButtonProps {
  color?: string;
  size?: 'sm' | 'md' | 'lg';
  outline?: boolean;
}

const { color, size, outline } = defineProps<ButtonProps>();

const classes = computed(() => [
  'btn',
  color && `btn-${outline ? 'outline-' : ''}${color}`,
  size && `btn-${size}`,
]);
</script>

<style scoped>

.btn.btn-outline:hover {
  color: whitesmoke !important;
}

</style>