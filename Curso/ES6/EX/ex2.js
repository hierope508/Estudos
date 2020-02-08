const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];

   
let idades = usuarios.map((user)=>user.idade);

console.log(idades);

let rocketseat = usuarios.filter((user)=>user.idade>=18 && user.empresa==="Rocketseat");

console.log(rocketseat);

let google = usuarios.find((user)=> user.empresa==="google");

console.log(google);


let usuarios2  = usuarios.map((user)=>{
    user.idade *=2;
    return user;
}).filter((user)=>{
    return user.idade <=50;
});

console.log(usuarios2);