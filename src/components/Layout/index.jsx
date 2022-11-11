import React from "react";
import PropTypes from "prop-types";
import Header from "components/Header";
import Footer from "components/Footer";

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
      <Footer />
    </>
  );
}

Layout.propTypes = {
  /** Childrens components */
  id: PropTypes.number.isRequired,
};

export default Layout;
