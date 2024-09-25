export default {
  editor: {
    label: {
      en: "Tabs",
    },
    icon: "view-grid",
  },
  options: {
    autoByContent: true,
    layout: ["flex", "grid"],
  },
  triggerEvents: [
    {
      name: "change",
      label: { en: "On change" },
      event: { value: "" },
      default: true,
    },
  ],
  properties: {
    default: {
      label: {
        en: "Default value",
      },
      type: "Text",
      bindable: true,
      defaultValue: "",
    },
    orientation: {
      label: "Orientation",
      type: "TextSelect",
      options: {
        options: [
          { label: "Vertical", value: "vertical", default: true },
          { label: "Horizontal", value: "horizontal" },
        ],
      },
      propertyHelp: {
        tooltip: `If set to vertical, up and down arrow keys will toggle through options and left and right for horizontal.`,
      },
      bindable: true,
      defaultValue: "horizontal",
    },
    controlled: {
      label: "Manual control",
      type: "OnOff",
      propertyHelp: {
        tooltip: `If`,
      },
      bindable: true,
      defaultValue: true,
    },
    modelValue: {
      label: "Value",
      type: "Text",
      bindable: true,
      defaultValue: "",
      hidden: (content) => !content.controlled,
    },
    slot: {
      hidden: true,
      defaultValue: [],
    },
  },
};
