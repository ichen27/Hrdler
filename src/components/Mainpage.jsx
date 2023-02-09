import Navbar from './Navbar.jsx'
import Sidebar from './Sidebar.jsx'
import Calender from './Calender'
import '../App.css'
export default function Mainpage(){
    return(
        <div className="main-content">
        <div className="page-header">
          <div className="page-title">Page Title</div>
          <div className="page-options">
            <i className="fa fa-ellipsis-h"></i>
          </div>
        </div>
        <div className="page-content">
          <div className='writtensection'>
          <p>This is the page content.</p>
          </div>
    
          </div>
            <Calender />
   
        
      </div>
    )
}