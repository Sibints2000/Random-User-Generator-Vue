const app = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            lastName: 'doe',
            email: 'Johndoe@gamil.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg'
        }
    },
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json()

            this.firstName = result[0].name.first,
            this.lastName = result[0].name.last,
            this.email = result[0].email,
            this.gender = result[0].gender,
            this.picture = result[0].picture.large
        }
    }
})


app.mount('#app')