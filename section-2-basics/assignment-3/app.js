let _isWaiting = false;
const app = Vue.createApp({
  data() {
    return {
      amount: 0,
      message: "",
    };
  },
  methods: {
    incrementAmount(amount) {
      const newAmount = this.amount + amount;
      this.amount = newAmount;
    },
  },
  watch: {
    amount(value) {
      if (value < 35) {
        this.message = "Not there yet!";
      } else {
        this.message = "Too much!";
      }
      const that = this;
      if (_isWaiting == false) {
        _isWaiting = true;
        setTimeout(function () {
          that.amount = 0;
          _isWaiting = false;
        }, 5000);
      }
    },
  },
});

app.mount("#assignment");
