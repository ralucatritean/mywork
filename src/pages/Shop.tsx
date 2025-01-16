import { useContext } from "react";
import { SidebarContext } from "../context/SlidebarContext";

function Shop() {
    const { isOpen } = useContext(SidebarContext);

    return (
        <div className={`content ${isOpen ? 'openContainer' : 'closeContainer'}`}>
            <h1>Shop Page</h1>
            {/* Restul conținutului pentru Shop */}
        </div>
    );
}

export default Shop;