<template>
  <div class="tabs-scisa">
    <div v-if="!hideTabs" class="tabs">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        @click="changeTab(index)"
        :class="{ tab: true, active: activeTab === index }"
      >
        {{ tab.label }}
      </div>
    </div>
    <transition name="fade">
      <div class="tab-content" v-if="tabs.length > 0">
        <slot :name="tabs[activeTab ?? 0].slotName"></slot>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const props = defineProps<{
  tabs: { label: string; slotName: string }[];
  initialTab?: number;
  hideTabs?: boolean;
  activeTab?: number | string;
}>();

const activeTab = ref<number | undefined>(props.initialTab || 0);

const changeTab = (index: number) => {
  activeTab.value = index;
};

// Si se pasa un activeTabProp, sincronizar el estado del tab activo
if (props.activeTab !== undefined) {
  watch(
    () => props.activeTab,
    (newValue) => {
      if (newValue !== undefined && newValue !== null) {
        activeTab.value = findTabIndexByActiveTab(newValue.toString());
      }
    }
  );
}

const findTabIndexByActiveTab = (activeTab: string | undefined): number => {
  if (activeTab)
    return props.tabs.findIndex((tab) => tab.slotName === activeTab);
  return 0;
};
</script>

<style scoped>
.tabs {
  display: flex;
}

.tab {
  padding: 10px 15px;
  cursor: pointer;
}

.tab.active {
  background-color: #007bff;
  color: white;
}

.tab-content {
  margin-top: 10px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
