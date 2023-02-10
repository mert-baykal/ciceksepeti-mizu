import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import basketSlice from './basketSlice'
import globalSlice from './globalSlice'

const slice = () => configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    reducer: {
        globals: globalSlice,
        basket: basketSlice
    }
})

export default createWrapper(slice)