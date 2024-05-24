<template>
  <FilterContainer
    @data="handlerFilters"
    :filters="props.filters"
  ></FilterContainer>
  <s-pagination
    v-if="positionPagination.upper"
    :totalPages="props.pagination.totalPages"
    :currentPage="pagination.currentPage"
    :nextPage="pagination.nextPage"
    :previousPage="pagination.previousPage"
    v-model="pagination"
  ></s-pagination>
  <div class="overflow-x-auto overflow-y-hidden">
    <table class="table table-hover table-striped">
      <thead>
        <tr>
          <th
            v-for="item in headers"
            :role="item.isSorteable ? 'button' : ''"
            @click="handlerSort(item)"
          >
            <div class="d-flex">
              <span>{{ item.label }}</span>
              <span v-if="item.isSorteable" class="d-flex flex-column mx-1">
                <i
                  v-if="item.state == 'DESC'"
                  class="bi bi-caret-down-fill text-primary"
                ></i>
                <i
                  v-if="item.state == 'ASC'"
                  class="bi bi-caret-up-fill text-primary"
                ></i>
                <i
                  v-if="item.state == null"
                  class="bi bi-dash-lg text-secondary"
                ></i>
              </span>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <!-- TODO: HACER QUE LOS PROPS.ITEMS NO SEAN DE LOS PROPS, COPIAR LOS VALORES AL MONTAR EL COMPOENENT -->
        <tr
          role="button"
          v-for="(item, index) in props.items"
          @click="onRowClick(item, index, $event)"
        >
          <template v-for="td in headers">
            <td v-if="$slots[`cell-${td.key}`]">
              <slot :name="`cell-${td.key}`" :item="item" />
            </td>
            <td v-else>{{ item[td.key] }}</td>
          </template>
        </tr>
        <tr v-if="props.items?.length == 0">
          <td :colspan="headers.length">
            {{ props.notFoundMsg }}
          </td>
        </tr>
      </tbody>
    </table>
    <s-pagination
      v-if="positionPagination.lower"
      :totalPages="props.pagination.totalPages"
      :currentPage="pagination.currentPage"
      :nextPage="pagination.nextPage"
      :previousPage="pagination.previousPage"
      v-model="pagination"
    ></s-pagination>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import SPagination from "./ScsiaComponents/SPagination.vue";
import FilterContainer from "@/components/filters/FilterContainer.vue";

import { InternalHeader, LiteTable } from "../types";

const positionPagination = ref({
  upper: false,
  lower: true,
  both: false,
});

const emit = defineEmits<{
  "row-clicked": [item: any, index: number, event: MouseEvent];
  "cell-clicked": [item: any, index: number, event: MouseEvent];
  callback: [filters: any, pagination: any];
  sort: [sort: { [key: string]: string }];
}>();
const props = defineProps<LiteTable>();

const headers = ref<InternalHeader[]>([]);

const filters = ref<any>({});

const pagination = ref({
  totalPages: props.pagination.totalPages,
  currentPage: Number(JSON.parse(JSON.stringify(props.pagination.currentPage))),
  nextPage: 2,
  previousPage: 1,
});

const handlerPositionPagination = () => {
  switch (props.typeOfPagination) {
    case "lower":
      positionPagination.value.lower = true;
      break;
    case "upper":
      positionPagination.value.upper = true;
      positionPagination.value.lower = false;
      break;
  }
};

const handlerSort = (item: InternalHeader): void => {
  const result: { [key: string]: string } = {};
  headers.value.forEach((header) => {
    if (header.key === item.key) {
      header.state = header.state === "ASC" ? "DESC" : "ASC";
    } else {
      header.state = null;
    }
  });
  if (item.state != null) result[item.key] = item.state;
  emit("sort", result);
};

const stablishHeaders = (): void => {
  if (props.headers)
    headers.value = props.headers.map((item, idx) => {
      return {
        label: item.label,
        isSorteable: item.sorteable,
        state: null,
        idx: idx,
        key: item.key,
      };
    });
};

const stablshFitlers = (): void => {
  if (props.filters)
    props.filters?.forEach((item) => {
      filters.value[item.key] = { value: "", key: "" };
    });
};

const onRowClick = (row: any, index: number, e: MouseEvent): void => {
  emit("row-clicked", row, index, e);
};

const handlerFilters = (item: any) => {
  filters.value = item;
  actionCallback();
};

const actionCallback = async () => {
  try {
    emit("callback", filters.value, pagination.value);
  } catch {}
};

onMounted(() => {
  stablishHeaders();
  stablshFitlers();
  handlerPositionPagination();
});

watch(
  headers,
  async (_, __) => {
    await actionCallback();
  },
  { deep: true }
);

watch(
  pagination,
  async (_, __) => {
    await actionCallback();
  },
  { deep: true }
);
</script>
