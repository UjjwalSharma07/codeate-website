import { combineReducers, configureStore } from "@reduxjs/toolkit";

// persist redux
import storage from "redux-persist/lib/storage";

import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { allApi } from "./features/allSlice";
import { uploadFile } from "./features/fileUploadSlice";

import authReducer from "./features/authSlice";

const persistConfig = {
  timeout: 1000, // TODO: take a look at time out is there any problem with respect to presisted state
  key: "root",
  storage,
};

const reducers = combineReducers({
  auth: authReducer,
  [allApi.reducerPath]: allApi.reducer,
  [uploadFile.reducerPath]: uploadFile.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(allApi.middleware),
});

setupListeners(store.dispatch);

export default store;
