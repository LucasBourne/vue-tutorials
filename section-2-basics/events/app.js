const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      incrementAmount: 1,
      name: "",
      confirmedName: "",
    };
  },
  watch: {
    counter(next, previous) {
      if (next > previous) {
        console.log("Counter has increased by " + (next - previous));
      } else {
        console.log("Counter has decreased by " + (previous - next));
      }
    },
  },
  methods: {
    incrementCounter() {
      this.counter = this.counter + this.incrementAmount;
    },
    decrementCounter() {
      this.counter = this.counter - this.incrementAmount;
    },
    submitForm(event) {
      alert("submitted");
    },
    confirmName(event) {
      this.confirmedName = this.name;
    },
    resetValues() {
      this.name = "";
      this.confirmedName = "";
    },
  },
  computed: {
    fullName() {
      if (this.name === "") {
        return "";
      }
      return this.name + " Bourne";
    },
  },
});

app.mount("#events");
