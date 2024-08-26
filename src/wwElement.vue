<script>
import { computed } from "vue";
export default {
  props: {
    content: { type: Object, required: true },
    wwFrontState: { type: Object, required: true },
    wwEditorState: { type: Object, required: true },
  },
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
    this.activeTab = this.content.default;
  },
};
</script>

<template>
  <div>
    <wwLayout path="slot" />
  </div>
</template>
