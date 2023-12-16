

import Nav from './Nav'

export default function About() {

    const about=()=>{
        let y=document.querySelectorAll("tr")
       
         if(y.innerHTML=="About the content of todos"){
            let u=document.createElement("div")
            u.innerHTML=""
 
            u.className="mkl"
            u.innerHTML="In the content of todo we write our notes of any with the help of any additional features."
            y.append(u)
        }
else{

         
          y.innerHTML="About the content of todos"

         
}
       

           
    }
    return (
      

        
        <div>
         
       
            <div>
            <h1>About</h1>
            <table>
                
                <tr onClick={about} className="klo">
                   
                    About the content of todos
                    
                  </tr>
                 <tr onClick={about} className="klo"></tr>
                <tr onClick={about} className="klo"></tr>
            </table>

            </div>

        </div>
    )
}