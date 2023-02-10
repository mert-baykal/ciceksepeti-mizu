import Image from "next/image";
import Logo from "assets/logo.svg"
import BasketIcon from "assets/basket-icon.png"
import LightingIcon from "assets/lighting-icon.svg"
import Search from "./header/Search";
import Cart from "./header/Cart";

const Header = () => {
    return ( 
        <nav className='container'>
            <div className="header">
                <div className="header__logo">
                    <Image src={Logo} alt="Çiçeksepeti" />
                </div>

                <div className="header__dynamic">
                    <Search />

                    <Cart />
                </div>
            </div>
        </nav>
    );
}

export default Header;
