export default {
  editor: {
    label: {
      en: "My Element",
    },
    icon: "view-grid",
  },
  properties: {
    textColor: {
      label: {
        en: "Text color",
      },
      type: "Color",
      defaultValue: "#F23636",
    },
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
    slot: {
      hidden: true,
      defaultValue: [],
    },
  },
};
