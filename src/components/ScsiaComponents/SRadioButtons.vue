<template>
  <div class="btn-group btn-group-scisa mb-5" role="group" aria-label="">
    <div v-for="(option, index) in options" :key="index">
      <input
        type="radio"
        class="btn-check"
        :id="getOptionId(option)"
        :value="option.value"
        v-model="selectedOption"
        autocomplete="off"
      />
      <label class="btn btn-outline-primary fs-5" :for="getOptionId(option)">
        <span
          class="indicator"
          :class="{ active: selectedOption === option.value }"
        ></span>
        {{ option.label }}
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits, watch } from "vue";

const emit = defineEmits(["input"]);

const props = defineProps<{
  options: { label: string; value: string }[];
  initialValue?: string;
}>();

const selectedOption = ref<string | null>(props.initialValue || null);

const getOptionId = (option: { label: string; value: string }) => {
  return `btnradio-${option.value}`;
};

const emitSelection = () => {
  emit("input", selectedOption.value);
};
watch(selectedOption, () => {
  emitSelection();
});
</script>

<style scoped>
.indicator {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 5px;
  background-color: transparent;
}

.indicator.active {
  background-color: #f08125;
}

.btn-group,
.btn-check,
.btn {
  margin: 0;
  padding: 0;
  border: none;
  background-color: transparent;
  font-size: inherit;
  color: inherit;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #9397a1;
  gap: 1rem;
}

.btn-group,
.btn-check,
.btn {
  margin: 0;
  padding: 0;
  border: none;
  background-color: transparent;
  font-size: inherit;
  color: inherit;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #9397a1;
}

.btn-check:checked + .btn {
  color: #fff;
  background-color: transparent;
}
</style>
