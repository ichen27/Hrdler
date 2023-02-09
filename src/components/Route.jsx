import React from 'react'
import '../App.css'
import '../index.css'
import App from './App.jsx'
import Landing from './Landing.jsx'
import Login from './Login.jsx'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export default function Routepage(){
    return(
      <div className="content">
        <Router>
            <Routes>
              <Route path="/" element={<Landing />}></Route>
              <Route exact path="/myHurdler" element={<App />}></Route>
              <Route exact path="/login" element={<Login />}></Route>
            </Routes>
        </Router>
  
          </div>
  
          )
  
  }