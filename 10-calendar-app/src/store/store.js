import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { calendarSlice } from './calendar';
import { uiSlice } from './ui';

export const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        calendar: calendarSlice.reducer,
    },
    middleware: ( getDefaultMiddleware ) => getDefaultMiddleware({ serializableCheck: false }),
});