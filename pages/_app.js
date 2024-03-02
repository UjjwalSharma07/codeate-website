import "../styles/globals.css";

import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import Loading from "../components/Loading";
import Navbar2 from "../components/Navbar2";
import { Provider, useSelector } from "react-redux";
import store from "../redux/store";
import Loader from './'
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import Nav from "../components/Nav";

import thunk from 'redux-thunk'
import reducers from '../pages/admin/reducers'


function MyApp({ Component, pageProps }) {
  let persistor = persistStore(store);

  return (
    <Provider store={store}>
    

      <PersistGate
        loading={
          <div className="grid place-content-center h-screen ">
            <Loading color="#B686CA"/>
          </div>
        }
        persistor={persistor}
        >
       
        <Navbar />
        <Component {...pageProps} />
        
      </PersistGate>
       
    </Provider>
  );
}

export default MyApp;
