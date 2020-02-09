//Declarando variáveis de controle do HTML
let btnTamanhoVet = document.getElementById("btnTamanhoVet");
let btnValoresVet = document.getElementById("btnValoresVet");

//Declarando variáveis
let tamanho;
let vet = [];
let min = 0, max = 0;


//Definindo função onClick()
btnTamanhoVet.onclick = ()=>{
    let inputTamanho = document.getElementById("tamanhoVet");
    
    if(inputTamanho.value!= null){
        tamanho = inputTamanho.value;
        
        var valores = document.getElementsByClassName("valores");
        for (let index = 0; index < valores.length; index++) {
            valores[index].style.display =""; 
        }
    }

}

//Definindo função onClick()
btnValoresVet.onclick = ()=>{
    let valoresVet = document.getElementById("valoresVet").value;
    
    if(valoresVet!=null && valoresVet!= ""){
        vet = valoresVet.split(" ");
        
        if(vet.length != tamanho)
        {
            alert(`Você precisa digitar exatamente ${tamanho} numeros separados por espaço`);
            return;            
        }

        //Ordena vetor e busca max e min
        vet.sort((a, b) => a - b);
        minMax();
        
        //Atualiza valores na tela
        updateHTMLValues();

        //Volta valores para 0;
        min = 0, max =0;
    }

}

function minMax(){
    for (let index = 0; index < vet.length; index++) {
    
        if(index<=vet.length-2)
            min+=(Number)(vet[index]);
    
        if(index!=0)
            max+=(Number)(vet[index]);
    }
}

function updateHTMLValues(){
    
    let htmlMax = document.createElement("h4");
    let htmlMin = document.createElement("h4");
    let htmlvet = document.createElement("h4");
    htmlMax.appendChild(document.createTextNode(`Max: ${max}`));
    htmlMin.appendChild(document.createTextNode(`Min: ${min}`));
    htmlvet.appendChild(document.createTextNode(`Vet: ${vet.toString()}`));
    
    htmlMax.setAttribute("id","max");
    htmlMin.setAttribute("id","min");
    htmlvet.setAttribute("id", "vet");

    document.querySelector("#prova").appendChild(htmlMax);
    document.querySelector("#prova").appendChild(htmlMin);
    document.querySelector("#prova").appendChild(htmlvet);

    document.getElementById("valoresVet").value = null;

}