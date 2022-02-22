const resulta = document.getElementById('resultado');
const input = document.querySelector('.txt-input');
const botao = document.querySelector('.botao')

function criaLista() {
    const li = document.createElement('li');
    return li
}

function criaTarefa(texto) {
    const list = criaLista();
    list.innerHTML = texto;
    resulta.appendChild(list);
    salvartarefas();
}

function Clique() {
    if (!input.value) {
        return;
    }
    criaTarefa('<br />' + ' 📃 ' + '<strong>' + input.value + '</strong> ');
    input.value = '';
}

input.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
        Clique();
    }
});

function apagar() {
    const desejaApagar = confirm('voce realmente deseja apagar suas tarefas ? ');
    if (desejaApagar === false) {
        return;
    }
    localStorage.removeItem('task');
}


function salvartarefas() {
    const listTask = resulta.querySelectorAll('li');
    const listOfTask = [];

    for (let tarefa of listTask) {
        let textTask = tarefa.innerText;
        textTask = textTask.replace('Apagar', ' ').trim();
        listOfTask.push(textTask);
    }

    const taskJSON = JSON.stringify(listOfTask);
    localStorage.setItem('task', taskJSON);
}

function addTasksave() {
    const task = localStorage.getItem('task');
    const listOfTask = JSON.parse(task) || [];
    if (listOfTask.length === 0) {
        return;
    }
    console.log(listOfTask)
    for (let tarefa of listOfTask) {
        criaTarefa(tarefa);
    }
}

addTasksave();