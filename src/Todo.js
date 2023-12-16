import { findByText } from '@testing-library/react';
import React from 'react'
import './Todo.css'
import Nav from './Nav'
export default function Todo(props) {
    let nu;
    let jkl;
    let font;
    let mn = 0;
    var arr=localStorage.length;
    let word;
    let yrr=[];

    const bt = () => {
       console.log(yrr)
        arr=localStorage.length;
        let f = document.querySelector(".olp")


        let h = (document.querySelector("textarea").value)
        h.toString()
        h = h.toLowerCase()
        if (h.length < 10) {
            alert("Please enter minimum 10 elements")

        }
        else {
            let bn=0;
                        let ln=0;
                        for (let j = 1; j <= localStorage.length; j++) {
                            let hn = localStorage.getItem(j);
            
            
                            if (h == hn) {
                                bn += 1;
            
                            }
                            else {
                                ln += 1;
            
                            }
                        }
            if(ln==localStorage.length){
                
                arr+=1;
                localStorage.setItem(arr,h);
                alert("sccusessfuly saved")
               
            }
            else{
               
                alert("alredy exist")
               

            }
            
        }

    }
    const btn = () => {
        let f = document.querySelector("textarea")
        nu = f.value;
        f.value = "";

    }
    const Upp = () => {
        let f = document.querySelector("textarea").value;
        let k = f.toUpperCase()
        document.querySelector("textarea").value = k;
    }
    const Low = () => {
        let f = document.querySelector("textarea").value;
        let k = f.toLowerCase();
        document.querySelector("textarea").value = k;
    }

    const kolp = () => {
        let f = document.querySelector("textarea").value;
        let io=f.toUpperCase()
       
        let y=io.split(" ")
      for(let i=0;i<y.length;i++){
          let n=y[i].split("")
        for(let u=1;u<n.length;u++){
            let so=n[u].toLowerCase();
            n[u]=so;

            
        }
          let hn=n.join("") 
          y[i]=hn
      }
          
         
          

      
      let bnj=y.join(" ");
      document.querySelector("textarea").value=bnj
    

       

        



    }
    const pre = () => {
        let f = document.querySelector("textarea");
        f.value = nu;
    }
    const jas = () => {



       
            let f = document.querySelector("textarea");
            let yn=f.value;

            let y = 0;
            let b = document.querySelector(".rotate")
            b.innerHTML = yn.length;
            font = yn.length;
            let k = yn.split(" ");



            let bo = document.querySelector(".pol")
            bo.innerHTML = k.length;
            word = k.length;
            mn += 1;
          

       

    

    }
    const ita = () => {

        let f = document.querySelector("textarea");
        f.style.fontStyle = "italic";
      

    }
    const Show = () => {
        for(let i=1;i<=localStorage.length;i++){
            
            let gb = localStorage.getItem(i);
            if(gb==undefined){

            }
            else{
                yrr.push(i);

            }
            let g = document.createElement('div');
            g.className = "kpl";
            document.querySelector(".olp").append(g);
            g.innerHTML = gb;
            let gh = document.createElement("div")
            gh.className = "patel"
            let ghn = gb.length;
            let nms = gb.split(" ")
            let hjs = nms.length;
            gh.innerHTML = "Chars:" + ghn + " " + "Words:" + hjs;
            g.append(gh)
            let edi = document.createElement("button")
            edi.className = "btn"
            edi.innerHTML = "Edit"
            edi.onclick = () => {

                let gb = localStorage.getItem(i);
                let bnm = document.createElement("textarea")

                bnm.value = gb;
                bnm.className = "inp"
                g.append(bnm);
                let vji = document.createElement('button')
                vji.className = "btn"
                vji.innerHTML = "submit"
                g.append(vji)
                
               
                vji.onclick = () => {
                    localStorage.removeItem(i)
                    let df = (bnm.value).length;
                    if (df <= 10) {
                        alert("please enter minimum 10 letters")
                    }
                    else {
                        let h=bnm.value;
                        let bn=0;
                        let ln=0;
                        for (let j = 1; j <= localStorage.length; j++) {
                            let hn = localStorage.getItem(j);
            
            
                            if (h == hn) {
                                bn += 1;
            
                            }
                            else {
                                ln += 1;
            
                            }
                        }
                        if (ln == localStorage.length) {
                          localStorage.setItem(i,bnm.value);
                          g.removeChild(bnm)
                          g.removeChild(vji)
                         Show()
                        }
                        else {
                            alert("this is already exist")
                        }
            
            
            
            
                    
            
                       
                       



                    }

                }
            }

            




        

    
    g.append(edi)


    let r = document.createElement("button")

    r.className = "btn";
    r.innerHTML = "Text";
    r.onclick = () => {
        let p = document.querySelector("textarea");
        p.value = gb;
    }
    g.append(r);

    let rem = document.createElement("button");
    rem.className = "btn";
    rem.innerHTML = "Delete";
    rem.onclick = () => {
        localStorage.removeItem(i)
        let hn=localStorage.getItem(i)
        document.querySelector(".olp").removeChild(g)
        yrr[i-1]=undefined;
    

    }
    g.append(rem);


        }
}


    


const clear = () => {
    let b = document.querySelector(".olp")
    b.innerHTML = ""
}
const color=()=>{
    let p = document.querySelector("textarea");
    let bnm=document.querySelector(".mkl")
    p.style.color=bnm.value;

}
const number=()=>{
    let p = document.querySelector("textarea");
    let bnm=document.querySelector(".num")
    p.style.fontSize=bnm.value+"px";
}
const polt=()=>{
    let p = document.querySelector("textarea");
    p.select()
    navigator.clipboard.writeText(p.value)
}
const polty=()=>{
    let p = document.querySelector("textarea");
    p.select()
    navigator.clipboard.writeText(p.value)
    p.value=""
}
const select=()=>{
    let p = document.querySelector("textarea");
    p.select()
}
return (

    <div className="todo">
       

        <h1>Todos List</h1>

        <textarea lang="guj" name="" id="" minLength="10" autoCapitalize="words" placeholder="Type your note here..." onChange={jas}>

        </textarea><br />
        <div className="harsh">
            <ul>

                <li>Chars:<div className="rotate"></div></li>

                <li>words:<div className="pol"></div></li>
              
                

            </ul>
        </div>
        <button className="btn" onClick={bt}>Submit</button>
        <button className="btn" type="reset" onClick={btn}>Reset</button>
        <button className="btn" onClick={kolp}>Copitalize</button>

        <button className="btn" onClick={Upp}>Uppercash</button>
        <button className="btn" onClick={Low}>Loweercash</button>

        <button className="btn" onClick={pre}>previous</button>
        <button className="btn" onClick={ita}>italic</button>
        <button className="btn" onClick={Show}>Show</button>
        <button className="btn" onClick={clear}>Clear</button>
        <button className="btn" onClick={polt}>Copy</button>
        <button className="btn" onClick={polty}>Move</button>
        <button className="btn" onClick={select} >Select</button>
        Color:<input className="inu" type="color" name="vla" id=""  onChange={color}/>
Size:<input className="inu" type="number" name="" id="hgk"  onChange={number}/>
        <h1>Lists</h1>
        <div className="olp"></div>
    </div>
)
}