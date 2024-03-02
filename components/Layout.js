import React from "react";
import { useSelector } from "react-redux";
import { userState } from "../redux/features/authSlice";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ Component, pageProps }) => {
  const user = useSelector(userState);

  return (
    <>
      <Navbar user={user} />
      <Component {...pageProps} />
      <Footer user={user} />
    </>
  );
};

export default Layout;
