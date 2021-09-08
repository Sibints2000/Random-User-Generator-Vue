const app = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            lastName: 'doe',
            email: 'Johndoe@gamil.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    },
})


app.mount('#app')
