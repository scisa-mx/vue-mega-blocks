<template>
  <div class="mb-2">
    <h3 class="p-0 mb-0">{{ props.label }}</h3>
    <div class="d-flex align-items-center justify-content-center m-0">
      <hr class="w-100 my-1" />
      <span class="d-flex" v-if="props.action">
        <slot name="action"></slot>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  label: string;
  action?: boolean;
}>();
</script>
