<template>
  <div class="col-3">
    <div class="custom-datalist-container">
      <template v-if="props.label">
        <label class="ml-3 my-2 fw-semibold" :for="localID">{{
          props.label
        }}</label>
      </template>
      <input
        type="search"
        class="form-control"
        :id="localID"
        v-model="selectedOption"
        @input="filterOptions"
        @focus="isFocused = true"
        @blur="isFocused = false"
        @search="handleSearch"
      />
      <div v-show="isFocused" class="custom-datalist w-100 bg-dark">
        <div
          v-if="filteredOptions.length > 0"
          v-for="opt in filteredOptions"
          :key="opt.text"
          class="option"
          @mousedown="selectOption(opt)"
        >
          {{ opt.text }}
        </div>
        <div v-else class="option">
          Not Found
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ItemSelect } from "./types";

interface Filter {
  filter: string;
}

const emit = defineEmits();
const props = defineProps<{
  options: ItemSelect[];
  modelValue: object;
  filter?: Filter;
  label?: string;
  identifier: string;
}>();

const localID = `s-selector-${crypto.randomUUID()}`;
const selectedOption = ref<string>("");
const selectOptions = props.options;
const filteredOptions = ref<ItemSelect[]>(selectOptions);
const isFocused = ref<boolean>(false);

const filterOptions = () => {
  const filterText = selectedOption.value.toLowerCase();
  filteredOptions.value = selectOptions.filter((org) =>
    org.text.toLowerCase().includes(filterText),
  );
};

const selectOption = (option: ItemSelect) => {
  selectedOption.value = option.text;
  filteredOptions.value = [];
  if (props.filter && props.filter.filter === "value") {
    emit("update:modelValue", option.value);
    return;
  }
  if (props.filter && props.filter.filter === "text") {
    emit("update:modelValue", option.text);
    return;
  }
  emit("update:modelValue", { value: option.value, key: props.identifier });
};

const handleSearch = () => {
  if (!selectedOption.value) {
    emit("update:modelValue", "");
  }
};
</script>

<style scoped>
.custom-datalist-container {
  position: relative;
}

.custom-datalist {
  position: absolute;
  z-index: 1000;
  background-color: white;
  border: 1px solid #ccc;
  border-top: none;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.custom-datalist .option {
  padding: 8px;
  cursor: pointer;
}

.custom-datalist .option:hover {
  background-color: rgba(240, 129, 37, 0.3);
}

.close-btn-selector {
  transition: 0.1s;
}

.close-btn-selector:hover {
  transform: scale(1.2);
}
</style>
