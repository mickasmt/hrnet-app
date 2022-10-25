import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// styles
import "styles/main.scss";

// pages
import CreateEmployee from "pages/CreateEmployee";
import Employees from "pages/Employees";

// components
import Error from "components/Error";
import Layout from "components/Layout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <Router>
        <Layout>
          <Routes>
            <Route path="/" exact element={<CreateEmployee />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Layout>
      </Router>
    {/* </Provider> */}
  </React.StrictMode>
);
