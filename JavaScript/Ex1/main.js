function checaIdade (idade){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
        if(idade>=18)
            resolve();
        else
            reject();            
        }, 2000);

    });    
} 

checaIdade(15).then(()=>{
    console.log("Maior de idade");
    }
).catch(()=>{
    console.log("Menor de idade")
    }
);