import React, {useEffect, createContext, useContext} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Feed from './components/Feed';

import {HashRouter, BrowserRouter, Route, Redirect, Switch, useHistory} from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css'

export const userContext = createContext()

const Routing=()=>{
  return(
    <div>
     
          <Switch>
              <Route exact path = '/' component = {()=><Feed/>}/>
              <Route>
            
              </Route>
          </Switch>
    </div>
  )}

function App() {
  return (
    <userContext.Provider>
        <BrowserRouter>
        <Navbar/><br></br><br></br><br></br><br></br>
        <Routing/>
        </BrowserRouter>
     </userContext.Provider>
    
  );
}

export default App;
