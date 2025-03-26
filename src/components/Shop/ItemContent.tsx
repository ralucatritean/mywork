// ItemContent.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { formatPrice } from '../../utils/formatPrice';
//import SetQuantity from './SetQuantity';
import "./ItemContent.css";
import { products } from '../../utils/products';
import SetQuantity from './SetQuantity';
import { useCart
    
 } from '../../context/CartContext';
interface ItemContentProps {
    prodId: string,
}

const ItemContent: React.FC<ItemContentProps> = ({ prodId }) => {
    const { cart, removeFromCart, increaseQty, decreaseQty } = useCart(); // Utilizăm hook-ul useCart
    const item = products.find((p) => p.id === prodId);
    const cartItem = cart.find(i => i.id === prodId);
    const quantity = cartItem ? cartItem.qty : 0;

    if (!item) {
        return <div>Product not found</div>;
    }

    return (
        <div className="item-content">
            <div className="item-details">
                <Link to={`/shop/${item.id}`}>
                    <div className="item-image">
                        <img src={item.images[0]} alt={item.name} />
                    </div>
                </Link>
                <div className="item-info">
                    <Link to={`/shop/${item.id}`}><p>{item.name}</p></Link>
                    <button className="remove-button" onClick={() => removeFromCart(prodId)}>
                        Remove
                    </button>
                </div>
            </div>
            <div className="item-price">{formatPrice(item.price)}</div>
            <div className="item-quantity">
                <SetQuantity 
                    cartCounter={true} 
                    quantity={quantity} 
                    handleQtyDecrease={() => decreaseQty(prodId)} 
                    handleQtyIncrease={() => increaseQty(prodId)}
                />
            </div>
            <div className="item-total">{formatPrice(item.price * quantity)}</div>
        </div>
    );
};

export default ItemContent;