const app = Vue.createApp({
  data() {
    return {
      currentGoal: "",
      goals: [],
    };
  },
  methods: {
    addGoal() {
      if (this.currentGoal != "") {
        this.goals.push(this.currentGoal);
        this.currentGoal = "";
      }
    },
    removeLastGoal() {
      this.goals.pop();
    },
    removeAtIndex(index) {
      this.goals.splice(index, 1);
    },
  },
});

app.mount("#user-goals");
