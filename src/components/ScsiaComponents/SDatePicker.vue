<template>
  <VDatePicker v-model="date" :popover="false">
    <template #default="{ togglePopover, inputValue, inputEvents }">
      <div
        class="input-group"
      >
        <button
          class="button-date-picker text-white btn bg"
          @click="() => togglePopover()"
        >
          <i class="bi bi-calendar"></i>
        </button>
        <input
          :value="inputValue"
          v-on="inputEvents"
          class="input-date-picker"
        />
      </div>
    </template>
  </VDatePicker>
</template>

<script setup lang="ts">
import { ref } from "vue";

const date = ref(new Date());
</script>

<style>

input.input-date-picker{
  background-color: #212529;
  border: 1px solid #495057;
  border-left: none;
  border-radius: 6px 6px 6px 6px;
}

button.button-date-picker{
  border: 1px solid #495057;
  border-right:none ;
}

button.button-date-picker:focus-visible{
  box-shadow: none !important;
  border: 1px solid #495057;
}

button.button-date-picker:hover{
  border: 1px solid #495057;
  border-right:none ;
  background-color: rgba(240, 129, 37, 0.3);
}

.vc-pane-container{
  background-color: #212529;
  color: whitesmoke;
}

.vc-day-content.vc-focusable.vc-focus.vc-attr.vc-attr.vc-highlight-content-solid.vc-blue{
  background-color: #F08125;
}

button.vc-arrow {
  background-color: transparent;
}

button.vc-nav-arrow {
  background-color: transparent;
}

button.vc-title{
  background-color: transparent;
  color: white;
}

.vc-tittle span {
  color: white !important;
}
.vc-nav-container{
  background-color: #212529;
}

.vc-nav-item {
  background-color: #2c323a !important;
}

.vc-nav-item.vc-focus.is-current{
  color: #F08125;
}

.vc-nav-title{
  background-color: #2c323a !important;
  color: white !important;
}
.vc-title-wrapper span{
  color: white !important;
}

</style>
