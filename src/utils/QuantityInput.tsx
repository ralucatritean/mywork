import React, { useState } from "react";

interface QuantityInputProps {
  onQuantityChange: (quantity: number) => void;
}

const QuantityInput: React.FC<QuantityInputProps> = ({ onQuantityChange }) => {
  const [quantity, setQuantity] = useState<number>(1);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = Math.max(1, Math.min(99, Number(e.target.value)));
    setQuantity(newQuantity);
    onQuantityChange(newQuantity);
  };

  return (
    <input
      type="number"
      value={quantity}
      onChange={handleQuantityChange}
      min={1}
      max={99}
      className="input-box"
    />
  );
};

export default QuantityInput;
