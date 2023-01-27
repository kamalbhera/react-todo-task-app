import storage from "redux-persist/lib/storage";
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER } from "redux-persist";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
import dateReducer from "../features/date/dateSlice";

const persistConfig = {
    key: "root",
    storage,
}

const rootReducer = combineReducers({
    todos: todoReducer,
    date: dateReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
});

export const persistor = persistStore(store);