Vue.createApp({

    data() {
        return {
            title: 'Я есть Груд',
            myhtml: '<h1> Vue 3 app<h1/>',
            person: {
                firstName:'Muzaffar',
                lastName:'Ismatillayev',
                age:22,
            },
            items:[1,2,3,4,5,6,7,8,9],
        }
    }
}).mount('#app')