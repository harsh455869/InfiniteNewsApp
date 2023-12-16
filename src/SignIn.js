import React from 'react'
import './SingIn.css'
export default function SignIn() {
    // const changep=(e)=>{
    //         let l=document.getElementById("pass")
    //         if(e.value!==l.value){
               

               
    //         }
    // }
   
    return (
        
        <div class="hju">
          <center><h1>SignIn</h1></center> 
          
           <div class="container">
            <span>FullName</span>
           <input type='text' class="inu"/>
        </div>
        <div class="container">
           <span>College-Name</span>
           <input type="text" name="" id=""class="inu"/></div>
        
        <div class="container">
            <span>Email</span>
            <input type="email" name="" id=""class="inu"/></div>
         
         <div class="container">
            
            <span>Password</span>
            <input type="password" name="" id=""class="inu"/></div>
        
        <div class="container">
            <button type="submit"  id="butto">Submit</button>
        </div></div>
    )
}
