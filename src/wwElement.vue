<script>
import { computed } from "vue";
export default {
  data() {
    return {
      activeTab: "tab1",
    };
  },
  provide() {
    return {
      activeTabProvided: computed(() => this.activeTab),
      setActiveTab: this.setActiveTab,
    };
  },
  methods: {
    setActiveTab(tabId) {
      this.activeTab = tabId;
    },
  },
  mounted() {
    this.activeTab = this.content.defaultValue;
  },
};
</script>

<template>
  <div>
    <wwLayout path="slot" />
  </div>
</template>
