const app = Vue.createApp({
    data() {
        return {
            name: 'Lucas Bourne',
            age: 25,
            imageUrl: 'https://buffer.com/library/content/images/2023/10/free-images.jpg'
        }
    },
    methods: {
        getRandomNumber() {
            return Math.random();
        },
        getAgeInXYears(yearsInTheFuture) {
            if (yearsInTheFuture === undefined) {
                return this.age;
            }
            return this.age + yearsInTheFuture;
        }
    }
});

app.mount('#assignment');