import Image from "next/image";
import BasketIcon from "assets/basket-icon.png"
import LightingIcon from "assets/lighting-icon.svg"
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Cart = () => {

    const [counter, setCounter] = useState(0);
    const [amount, setAmount] = useState(0);

    const basketDatas = useSelector(state => state.basket.baskets);

    const amountMessage = () => {
        if (amount < 500) {
            return <div>
                <span className="header__basket-popup_counter">
                    {(500 - amount).toFixed(2)} TL
                </span> ürün daha ekleyin kargo bedava
            </div>
        }

        return <div>Kargo bedava!</div>
    }

useEffect(() => {
    const count = basketDatas.reduce((total, current) => total + current.quantity, 0);
    const totalAmount = basketDatas?.reduce((total, current) => total + (current.data.price * current.quantity), 0);
    setCounter(count);
    setAmount(totalAmount);
}, [basketDatas]);

return (
    <div className="header__dynamic-basket">
        <Image src={BasketIcon} alt="Basket Icon" />
        <span className="header__basket-desc">Sepetim</span>
        <span className="header__basket-counter">{counter || 0}</span>

        <div className={counter >= 1 ? "header__basket-popup" : "header__basket-popup -hidden"}>
            <div className="header__basket-popup_text">
                <Image src={LightingIcon} alt="Lighting Icon" />
                <div className="header__basket-popup_desc">
                    {amountMessage()}

                </div>
            </div>

            <div className="header__basket-popup_progressbar">
                <progress value={amount} max="500"> </progress>
            </div>
        </div>
    </div>
);
}

export default Cart;
