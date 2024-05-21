<template>
    <component :is="tag" :class="classes" v-bind="$attrs">
      <slot />
    </component>
  </template>
  
  <script setup lang="ts">
  import { defineProps, ref, computed } from 'vue';
  
  interface SizeClasses {
    bigger: string;
    big: string;
    body: string;
    medium: string;
    small: string;
    smaller: string;
  }
  
  interface ColorClasses {
    white: string;
    black: string;
    primary: string;
    secondary: string;
    ternary: string;
    muted: string;
  }
  
  interface WeightClasses {
    regular: string;
    bold: string;
    semiBold: string;
  }
  
  const { as, size, color, weight } = defineProps<{
    as: string;
    size: keyof SizeClasses;
    color: keyof ColorClasses;
    weight?: keyof WeightClasses;
  }>();
  
  const tag = ref<string>(as || 'p');
  
  const SizeClasses: SizeClasses = {
    bigger: 'fs-1',
    big: 'fs-2',
    body: 'fs-3',
    medium: 'fs-5',
    small: 'fs-6',
    smaller: 'fs-7'
  };
  
  const colorClasses: ColorClasses = {
    white: 'text-white',
    black: 'text-black',
    primary: 'text-primary',
    secondary: 'text-body-secondary',
    ternary: 'text-ternary',
    muted: 'text-body-secondary'
  };
  
  const weightClasses: WeightClasses = {
    regular: 'fw-normal',
    bold: 'fw-bold',
    semiBold: 'fw-semibold',
  };
  
  const classes = computed(() => [
    SizeClasses[size],
    colorClasses[color],
    weight && weightClasses[weight],
  ]);
  </script>
  
  <style scoped>
  /* Agrega estilos específicos para tu componente aquí */
  
  .fs-7 {
    font-size: 0.75rem;
  }
  </style>
  