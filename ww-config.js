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
    slot: {
      hidden: true,
      defaultValue: [],
    },
  },
};
