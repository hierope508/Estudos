import api from './api';

class App{
    constructor(){
        this.repositories = [];
        this.formEl = document.getElementById("rep-form");
        this.listEl = document.getElementById("repo-list");
        this.input = document.getElementById("inputRep");
        this.registerHandlers();
    }

    registerHandlers(){
        this.formEl.onsubmit = event=> this.addRepository(event);
    }

    setLoader(value = true){
        
        if(value){
            let load = document.createElement("div");
            load.setAttribute("class", "loader");
            load.setAttribute("id", "loader");
            this.formEl.appendChild(load);
        }
        else{
            document.getElementById("loader").remove();
        }
    }

    async addRepository(event){
        event.preventDefault();

        console.log(this.input);
        const repotInput = this.input.value;

        if(!repotInput)
            return;

        try{
            this.setLoader();
            const response = await api.get(`/repos/${repotInput}`)

            console.log(response);
    
            const {name, description, html_url, owner: {avatar_url}} = response.data;
    
            this.repositories.push({
                name: name,
                description: description,
                avatar_url: avatar_url,
                html_url: html_url
            });
    
            this.render();
    
            this.input.value = "";
        }catch{
            alert("O repositório não existe");
        }

        this.setLoader(false);
    }

    render(){
        this.listEl.innerHTML = "";
        this.repositories.forEach(r=>{
            let li = document.createElement("li");
            
            let img = document.createElement("img");
            img.setAttribute("src",r.avatar_url);
            
            let title = document.createElement("strong");
            title.appendChild(document.createTextNode(r.name));
            
            let description = document.createElement("p");
            description.appendChild(document.createTextNode(r.description));

            let url = document.createElement("a");
            url.setAttribute("target", "_blank");
            url.setAttribute("href",r.html_url);
            url.appendChild(document.createTextNode("Acessar"));

            li.appendChild(img);
            li.appendChild(title);
            li.appendChild(description);
            li.appendChild(url);
            // li.appendChild(img);

            this.listEl.appendChild(li);
        });
    }
}


new App();