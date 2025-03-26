import './css/index.css'
import { useState } from 'react'
import { Outlet } from 'react-router-dom' 
import { SidebarContext } from './context/SlidebarContext';
import Sidebar from './components/Sidebare/Sidebare';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Outlet />  
        </div>
      </div>
    </SidebarContext.Provider>
  )
}

export default App;