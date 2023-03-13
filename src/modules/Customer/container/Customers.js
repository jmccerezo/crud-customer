import React from "react";
import CustomersTable from "../component/CustomersTable";

const Customers = () => {
  return (
    <div className="page-container">
      <div className="h-one-container">
        <h1>CUSTOMERS</h1>
      </div>
      <CustomersTable />
    </div>
  );
};

export default Customers;
