const app = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            lastNmae: 'doe',
            email: 'Johndoe@gamil.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/potraits/men/10.jpg',
        }
    },
})


app.mount('#app')
