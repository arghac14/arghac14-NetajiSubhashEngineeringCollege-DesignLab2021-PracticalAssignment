import React, {useContext, useEffect} from 'react';
import $ from 'jquery';
import {userContext} from '../App';
import {NavLink, Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import M from 'materialize-css';
import 'font-awesome/css/font-awesome.min.css'

const Navbar = ()=> {

    useEffect(() => {
      // Init Materialize JS
      M.AutoInit();
    });
    const renderList=()=>{
      
        return [
        
          <li><Link to="/" style={{backgroundColor:"#FFFFFF", color: "#6C6D6E", fontSize: "17px"}}>&nbsp; PRODUCTS</Link></li>,
          <li><Link to="/" style={{backgroundColor:"#FFFFFF", color: "#6C6D6E", fontSize: "17px"}}>&nbsp; RESOURCES</Link></li>,
          <li><Link to="/" style={{backgroundColor:"#FFFFFF", color: "#6C6D6E", fontSize: "17px"}}>&nbsp; SOLUTIONS</Link></li>,
          <li><Link to="/" style={{backgroundColor:"#FFFFFF", color: "#6C6D6E", fontSize: "17px"}}>&nbsp; COMPANY</Link></li>,
          <li>
            
          </li>
        ]
      // }
    }
    
    return (
        <div>
            <header class="header" style={{backgroundColor: "#FFFFFF"}}>
  <span className="logo"><img style={{paddingLeft: "5%", width:"125px",height:"75px"}}
        src = "https://d33wubrfki0l68.cloudfront.net/0d2bacfef0719f14d4d62049694046f1dee2b679/31b0a/assets/img/locus-blk.svg"/></span>

  <ul class="menu" style={{paddingLeft:"20%", backgroundColor: "#FFFFFF"}}>
   {renderList()}
         
  </ul>
      
  
</header>
    
        </div>
    )
    
}
export default Navbar
