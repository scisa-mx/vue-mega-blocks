<template>
  <nav class="s-pagination my-3" aria-label="pagination">
    <ol class="s-pagination-list">
      <li
        class="first-page item-pagination rounded-circle"
        @click="goToFirstPage"
      >
        <span>&laquo;</span>
      </li>
      <li
        class="first-page item-pagination rounded-circle"
        @click="gotoPreviuosPage"
      >
        <span>‹</span>
      </li>
      <li
        v-for="pageNumber in visiblePages"
        :key="pageNumber"
        class="rounded-circle"
        :class="{
          'item-pagination': true,
          'item-pagination-active': pageNumber === currentPage,
        }"
        @click="changePage(pageNumber)"
      >
        {{ pageNumber }}
      </li>
      <li
        class="last-page item-pagination rounded-circle"
        @click="gotoNextPage"
      >
        <span>›</span>
      </li>
      <li
        class="last-page item-pagination rounded-circle"
        @click="goToLastPage"
      >
        <span>&raquo;</span>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import { defineProps, ref, computed } from "vue";

const emit = defineEmits()
const MAX_PAGES = 5;

const props = defineProps<{
  totalPages: number;
  currentPage: number;
  nextPage?: number;
  previousPage?: number;
  modelValue: object;
}>();

const currentPage = ref<number>(1)


const returnData = () => {
  let nextPage = currentPage.value+1
  let previousPage = 1
  if(currentPage.value < MAX_PAGES) nextPage = currentPage.value+1
  if(currentPage.value > 1) previousPage = currentPage.value-1
  emit('update:modelValue', {
    totalPages: props.totalPages,
    currentPage: currentPage.value,
    nextPage: nextPage,
    previousPage: previousPage
  })
}

const changePage = (pageNumber: number) => {
  currentPage.value = pageNumber
  returnData()
};

const goToFirstPage = () => {
  if(props.totalPages > 0) currentPage.value = 1
  returnData()
};

const gotoNextPage = () => {
  if(currentPage.value === props.totalPages) return
  currentPage.value = currentPage.value+1
  returnData()
}

const gotoPreviuosPage = () => {
  if(currentPage.value === 1) return
  currentPage.value = currentPage.value-1
  returnData()
}

const goToLastPage = () => {
  currentPage.value = props.totalPages
  returnData()
}

const visiblePages = computed(() => {
  const totalPages = (props.totalPages);
  const currentPageV = currentPage.value;
  const result = [];

  // Si hay menos páginas que MAX_PAGES, mostrar todas las páginas
  if (totalPages <= MAX_PAGES) {
    for (let i = 1; i <= totalPages; i++) {
      result.push(i);
    }
  } else {
    // Si hay más páginas, mostrar MAX_PAGES páginas centradas en la página actual
    let startPage = Math.max(1, currentPageV - Math.floor(MAX_PAGES / 2));
    let endPage = Math.min(totalPages, startPage + MAX_PAGES - 1);

    if (endPage - startPage < MAX_PAGES - 1) {
      startPage = Math.max(1, endPage - MAX_PAGES + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      result.push(i);
    }
  }

  return result;
});
</script>

<style scoped>
.s-pagination {
  background-color: transparent !important;
}

.s-pagination-list,
.s-pagination > ol,
.s-pagination > ol > li {
  list-style: none;
  margin: 0;
  padding: 0;
  box-shadow: none;
  color: white;
}

.s-pagination > ol {
  display: flex;
}

.s-pagination > ol > li {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  cursor: pointer;
}

.s-pagination > ol > li:hover {
  background-color: rgba(240, 129, 37, 1);
}

.item-pagination {
  margin-right: 5px;
  margin-left: 5px;
}

.item-pagination-active {
  background-color: rgba(240, 129, 37, 1);
}
</style>
