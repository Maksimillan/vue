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
         
     }
 } 
}


 Vue.createApp(App).mount('#app')