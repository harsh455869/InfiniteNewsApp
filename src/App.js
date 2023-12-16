import './App.css'
import Nav from './Nav.js'
import News from './News'
import SignIn from './SignIn'
import Wether from './Wether'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom"


function App() {
  const changep=(e)=>{
            let l=document.getElementById("pass")
            if(e.value!==l.value){
               

               
            }
  }
 

  return (
   
    <>
  //   <Router>
  // <Switch>
         
      

          <Route exact path="/sports">
          <Nav/>
          <News category="sports" pagesize={5} load={true} key="sports"/>
          </Route>
          <Route exact path="/">
          <Nav/>
          <News category="general" pagesize={5}  load={true} key="general"/>
          </Route>
          <Route exact  path="/health">
          <Nav/>
          <News  category="health" pagesize={5}  load={true} key="health"/>
          </Route>
          <Route exact  path="/technology">
          <Nav/>
          <News category="technology" pagesize={5}  load={true} key="technology"/>
          </Route>
          <Route exact  path="/business">
          <Nav/>
          <News category="business" pagesize={5}  load={true} key="business"/>
          </Route>
          <Route exact  path="/science">
          <Nav/>
          <News category="science" pagesize={5}  load={true} key="science"/>
          </Route>
          <Route exact  path="/general">
          <Nav/>
          <News category="general" pagesize={5}  load={true} key="general"/>
          </Route>
          <Route path="/entertainment">
          <Nav/>
          <News category="entertainment" pagesize={5}  load={true} key="entertainment"/>
          </Route>
          
          <Route path="/">
          <Nav/>
           <SignIn/>

          </Route>
          
          <Route path="/Login">
            <Nav/>
           

          </Route>
          
        
        </Switch>
 
  
  </Router>
 
   
           
            
            </>
  );

  }
export default App;