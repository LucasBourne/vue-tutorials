Vue.createApp({
  methods: {
    showAlert() {
      alert("Here is some text!");
    },
    updateParagraph(event) {
      this.liveParagraph = event.target.value;
    },
    saveParagraph() {
      this.savedParagraph = this.liveParagraph;
    },
  },
  data() {
    return {
      liveParagraph: "",
      savedParagraph: "",
    };
  },
}).mount("#assignment");
