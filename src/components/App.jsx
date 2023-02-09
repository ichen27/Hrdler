import React, {useEffect, useState} from 'react'
import '../App.css'
import Navbar from './Navbar.jsx'
import Sidebar from './Sidebar.jsx'
import Mainpage from './Mainpage'


export default function App(){
  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  },[])

  return(
    <div className='app'>
    <Navbar />
    <div className="body">
    <Sidebar />
     <Mainpage />
     <div>
     {(typeof backendData.users === 'undefined') ? (
     <p>Loading...</p> 
     ): (
      backendData.users.map((user, i) => (
        <p key={i}>{user}</p>
      ))
     )}
     </div>
    </div>
  </div>
  )
}