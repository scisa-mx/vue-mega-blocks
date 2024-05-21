<template>
  <section class="row mt-2 row-gap-2">
    <div class="row w-100">
      <div v-for="header in headers" :class="['col', header.class]">
        <h5 class="fs-5">{{ header.text }}</h5>
      </div>
    </div>
    <div v-if="dataFound === false" class="row">
      <div class="card mb-2 bg-ternary py-3 s-card-table-cardrow">
        <h5>{{ NO_DATA_STRING }}</h5>
      </div>
    </div>
    <div
      v-else
      :role="props.isRowClickable ? 'button' : ''"
      class="row gap-row-2"
    >
      <s-card-table-row
        v-for="item in items"
        :item="item"
        @click="handleRowClick(item)"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import SCardTableRow from "./SCardTableRow.vue";
import { defineProps, defineEmits, ref, onMounted } from "vue";
import { HeaderItem, ListItem } from "./types";

const emits = defineEmits(["row-click"]);

const handleRowClick = (item: ListItem) => {
  emits("row-click", item);
};

const props = defineProps<{
  headers: HeaderItem[];
  items?: ListItem[];
  notFoundText?: string;
  isRowClickable?: boolean;
  callback?: Function;
}>();

const NO_DATA_STRING = ref<string>(props.notFoundText || "Not data found ");
const dataFound = ref<boolean>(false);

const totalColumns = () => {
  return props.headers.reduce((acc, header) => {
    return acc + (parseInt(header.class || "") || 1);
  }, 0);
};

onMounted(() => {
  // TODO: Investigar si es correcto poner esta clase de Errores dentro del coponente o es mejor sacarlos de alguna forma
  if(totalColumns() > 12) throw Error('Use a maximum of 12 columns for tables.')
  if (props.items && props.items.length > 0) dataFound.value = true;
});


</script>

