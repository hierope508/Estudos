var input = document.querySelector("input[id=login]");
var botao = document.getElementById("procurar");
let ul = document.querySelector("ul");

input.addEventListener('keypress', ((e)=>{
    if(e.code == "Enter"){
        processRequest();
    }
}));


function processRequest(){
    ul.innerHTML = "";
    let li = document.createElement("li");
    let text = document.createTextNode("Carregando...");
    li.appendChild(text)
    ul.appendChild(li);
    var login = input.value;
    var http = "https://api.github.com/users/" + login + "/repos";
    getRequest(http);
}

botao.onclick = ()=>{
    processRequest();
}


function getRequest(url){
    axios.get(url).then((response)=>{
        console.log(response);
        let repositorios = response.data;
        ul.innerHTML = "";
        let content = document.getElementById("app");
        repositorios.forEach(rep => {
            let li = document.createElement("li");
            let text = document.createTextNode(rep.name);
            li.appendChild(text);
            ul.appendChild(li);
        });

        content.appendChild(ul);
    }).catch((response)=>{
        ul.innerHTML = "";
        alert('Ocorreu um erro: Usuário não existe \n' +  response.message);
        console.log(response);
    });
}
