import React from "react";
import "../Shop/ProductCard.css";
import { formatPrice } from "../../utils/formatPrice";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
    images: string[];
    id: string;
    name: string;
    price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ images, id, name, price }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/shop/${id}`);
    };

    return (
        <div onClick={handleClick} className="productContainer">
            <div>

                <img className="imageContainer" src={images[0]} alt={name} />
            </div>
            <p>{name}</p>
            <p>{formatPrice(price)}</p>
        </div>
    );
}

export default ProductCard;
