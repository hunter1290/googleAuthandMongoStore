import React from 'react'
import './App.css'
import { useEffect} from 'react'
// import LoginButton from './auth/Login'
// import LogoutButton from './auth/Logout'
import {gapi} from "gapi-script"
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Logging from './auth/Logging'
import Home from "./components/Home"
import PrivateComponent from './components/PrivateComponent'
const clientId = process.env.GOOGLE_CLIENT_ID;

function App() {

  useEffect(()=>{
    function start(){
      gapi.client.init({
        clientId:clientId,
        scope:""
      })
    };
    gapi.load('client:auth2',start)
  })

  return (
    < Router>
        <div>
                  <Routes>
                     {/* <Route element={PrivateComponent}> */}
                     <Route path="/Home" element={<Home/>}/>
                     {/* </Route> */}
                     <Route path="/logging" element={<Logging/>}/>
                  </Routes> 
        </div>
     </ Router>
  )
}

export default App