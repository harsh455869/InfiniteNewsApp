
import './Nav.css'
import news from './news.jpg'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Nav extends Component {
  
  
    render() {
        
       
        return (
            <div className="jk">
            <div id="img">
                <img src={news} alt="news"/>
            </div>
            <div id="title">
                News-Times
            </div>
            <div id="category">
                <ul>
                        <li><Link to="/" >General-News</Link></li>
                <li><Link to="/business" key="Business">Business</Link></li>
                <li><Link to="sports" key="Sport">Sport</Link></li>
                <li><Link to="technology" key="Technology">Technology</Link></li>
                <li><Link to="science" key="Science">Science</Link></li>
                <li><Link to="health" key="Health">Health</Link></li>
               
                <li><Link to="entertainment" key="Entertainment">Entertainment</Link></li>
                <Link to="/Login" key="Login">SignIn</Link>
                </ul>
                
              
            </div>
         
           
        </div>
         
        )
    }
}

