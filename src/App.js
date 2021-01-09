import React  from 'react';
import './App.css';

import Chat from './Chat/Chat'
import Sidebar from './Sidebar/Sidebar';
import Login from './Login/Login'

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import { useStateValue } from './StateProvider';

const App=()=> {
  const [{ user} , dispatch] = useStateValue();

  const isAuthdata= localStorage.getItem("Authdata");
 
    return (
      <div className= "App">
          
        { !user && !isAuthdata ?  (
         <Login />
        ) : (
          <div className="App_Body">
           
              <Router> 
              
              <Sidebar  />
                <Switch>   
                <Route path="/rooms/:roomId">  
                    <Chat />
                  </Route>
                <Route path="/">
                    {/* <Chat />  */}
                  </Route>
                </Switch>
              </Router>
            
        </div>
        )}


      </div>
    );
  
}

export default App;
