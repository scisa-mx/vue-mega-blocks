<template>
    <div class="position-relative">
        <div v-if="loading"
            class="loader-wrapper active position-absolute top-50 start-50 translate-middle z-3 w-100 h-100">
            <div class="spinner-border text-primary position-absolute top-50 start-50" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
        <div class="content-wrapper z-1">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
    loading: Boolean
});
</script>

<style scoped>
.loader-wrapper.active {
    background-color: rgba(26, 32, 41, 0.3);
}
</style>