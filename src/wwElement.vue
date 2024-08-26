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
      tabTriggers: [],
    };
  },
  computed: {
    activeTab: {
      get() {
        return this.content.controlled
          ? this.content.default
          : this.content.modelValue;
      },
      set(newValue) {
        if (!this.content.controlled) {
          this.$emit("update:modelValue", newValue);
        }
      },
    },
  },
  provide() {
    return {
      activeTabProvided: computed(() => this.activeTab),
      setActiveTab: this.setActiveTab,
      registerTabTrigger: this.registerTabTrigger,
    };
  },
  methods: {
    setActiveTab(tabId) {
      this.activeTab = tabId;
    },
    registerTabTrigger(tabId, element) {
      this.tabTriggers.push({ id: tabId, element });
    },
    handleKeyDown(event) {
      const isVertical = this.content.orientation === "vertical";
      const prevKey = isVertical ? "ArrowUp" : "ArrowLeft";
      const nextKey = isVertical ? "ArrowDown" : "ArrowRight";

      if (event.key === prevKey || event.key === nextKey) {
        const currentIndex = this.tabTriggers.findIndex(
          (tab) => tab.id === this.activeTab
        );
        let newIndex;

        if (event.key === prevKey) {
          newIndex =
            currentIndex > 0 ? currentIndex - 1 : this.tabTriggers.length - 1;
        } else {
          newIndex =
            currentIndex < this.tabTriggers.length - 1 ? currentIndex + 1 : 0;
        }

        this.setActiveTab(this.tabTriggers[newIndex].id);
        this.tabTriggers[newIndex].element.focus();
      }
    },
  },
  mounted() {
    window.addEventListener("keydown", this.handleKeyDown);
  },
  beforeUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  },
};
</script>

<template>
  <div>
    <wwLayout path="slot" />
  </div>
</template>
