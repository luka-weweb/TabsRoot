<script>
import { computed } from "vue";

export default {
  props: {
    content: { type: Object, required: true },
    wwFrontState: { type: Object, required: true },
    wwEditorState: { type: Object, required: true },
  },
  emits: ["trigger-event"],
  data() {
    return {
      tabTriggers: [],
      internalActiveTab: this.content.controlled
        ? this.content.default
        : this.content.modelValue,
    };
  },
  computed: {
    computedActiveTab: {
      get() {
        return this.content.controlled
          ? this.content.modelValue
          : this.internalActiveTab;
      },
      set(newValue) {
        if (this.content.controlled) {
          this.$emit("trigger-event", {
            name: "change",
            event: { value: newValue },
          });
        } else {
          this.internalActiveTab = newValue;
        }
      },
    },
  },
  methods: {
    setActiveTab(tabId) {
      this.computedActiveTab = tabId;
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
          (tab) => tab.id === this.computedActiveTab
        );
        const newIndex =
          event.key === prevKey
            ? (currentIndex - 1 + this.tabTriggers.length) %
              this.tabTriggers.length
            : (currentIndex + 1) % this.tabTriggers.length;

        this.setActiveTab(this.tabTriggers[newIndex].id);
        this.tabTriggers[newIndex].element.focus();
      }
    },
  },
  provide() {
    return {
      activeTabProvided: computed(() => this.computedActiveTab),
      setActiveTab: this.setActiveTab,
      registerTabTrigger: this.registerTabTrigger,
    };
  },
  mounted() {
    window.addEventListener("keydown", this.handleKeyDown);
  },
  unmounted() {
    window.removeEventListener("keydown", this.handleKeyDown);
  },
};
</script>

<template>
  <div>
    <wwLayout path="slot" />
  </div>
</template>
