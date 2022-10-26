import React from "react";
import Header from "components/Header";
// import Footer from "components/Footer";

/**
 * Layout component for the app
 * @param {React.ReactNode} children 
 * @returns {React.ReactElement}
 */
function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      {/* <Footer /> */}
    </>
  );
}

export default Layout;
