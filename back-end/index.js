// API - importing express, crypto, cors
const express = require ('express');
const crypto = require('crypto');
const cors = require('cors');

// initialize webserver with express
const app = express();

// tell express use middleware to work with json
app.use(express.json());

// using middleware to solve cors problem
app.use(cors())

const tarefas = [
    {
        id: crypto.randomUUID(),
        text: 'Ir ao mercado',
        prazo: '2 dias'
    },

    {
        id: crypto.randomUUID(),
        text: 'Estudar Git',
        prazo: '3 dias'
    },

    {
        id: crypto.randomUUID(),
        text: 'Estudar Javascript',
        prazo: '10 dias'
    },

    {
        id: crypto.randomUUID(),
        text: 'Estudar Desenvolvimento de Jogos',
        prazo: '3 dias'
    }

]

// REST - POST/GET/PUT/DELETE but also PATCH/OPTIONS...
// CRUD - CREATE/READ/UPDATE/DELETE

app.get('/', (req, res) =>{
    res.send('Olá Galera!')
})

app.get('/tarefas', (req, res) =>{
    res.send(tarefas)
})

app.get('/tarefas/:id', (req, res) =>{

    const idParam = req.params.id;
    const tarefa = tarefas.find( (tarefa) => tarefa.id == idParam );
    res.send(tarefa);

})


//define a port to run webserver
const port = 3000

//initialize webserver on defined port
app.listen(port, ()=> {
    console.log('o app está rodando na porta 3000')
})