import React from 'react';
import { Link } from "react-router-dom";
import './CartClient.css';
import { formatPrice } from '../../utils/formatPrice';
import CartProduct from './ItemContent';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { products } from '../../utils/products';

const CartClient = () => {
    const { cart, clearCart } = useCart(); // Utilizăm hook-ul useCart
    
    // Calculăm subtotalul
    const calculateSubtotal = () => {
        return cart.reduce((total, cartItem) => {
            const product = products.find(p => p.id === cartItem.id);
            return total + (product?.price || 0) * cartItem.qty;
        }, 0);
    };

    if (cart.length === 0) {
        return (
            <div className="empty-cart">
                <h2>Coșul de cumpărături este gol</h2>
                <Link to="/shop" className="continue-shopping">
                    <span> ⬅️ Continuă cumpărăturile</span>
                </Link>
            </div>
        );
    }

    return (
        <div className="cart-container">
            <div className="shoppingCartHeader">
                <h2>Coș de cumpărături</h2>
                <ShoppingCart size={20} />
            </div>
            <div className="cart-header">
                <div className="product-header">Produs</div>
                <div>Preț</div>
                <div>Cantitate</div>
                <div>Total</div>
            </div>
            <div>
                {cart.map((product) => (
                    <CartProduct key={product.id} prodId={product.id} />
                ))}
            </div>
            <div className="cart-footer">
                <div className="cart-summary">
                    <div className="subtotal">
                        <span>Subtotal: {formatPrice(calculateSubtotal())}</span>
                    </div>
                    <p className="taxes-info">Taxe și transport calculate la finalizare</p>
                    <div>
                        <button className="checkout-button" onClick={() => { /* Logica de checkout */ }}>
                            Finalizează comanda
                        </button>
                    </div>
                    <div className="clear-cart">
                        <button onClick={clearCart}>Șterge coșul</button>
                    </div>
                    <div>
                        <Link to="/shop" className="continue-shopping">
                            <span>Continuă cumpărăturile ➡️</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartClient;