/*var minhaPromise = ()=>{
    return new Promise((resolve, reject)=>{
        var request = new XMLHttpRequest();
        request.open("GET","https://api.github.com/users/hierope508");
        request.send(null);

        request.onreadystatechange = ()=>{
            if(request.readyState ===4){
                if(request.status === 200){
                    resolve(JSON.parse(request.responseText));
                }else{
                    reject("Deu ruim");
                }
            }
        }

    });
}
minhaPromise()
    .then((response)=>{
        console.log(response);
    }).catch((error)=>{
        console.warn(error);
    })
*/


axios.get("https://api.github.com/users/hierope508")
    .then((response)=>{
        console.log(response);
    }).catch((error)=>{
        console.warn(error);
    })