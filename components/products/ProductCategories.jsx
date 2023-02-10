import { setCategory } from "@/stores/globalSlice";
import hamburger from "assets/hamburger.svg"
import Image from "next/image"
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductCategories = () => {
    const [categories, setCategories] = useState([]);
    const { selectedCategory } = useSelector(state => state.globals);
    const router = useRouter();

    const dispatch = useDispatch();

    const onChangeSelectedCategory = (categoryName) => {
        if (categoryName === selectedCategory) return;

        dispatch(setCategory(categoryName));
    };

    useEffect(() => {
        fetch(`/api/categories`).then(data => data.json()).then(data => setCategories(data));
    }, [])

    return (
        <div className="container">
            <div className="categories">
                <div className="categories__title">
                    <Image className="categories__icon" src={hamburger} alt="Hamburger Icon" />
                    Kategoriler
                </div>

                <div className="categories__items">
                    {categories.map((item, i) => (
                        <Link className={selectedCategory == item.category ? `categories__item -active` : `categories__item`} href='' key={i} onClick={() => onChangeSelectedCategory(item.category)}>
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div >
    );
}

export default ProductCategories;