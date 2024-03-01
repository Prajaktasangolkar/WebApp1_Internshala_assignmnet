//totalrevenue
import React, { useContext } from "react";
import { ObjContext } from "../../context/objContext";
import Layout from "../Layout";

function TotalRevenue() {
    const {obj, calculateTotalRevenue} = useContext(ObjContext)
    console.log(obj);
    const totalRevenue = calculateTotalRevenue();
  return (
    <div>
      <Layout>
      <h2 className="text-center mt-3">Today's Total Revenue: {totalRevenue}</h2>
      </Layout>
    </div>
  );
}

export default TotalRevenue;

