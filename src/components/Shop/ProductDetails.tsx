import { products } from "../../utils/products";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../Shop/ProductDetails.css"
import { formatPrice } from "../../utils/formatPrice";
import QuantityInput from "../../utils/QuantityInput";
import { useCart } from "../../context/CartContext";

const Horizontal = () => {
    return <hr className="w-[30%] my-2" />
}
const ProductDetails = () => {
    const { id } = useParams();
    const [photoId, setPhotoId] = useState(0);
    const { addToCart } = useCart();
    const [currentQuantity, setCurrentQuantity] = useState(1);
    useEffect(() => {

    }, [photoId])

    const handleQuantityChange = (newQuantity: number) => {
        setCurrentQuantity(newQuantity);
    };

    const handleAddProduct = () => {
        if (!product) return;

        addToCart({
            id: product.id,
            qty: currentQuantity,
        });
    };

    const product = products.find((p) => p.id === id)
    if (!product) {
        return <h2>Produsul nu există!</h2>
    }

    return (
        <div className="productDetails-container">
            <div className="product-description">
                <div className="image-content">
                    <div key={product.id} className={`listOfImage-${product.images.length}`}>
                        {product.images.map((image, index) => (
                            <button key={product.id} className="imgBtn" onClick={() => { setPhotoId(index) }}>
                                <img src={image} className="smallImg" /></button>
                        ))}
                    </div>
                    <div className="bigImage">
                        <img src={product.images[photoId]} className="bigImg" />
                    </div>
                </div>
                <div className="description-content">
                    <div className="productName"><h2>{product.name}</h2></div>
                    <Horizontal />
                    <div className="descriptio-paragraf">
                        <div><b>Descriere:</b></div>
                        <div>{product.description}</div>
                    </div>
                    <Horizontal />
                    <div className="descriptio-paragraf">
                        <b> Pret:</b> {formatPrice(product.price)}</div>
                    <Horizontal />
                    <div className={`descriptio-paragraf ${product.inStock ? "green" : "red"}`}>
                        <b>{product.inStock ? "Disponibil" : "Indisponibil"}</b></div>
                    <Horizontal />
                    <div className="descriptio-paragraf">
                        <b>Cantitate: </b>
                        <QuantityInput onQuantityChange={handleQuantityChange} />
                    </div>
                    <div className="descriptio-paragraf">
                        <button onClick={() => { handleAddProduct() }}> Adauga in cos </button>
                    </div>
                </div>

            </div>
        </div>);
}

export default ProductDetails;