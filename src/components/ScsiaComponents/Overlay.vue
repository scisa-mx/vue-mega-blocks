<template>
  <div class="v-overlay-wrapper ">
    <transition name="overlay-transition">
      <div class="v-overlay rounded" v-if="props.loading"></div>
    </transition>
    <div class="o-overlay-content p-2">
      <slot></slot>
    </div>
    <transition name="spinner-transition">
      <div class="spinner-overlay" v-if="props.loading">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  loading: Boolean,
});
</script>

<style scoped>
.overlay-transition-enter-active,
.overlay-transition-leave-active {
  transition: opacity 0.3s;
}

.overlay-transition-enter,
.overlay-transition-leave-to {
  opacity: 0;
}

.spinner-transition-enter-active,
.spinner-transition-leave-active {
  transition: opacity 0.3s;
}

.spinner-transition-enter,
.spinner-transition-leave-to {
  opacity: 0;
}

.v-overlay-wrapper {
  position: relative;
}

.v-overlay {
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5); /* Color de fondo del overlay */
}

.spinner-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}
</style>
