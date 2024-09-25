export default {
  editor: {
    label: {
      en: "Tabs",
    },
    icon: "view-grid",
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
      bindable: true,
      defaultValue: "horizontal",
    },
    controlled: {
      label: "Manual control",
      type: "OnOff",
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
