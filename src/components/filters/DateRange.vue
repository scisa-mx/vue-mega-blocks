<template>
  <div class="col-3 h-100">
    <template v-if="props.label">
      <label class="ml-3 my-2 fw-semibold">{{ props.label }}</label>
    </template>
    <VDatePicker v-model.range="range" :popover="false">
      <template #default="{ togglePopover, inputValue, inputEvents }">
        <div class="input-group w-100">
          <button
            class="button-date-picker text-white btn bg"
            @click="() => togglePopover()"
          >
            <i class="bi bi-calendar"></i>
          </button>
          <input
            :value="`${inputValue.start} - ${inputValue.end}`"
            v-on="inputEvents"
            class="form-control"
          />
        </div>
      </template>
    </VDatePicker>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

interface DateRange {
  label: string;
  identifier: string;
}

const props = defineProps<DateRange>();
const emit = defineEmits();

const range = ref({
  start: new Date(),
  end: new Date(),
});

watch(
  range,
  (_, __) => {
    emit("update:modelValue", {
      value: [range.value.start, range.value.end],
      key: props.identifier,
    });
  },
  { deep: true },
);
</script>

<style>
input.input-date-picker {
  background-color: #212529;
  border: 1px solid #495057;
  border-left: none;
  border-radius: 6px 6px 6px 6px;
  width: 90%;
}

button.button-date-picker {
  border: 1px solid #495057;
  border-right: none;
  width: 15%;
}

button.button-date-picker:focus-visible {
  box-shadow: none !important;
  border: 1px solid #495057;
}

button.button-date-picker:hover {
  border: 1px solid #495057;
  border-right: none;
  background-color: rgba(240, 129, 37, 0.3);
}

.vc-pane-container {
  background-color: #212529;
  color: whitesmoke;
}

.vc-day-content.vc-focusable.vc-focus.vc-attr.vc-attr.vc-highlight-content-solid.vc-blue {
  background-color: #f08125;
}

button.vc-arrow {
  background-color: transparent;
}

button.vc-nav-arrow {
  background-color: transparent;
}

button.vc-title {
  background-color: transparent;
  color: white;
}

.vc-tittle span {
  color: white !important;
}
.vc-nav-container {
  background-color: #212529;
}

.vc-nav-item {
  background-color: #2c323a !important;
}

.vc-nav-item.vc-focus.is-current {
  color: #f08125;
}

.vc-nav-title {
  background-color: #2c323a !important;
  color: white !important;
}
.vc-title-wrapper span {
  color: white !important;
}
.vc-blue {
  --vc-accent-50: transparent;
  --vc-accent-100: transparent;
  --vc-accent-200: rgba(240, 129, 37, 0.2) !important ;
  --vc-accent-300: transparent;
  --vc-accent-400: transparent;
  --vc-accent-500: transparent;
  --vc-accent-600: #f08125 !important;
  --vc-accent-700: #f08125 !important;
  --vc-accent-800: transparent;
  --vc-accent-900: white !important;
}
</style>
