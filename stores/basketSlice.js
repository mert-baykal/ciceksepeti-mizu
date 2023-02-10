import { isBrowser } from "@/utils/helper";

const { createSlice } = require("@reduxjs/toolkit");

const saveBasket = (basketDatas) => isBrowser(() => {
    localStorage.setItem('basket', JSON.stringify(basketDatas));
})

const loadBasket = () => isBrowser(() => {
    const data = localStorage.getItem('basket');
    return data ? JSON.parse(data) : [];
});

const initialState = { baskets: loadBasket() };

const store = createSlice({
    initialState,
    name: 'basket',
    reducers: {
        addBasket(state, { payload }) {

            let isUpdated = false;

            state.baskets = state.baskets.map(item => {
                if (item.data.id == payload.id) {
                    item.quantity += 1;
                    isUpdated = true;
                    return item;
                }

                return item;
            });

            // Basket içerisinde, gelen ürün bulunmadığından yeni olarak ekliyoruz
            if (!isUpdated) {
                state.baskets = [
                    ...state.baskets,
                    {
                        quantity: 1,
                        data: payload
                    }
                ]
            }

            saveBasket(state.baskets);
        },
        removeBasket(state, { payload }) {

            /**
             * Silme işleminde mevcut basket listemizde bir filtre işlemi yapıyoruz.
             * Map kullanmadık. Eğer mevcut ürün adedi 1 ise listeden çıkarmamız gerekir.
             * Eğer 1 den fazlaysa mevcut ürünü sepette tekrar tutmamız gerekir.
             */
            state.baskets = state.baskets.filter(item => {

                if (item.data.id === payload.id) {
                    // Mevcut ürün adedi 1 ise sepetten çıkar
                    if (item.quantity === 1) {
                        console.log('Silindi')
                        return false;
                    }

                    item.quantity -= 1;

                    return item;
                }

                return item;

            });

            saveBasket(state.baskets);
        }
    }
})

export const { addBasket, removeBasket } = store.actions;
export default store.reducer;


