class TodoList{

    constructor(){
        this.todos = [];
    }

    addTodo(){
        this.todos.push("Novo Todo");
        console.log(this.todos);
    }

}

let meusTodos = new TodoList();

document.getElementById("add").onclick = ()=>{
    meusTodos.addTodo();
}


let arr = [1,2,3,4,5];


let x = arr.reduce((next, current)=>{
        return next+=current;
    }
);

console.log("Iran");

console.log(x);