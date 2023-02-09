import React from 'react'
import '../App.css'
import List from './List'

export default function Sidebar(){
    return(
        <div className="sidebar">
        <div className="workspace-name">Ivan's Hurdler</div>
        <div className="workspace-menu">
          
          <List />
        </div>
      </div>
    )
}