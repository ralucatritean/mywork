import { createContext } from 'react';

interface SidebarContextType {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

// Putem crea o funcție helper pentru debugging
const debugSetIsOpen = (value: boolean) => {
  console.log('Sidebar state changed to:', value);
  // Aici poți adăuga orice altă logică de debugging dorești
};

export const SidebarContext = createContext<SidebarContextType>({
  isOpen: false,
  setIsOpen: debugSetIsOpen,
});