import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./modules/Navbar/Navbar";
import Customers from "./modules/Customer/container/Customers";
import AddCustomer from "./modules/Customer/container/AddCustomer";
import EditCustomer from "./modules/Customer/container/EditCustomer";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/addcustomer" />} />
        <Route path="/addcustomer" element={<AddCustomer />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/customer/:id" element={<EditCustomer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
