let toDos = [];
getList();

firstLoad();

function populateTODO(value){
    
    let ul = document.querySelector("#app ul");
    let todo = document.createElement("li");
    let text = document.createTextNode(value);
    let textExcluir = document.createTextNode("Excluir");

    let linkElement = document.createElement("a");
    linkElement.setAttribute("href", "#");
    linkElement.appendChild(textExcluir);
    linkElement.setAttribute("onClick", 'deleteTodo(' + toDos.indexOf(value) + ')');
    todo.appendChild(text);
    todo.appendChild(linkElement);
    ul.appendChild(todo);


}

function firstLoad(){
    
    let ul = document.querySelector("#app ul");
    ul.innerHTML = '';

    toDos.forEach((s)=>{
        populateTODO(s);
    });
}

function deleteTodo(position){
    toDos.splice(position, 1);
    firstLoad();
    saveToFile();
};

var inputElement = document.querySelector("input[name=toDo]");
var btnElement =document.querySelector("button.botao");

btnElement.onclick = ()=>{
    populateTODO(inputElement.value);
    toDos.push(inputElement.value);
    saveToFile();
    inputElement.value = "";    
};


function saveToFile(){
    localStorage.setItem("listTodos",JSON.stringify(toDos));
}

function getList(){
    let fromFile = JSON.parse(localStorage.getItem("listTodos"));
    if(!fromFile){
        toDos = [
            "Fazer Cafe", 
            "Estudar",
            "Acessar o Orkut"
        ];
    }else{
        toDos = fromFile;
    }
        
}


