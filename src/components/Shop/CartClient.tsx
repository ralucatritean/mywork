import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './CartClient.css';
import { formatPrice } from '../../utils/formatPrice';
import CartProduct from './ItemContent';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { products } from '../../utils/products';

const CartClient = () => {
    const { cart, clearCart } = useCart(); // Utilizăm hook-ul useCart
    const [checkoutCompleted, setCheckoutCompleted] = useState(false);
    // Calculăm subtotalul
    const [confirmationNumber, setConfirmationNumber] = useState('');
    const calculateSubtotal = () => {
        return cart.reduce((total, cartItem) => {
            const product = products.find(p => p.id === cartItem.id);
            return total + (product?.price || 0) * cartItem.qty;
        }, 0);
    };
    const handleCheckout = () => {
        const confNumber = crypto.randomUUID().substring(0, 8).toUpperCase();

        clearCart();
        setConfirmationNumber(confNumber);
        setCheckoutCompleted(true);
    };

    if (checkoutCompleted) {
        return (
            <div className="checkout-confirmation">
                <h2>🎉 Mulțumim pentru comandă!</h2>
                <p>Număr de confirmare: <strong>{confirmationNumber}</strong></p>
                <div className="confirmation-details">
                    <p>Un coleg din echipa noastră vă va contacta în cel mai scurt timp posibil pentru:</p>
                    <ul>
                        <li>✅ Confirmarea detaliilor comenzii</li>
                        <li>✅ Discutarea opțiunilor de livrare</li>
                        <li>✅ Aranjarea plății</li>
                    </ul>
                    <p>🤝 Ne bucurăm de colaborarea cu dumneavoastră și vă mulțumim!</p>

                </div>
                <Link to="/shop" className="continue-shopping">
                    ↪️ Întoarce-te la site
                </Link>
            </div>
        );
    }
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
                <div className="product-header  heder-title" >Produs</div>
                <div>Preț</div>
                <div>Cantitate</div>
                <div>Total</div>
            </div>
            <div>
                {cart.map((product) => (
                    <CartProduct key={`cart-product-${product.id}`} prodId={product.id} />
                ))}
            </div>
            <div className="cart-footer">
                <div className="cart-summary">
                    <div className="subtotal">
                        <span>Subtotal: {formatPrice(calculateSubtotal())}</span>
                    </div>
                    <p className="taxes-info">Taxe și transport calculate la finalizare</p>
                    <div>
                        <button className="checkout-button" onClick={handleCheckout}>
                            Finalizează comanda
                        </button>
                    </div>
                    <div>
                        <button onClick={clearCart}>Șterge coșul</button>
                    </div>
                    <div>
                        <Link to="/shop" className="continue-shopping">
                            <span>🔙 Continuă cumpărăturile</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartClient;