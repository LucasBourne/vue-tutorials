const app = Vue.createApp({
    data() {
        return {
            title: 'My Course Goal',
            description: '<h2>Finish the course and be confident with Vue</h2>',
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: {
        getRandomNumber(isRounded) {
            let randomNumber = Math.random() * 1000;
            if (isRounded) {
                randomNumber = Math.round(randomNumber);
            }

            return randomNumber;
        },
        getCourseGoal() {
            return this.description
        }
    }
});

app.mount('#user-goal');