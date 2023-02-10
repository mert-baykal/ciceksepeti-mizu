import Image from "next/image";
import categoriesIcon from "assets/categories-icon.svg"
import ProductItem from "./ProductItem";

const ProductItems = ({ datas }) => {
    return (
        <div className="products-items container">
            <div className="products-items__title">
                <Image src={categoriesIcon} alt="Green Icon" />
                Tüm Kategoriler
            </div>

            <div className="items">
                {datas?.map((data, i) => <ProductItem key={i} data={data} />)}
            </div>
        </div>
    );
}

export default ProductItems;