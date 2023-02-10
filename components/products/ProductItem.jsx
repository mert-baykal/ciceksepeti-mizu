import Image from "next/image";
import plusIcon from "assets/plus-icon.svg"
import minusIcon from "assets/decrease-icon.png"
import { useDispatch } from "react-redux";
import { addBasket, removeBasket } from "@/stores/basketSlice";
import { useSelector } from "react-redux";
import { useState } from "react";

const ProductItem = ({ data }) => {

    const currentProduct = useSelector(state =>
        state.basket.baskets.find(item => item.data.id == data.id)
    );

    const [visible, setVisible] = useState(currentProduct?.quantity || 0);

    const dispatch = useDispatch();

    const onClickItem = (item) => {
        dispatch(addBasket(item));
    }

    const onClickDecreaseItem = (item) => {
        dispatch(removeBasket(item))
        setVisible(currentProduct?.quantity > 1 || 0);
    }

    return (

        <div className="products-item">
            <div className="products-item__image">
                <Image src={data.product_image} alt="Product" width={242} height={244} />
            </div>
            <div className="products-item__contexts">
                <div className="products-item__desc">
                    {data.name}
                </div>
                <div className="products-item__info">
                    {data.offers}
                </div>
                <div className="products-item__price">
                    {data.price} TL
                </div>

                <div className="products-item__button">

                    {
                        !visible
                            ? <button
                                className="products-item__button-btn"
                                onClick={() => setVisible(!visible)}>
                                Sepete Ekle
                            </button>
                            : <div className="products-item__counter">
                                <button
                                    className="products-item__decrease"
                                    onClick={() => onClickDecreaseItem(data)}>
                                    <Image src={minusIcon} alt="decrease icon" />
                                </button>

                                <span>{currentProduct?.quantity || 0}</span>

                                <button
                                    className="products-item__increase"
                                    onClick={() => onClickItem(data)}>
                                    <Image src={plusIcon} alt="increase icon" />
                                </button>
                            </div>
                    }

                </div>
            </div>
        </div>

    );
}

export default ProductItem;