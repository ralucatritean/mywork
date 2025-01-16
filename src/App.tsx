import './css/index.css'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'  // Adaugă acest import
import { SidebarContext } from './context/SlidebarContext';
import Sidebar from './components/Sidebare/Sidebare';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Outlet />  {/* Aici se vor afișa componentele din rute */}
        </div>
      </div>
    </SidebarContext.Provider>
  )
}

export default App;