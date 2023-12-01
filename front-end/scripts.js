const listaTarefasHtml = document.getElementById('tarefas');
console.log(listaTarefasHtml);

// Async function (promisse)
const Api = fetch('http://localhost:3000/tarefas')

// request sent with promise of return
console.log(Api); 

Api.then( (response) => {

    // your request arrived there. Status 200 - Ok
    console.log(response)   
    return response.json()
    
} ).then((tarefas)=>{

    // Here is your response
    console.log(tarefas);
    tarefas.map((tarefa)=> {
    listaTarefasHtml.insertAdjacentHTML('beforeend', `<li> 
    <p>Tarefa: ${tarefa.text} </p>  
    <p>Prazo: ${tarefa.prazo} </p> </li>`) 
    })
})
//Api.then( (response) => response.json() ).then( (tarefas) => console.log(tarefas) )
