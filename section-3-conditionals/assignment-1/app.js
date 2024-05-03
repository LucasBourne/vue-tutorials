Vue.createApp({
  data() {
    return {
      tasks: [],
      currentTask: "",
      isTaskListVisible: true,
    };
  },
  methods: {
    toggleListVisibility() {
      this.isTaskListVisible = !this.isTaskListVisible;
    },
    addTask() {
      if (this.currentTask != "") {
        this.tasks.push(this.currentTask);
        this.currentTask = "";
      }
    },
  },
}).mount("#assignment");
