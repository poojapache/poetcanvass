'use client'
import React, { ReactNode } from "react";
import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./Reducers/rootReducer";
import { Provider } from "react-redux";

interface AppProps {
    children: ReactNode;
}

export const store = configureStore({
    reducer: rootReducers
});

export default function App({ children }: AppProps) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
}