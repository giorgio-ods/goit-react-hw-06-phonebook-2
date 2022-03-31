import { configureStore } from "@reduxjs/toolkit";
import contactsSlice from "features/ContactsSlice";

export const store = configureStore({
    reducer: {
        contact: contactsSlice
    }
})