import React from 'react';

interface SetQtyProps {
    quantity: number;
    cartCounter?: boolean;
    handleQtyIncrease: () => void;
    handleQtyDecrease: () => void;
}

const SetQuantity: React.FC<SetQtyProps> = ({ cartCounter, quantity, handleQtyDecrease, handleQtyIncrease }) => {
    return (
        <div className="set-quantity">
            {!cartCounter && <div className="quantity-label">QUANTITY: </div>}
            <div className="quantity-controls">
                <button onClick={handleQtyDecrease} className="quantity-btn">-</button>
                <div className="quantity-display">{quantity}</div>
                <button onClick={handleQtyIncrease} className="quantity-btn">+</button>
            </div>
        </div>
    );
}

export default SetQuantity;