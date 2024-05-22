const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "01234567890",
          email: "manuel@gmail.com",
        },
        {
          id: "lucas",
          name: "Lucas Bourne",
          phone: "01234678901",
          email: "lucas@gmail.com",
        },
      ],
    };
  },
});

app.component("friend-contact", {
  template: `
    <li>
      <h2>{{ friend.name }}</h2>
      <button @click="toggleDetail()">Show Details</button>
      <ul v-if="isDetailVisible">
        <li><strong>Phone:</strong> {{ friend.phone }}</li>
        <li><strong>Email:</strong> {{ friend.email }}</li>
      </ul>
    </li>
  `,
  data() {
    return {
      isDetailVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "01234567890",
        email: "manuel@gmail.com",
      },
    };
  },
  methods: {
    toggleDetail() {
      this.isDetailVisible = !this.isDetailVisible;
    },
  },
});

app.mount("#app");
