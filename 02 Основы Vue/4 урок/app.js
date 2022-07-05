const App={
 data() {
     return{
         title:"Список заметок",
         placeholderString:"Введите название заметки",
         inputValue:'',
        notes:['Заметка один','Заметка два']
     }
 },
 methods:{
     inputChangeHandler(event){
      this.inputValue=event.target.value   
     },
     addNote(){
         this.notes.push(this.inputValue)
         this.inputValue=""
     },
    
 } 
}


 Vue.createApp(App).mount('#app')