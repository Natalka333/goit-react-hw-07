

import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';
import filterReducer from './filtersSlice';




export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
    },

});


// https://66cb33b84290b1c4f199bca3.mockapi.io/:endpoint