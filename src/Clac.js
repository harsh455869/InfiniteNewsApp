import './Clac.css'
import React from 'react'
import { isElementOfType } from 'react-dom/test-utils'
import { NavLink } from 'react-router-dom'

export default function Clac() {
  
    let b = document.querySelectorAll("button")
    let nm = document.querySelector(".result")
let lll;

    b.forEach((e) => {
        e.onclick = () => {
          

            nm.value += e.innerHTML;
            lll+=e.value


        }

    })

    
    















    const clear = () => {

        nm.value = ""
        lll=""

    }


    const olpa=()=>{
        // nm.value=eval(nk)
    console.log(lll)
     
  
    
        
    }



   
    return (
        <div className="con">
            <input className="inu" type="text" className="result"></input className="inu">
            <button  className="pak btn" value="8">8</button>
            <button  className="pak btn" value="9">9</button>

            <button  className="btn lob" value="=">!</button>
            <button  className=" btn pak" value="7">7</button>
            <button className="btn" onClick={clear}>C</button>


            <button className="btn pak"  value="4">4</button>
            <button className="btn pak"  value="5">5</button>
            <button className="btn pak"  value="6">6</button>
            <button className="btn pak"  value="-">-</button>
            <button className="btn pak"  value="/">/</button>

            <button className="btn pak"  value="1">1</button>
            <button className="btn pak"  value="2">2</button>
            <button className="btn pak"  value="3">3</button>


            <button className="btn pak"  value="*">*</button>
            <button className="btn pak"  value="+">+</button>

            <button className="btn lob">tan()</button>
            <button className="btn pak"   value="0">0</button>

            <button className="btn lob" value="Math.sin">sin</button>

            <button className="btn" onClick={olpa}>=</button>
            <button className="btn pak"  value="(">(</button>
            <button className="btn pak"  value=")">)</button>

            <button className="btn lob" value="Math.cos">cos</button>

        </div>
    )
}
