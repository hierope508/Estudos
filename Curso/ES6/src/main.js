// const  response = ()  => new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         resolve("OK");
//     }, 2000);
// });


// async function getResponse(){
//     console.log(await response());
//     console.log(await response());
//     console.log(await response());
//     console.log(await response());

// }


// getResponse();


import axios from 'axios';

class API{
    static async getUserInf(username){
        
        try{
            let response = await axios.get(`https://api.github.com/users/${username}`);

            console.log(response);    
        }catch(err){
            console.warn("Error " + err);
        }

    }
}


API.getUserInf("hierope508aaa");