<template>
  <nav class="s-under-tabs">
      <div class="tabs">
        <div
          class="item-under-tab"
          v-for="(tab, index) in tabs"
          :key="index"
          @click="changeTab(index)"
          :class="{ tab: true, active: activeTab === index }"
        >
          <h5>{{ tab.label }}</h5>
        </div>
      </div>
      <div class="tab-content">
        <slot :name="tabs[activeTab].slotName" />
      </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { UnderTabs } from "../../types";

const props = defineProps<UnderTabs>();
const activeTab = ref<number>(props.initialTab || 0);

const changeTab = (index: number) => {
  activeTab.value = index;
};

// Si se pasa un activeTabProp, sincronizar el estado del tab activo
if (props.activeTab !== undefined) {
  watch(
    () => props.activeTab,
    (newValue) => {
      if (newValue)
        activeTab.value = findTabIndexByActiveTab(newValue.toString());
    },
  );
}

const findTabIndexByActiveTab = (activeTab: string | undefined): number => {
  if (activeTab)
    return props.tabs.findIndex((tab) => tab.slotName === activeTab);
  return 0;
};
</script>

<style>
.s-under-tabs .tabs{
  display: flex;
  align-items: center;
  gap: 1rem;
}

.tabs > .item-under-tab {
  cursor: pointer;
}

.item-under-tab.tab{
  color: #c1c1c4 !important;
  border-bottom: 0.15rem solid #9397A1 !important;
}

.item-under-tab.tab > h5{
  padding: 0;
  margin-bottom: 5px;
  font-weight: normal;
  font-size: 18px;
}

.item-under-tab.tab.active {
  background-color: transparent !important;
  color: #F08125 !important;
  border-color: #F08125 !important;
}


</style>