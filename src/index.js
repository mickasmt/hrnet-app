import React from "react";
import ReactDOM from "react-dom/client";
import { EmployeesProvider } from "utils/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// styles
import "styles/main.css";

// pages
import Home from "pages/Home";
import NewEmployee from "pages/NewEmployee";
import ListEmployees from "pages/ListEmployees";

// components
import Error from "components/Error";
import Layout from "components/Layout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <EmployeesProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/employees/new" element={<NewEmployee />} />
            <Route path="/employees" element={<ListEmployees />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Layout>
      </Router>
    </EmployeesProvider>
  </React.StrictMode>
);
