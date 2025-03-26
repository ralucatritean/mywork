import { useNavigate } from "react-router-dom";
import cart from "../../assets/cart.png"
import { useCart } from "../../context/CartContext";

const CartBtn = () => {
    const navigate = useNavigate();
    const { getCartItemCount } = useCart();
    
    const handleCartClick = () => {
        navigate(`/shop/cart/`);
    };
    return (
        <div className="cartContainer" >
            <button onClick={handleCartClick} className="customButton">
                <img className="cartImg" src={cart} />
            </button>
            <span className="qtyCart"><b>{getCartItemCount()}</b></span>
        </div>);
}

export default CartBtn;