<template>
  <div class="card mb-2 bg-ternary py-3 s-card-table-cardrow">
    <div class="row">
      <div
        v-for="(value, idx) in values"
        :name="`col-${keys[idx]}`"
        class="col"
      >
        {{ value }} 
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";
import { ListItem } from "./types";

const props = defineProps<{
  item: ListItem;
}>();

const keys = ref<string[]>(Object.keys(props.item));
const values = ref<string[]>(Object.values(props.item));

</script>

<style>
.card.s-card-table-cardrow {
  border: none !important;
  transition: 0.1s;
}

.card.s-card-table-cardrow:hover {
  background-color: rgba(44, 50, 58, 0.5) !important;
}
</style>
