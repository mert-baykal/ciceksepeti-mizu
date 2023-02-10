import Image from "next/image";
import SearchIcon from "assets/search-icon.svg"
import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setSearchText } from "@/stores/globalSlice";

const Search = () => {

    const [text, setText] = useState('');

    const router = useRouter();
    const dispatch = useDispatch();

    // Ara butonuna basıldığında çalıştır
    function onSearchProduct() {

        // Eğer veri 3 karakter ve daha fazla uzunluğa sahipse çalıştır
        if (text.length >= 3) {

            // Global store üzerinde, arama yapılan metnin değerini gönder
            dispatch(setSearchText(text));

            // Mevcut URL üzerinde querystring parametreleri ekle
            router.push('/', { query: { searchText: text } });
        }
    }

    // Input alanında arama yapıldığında çalıştır
    function onInput(event) {

        // Input içerisindeki mevcut değeri al
        const value = event.currentTarget.value;

        // Gelen değeri state değişkenine at
        setText(value);

        // Gelen değer 3 karakterden daha az ise işlemi durdur
        if (value.length < 3) return;


        // Klavyeden enter tuşuna basıldığında arama işlevini çalıştır
        if (event.keyCode == 13 || event.code == 'Enter') {
            onSearchProduct()
        }

    }

    return (
        <div className="header__dynamic-search">
            <Image src={SearchIcon} alt="Search Icon" />
            <input onKeyUp={onInput}  name="search" placeholder="Ürün Ara" />
            <button className="header__search-btn" onClick={onSearchProduct} disabled={text.length < 3}>Ara</button>
        </div>
    );
}

export default Search;
