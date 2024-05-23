<template>
  <section class="row d-flex align-items-center" name="filters-lite-table">
    <template v-for="filter in filters">
      <SelectLite
        v-if="filter.type == 'select'"
        :label="filter.label"
        :options="isSelect(filter.data)"
        :identifier="filter.key"
        v-model="dataFilter[filter.key]"
      />
      <DatePicker
        v-if="filter.type == 'date-picker'"
        :label="filter.label"
        :identifier="filter.key"
        v-model="dataFilter[filter.key]"
      />
      <DateRange
        v-if="filter.type == 'date-range'"
        :label="filter.label"
        :identifier="filter.key"
        v-model="dataFilter[filter.key]"
      />
      <Searcher
        v-if="filter.type == 'searcher'"
        :label="filter.label"
        :identifier="filter.key"
        v-model="dataFilter[filter.key]"
      />
    </template>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { Filter } from "./types";
import SelectLite from "./SelectLite.vue";
import DatePicker from "./DatePicker.vue";
import DateRange from "./DateRange.vue";
import Searcher from "./Searcher.vue";

import { FiltersContainer, DataFilterContainer } from "./types";

const props = defineProps<FiltersContainer>();
const dataFilter = ref<DataFilterContainer>({});

const emit = defineEmits<{
  data: [item: any];
}>();

const filters = props.filters;
const FIRST = ref(true);

const isSelect = (data: any) => {
  if (Array.isArray(data)) {
    return data;
  } else {
    return [];
  }
};

const generateKeys = () => {
  filters?.forEach((item) => {
    dataFilter.value[item.key] = { value: "", key: '' };
  });
};

onMounted(() => {
  generateKeys();
});

watch(
  dataFilter,
  (_, __) => {
    if (!FIRST.value) {
      emit("data", dataFilter.value);
    } else {
      FIRST.value = false;
    }
  },
  { deep: true },
);
</script>
