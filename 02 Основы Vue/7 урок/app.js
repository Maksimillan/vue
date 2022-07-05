const App = {
    data() {
        return {
            title: "Список заметок",
            placeholderString: "Введите название заметки",
            inputValue: '',
            notes: ['Заметка один', 'Заметка два']
        }
    },
    methods: {
        inputChangeHandler(event) {
            this.inputValue = event.target.value
        },
        addNote() {
            if (this.inputValue !== '') {
                this.notes.push(this.inputValue)
                this.inputValue = ""
            }
        },
        toUpperCase(item) {
            return item.toUpperCase()
        },
        deleateNote(i, event) {
            this.notes.splice(i, 1)

        },
        doubleCount() {

            return this.notes.length * 2
        }

    },
    computed: {
        doubleCountComputed() {
            return this.notes.length * 2
        }
    },
    watch: {
        inputValue(value) {
             console.log('input  Value Change',value);
        }
    }
}


Vue.createApp(App).mount('#app')