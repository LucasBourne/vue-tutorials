Vue.createApp({
  data() {
    return {
      textValue: "",
      showParagraph: true,
      hexColor: "#ccc",
    };
  },
  watch: {
    hexColor(value) {
      if (Array.from(value)[0] != "#") {
        this.hexColor = "#" + value;
      }
    },
  },
  methods: {
    toggleParagraphVisibility() {
      this.showParagraph = !this.showParagraph;
    },
  },
}).mount("#assignment");
