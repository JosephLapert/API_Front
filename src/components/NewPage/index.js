import axios from 'axios';
import "./index.css"
import { useState } from 'react';

const NewPage = () => {

   const [data, setData] = useState();
   
   const getUser = async () => {
       try {
           const response = await axios.get('https://reqres.in/api/users?page=2');
        //    console.log(response);
           if (response.data.data) {
               setData(response.data.data)
           }
        } catch (error) {
          console.error(error);
        }
    }

    console.log(data);




    // const jaime = () => {
    //     console.log("j'aime");
    //     getUser();
    // }

    const aimepas = () =>{
        console.log("je n'aime pas");
    }

    const textes =  [
            
            {text : "loremipjkldjfioj"},
           
            {text : "loremipsouidooihfsioqhfihdsofhoiqsdhg"},

            {text : "jfioshfgoiuuehgusd hguezhrugihe ugerihgcoeru xguir gcui raeuitchaur hgriuethu"},

    ];

    return (  

        <div className="encadrer-un-contenu">
            <div className="flex-container">
                
                <h1> Titre des textes </h1>

            
            
            {textes.map((paragraphe, index) => 
                (<p> {paragraphe.text}</p>)
                
            
            )}
        

            
              
                <button className ="buttonOui" onClick={getUser}>j'aime</button>
                <button className ="buttonNon" onClick={aimepas}>je n'aime pas</button>
                
            </div>
    {
        data? (data.map((user) => (
            /* <p>{user.id + user.email + user.first_name + user.last_name} </p> */
            <div> 
            <p>{user.email}</p>
            <p>{`${user.first_name} ${user.last_name}`}</p>
            <p>{<img src={user.avatar}/>}</p> 
            </div>
            )
            )) : (<div>ca ne marche pas</div>)

        /* data? (data.data.data.map((user) => (<img src={user.avatar}/>))) : (<div>ca ne marche pas</div>)  */
        

     }
        
        </div>
    );


    
};
 
export default NewPage;