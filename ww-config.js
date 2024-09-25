export default {
  editor: {
    label: {
      en: "Tabs",
    },
    icon: "view-grid",
  },
  inherit: {
    type: "ww-layout",
  },
  options: {
    autoByContent: true,
    displayAllowedValues: ["flex", "grid"],
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
    activation: {
      label: "Appearance",
      type: "TextSelect",
      options: {
        options: [
          { label: "Automatic", value: "auto", default: true },
          { label: "Manual", value: "manual" },
        ],
      },
      propertyHelp: {
        tooltip: `If this is On, the trigger will activate when receiving focus.`,
      },
      bindable: true,
      defaultValue: "",
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
