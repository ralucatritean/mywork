import { useState } from "react";
import Container from "../components/Container";
import Header from "../components/Header";
import ProductCard from "../components/Shop/ProductCard";
import "../css/components/Shop/Shop.css"
import { products } from "../utils/products";
import logo from "../assets/LOGO.png"
import cart from "../assets/cart.png"
import { Outlet, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ProductSearch from "../utils/ProductSearch";
import { CartProvider } from "../context/CartContext";
import CartBtn from "../components/Shop/CartBtn";

const Horizontal = () => {
    return <hr className="w-[100%] my-2" />
}

const Shop = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const isCartRoute = location.pathname.includes("/shop/cart");

    const handleShopClick = () => {
        navigate(`/shop/`);
    };
    const handleCartClick = () => {
        navigate(`/shop/cart/`);
    };

    // Filter products based on search query
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (isCartRoute)
        return (
            <div>
                <Container>
                    <CartProvider>
                        <Header title="Shop" />
                        <div className="topContainer">
                            <div onClick={handleShopClick}><img className="logoImg" src={logo} /></div>
                            <div className="searchContainer">
                            </div>
                            <CartBtn/>
                        </div>
                        <Outlet />
                    </CartProvider>
                </Container>
            </div>
        )
    if (id) {
        return (
            <div>
                <Container>
                    <CartProvider>
                        <Header title="Shop" />
                        <div className="topContainer">
                            <div onClick={handleShopClick}><img className="logoImg" src={logo} /></div>
                            <div className="searchContainer">
                            </div>
                            <CartBtn/>
                        </div>
                        <Outlet />
                    </CartProvider>
                </Container>
            </div >
        );
    }

    return (
        <div>
            <Container>
                <CartProvider>
                    <Header title="Shop" />
                    <div className="topContainer">
                        <div onClick={handleShopClick}><img className="logoImg" src={logo} /></div>
                        <div className="searchContainer">
                            <ProductSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                        </div>
                        <CartBtn/>
                    </div>

                    <div className="custom-grid-products">
                        {filteredProducts.map((product) => (
                            <ProductCard key={`product-card-item-${product.id}`} id={product.id} images={product.images} name={product.name} price={product.price} />
                        ))}
                    </div>
                </CartProvider>
            </Container>
        </div>
    );
}

export default Shop;
function getCartItemCount() {
    throw new Error("Function not implemented.");
}

