import './css/index.css'
import { useState } from 'react'
import { SidebarContext } from './context/SlidebarContext';
import Sidebar from './components/Slidebare/Slidebare';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
        </div>
      </div>
    </SidebarContext.Provider>
  )
}

export default App;