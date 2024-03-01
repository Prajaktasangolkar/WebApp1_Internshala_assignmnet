import React, { useContext } from "react";
import { ObjContext } from "../../context/objContext";
import Layout from "../Layout";

function Top5sales() {
    const {obj, getTop5Sales} = useContext(ObjContext)
    console.log(obj);

  return (
    <div>
      <Layout>
      <h2 style={{'text-align': 'center', 'margin-bottom': '20px','marginTop':'18px'}} >ADD SALE ENTRY</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Sales id:</th>
            <th scope="col">Product Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Sale Amount</th>
          </tr>
        </thead>
        <tbody>
            {getTop5Sales().map((sale, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>SI{index + 1}</td>
                <td>{sale.productName}</td>
                <td>{sale.quantity}</td>
                <td>{sale.amount}</td>
              </tr>
            ))}
        </tbody>
      </table>
      </Layout>
    </div>
  );
}

export default Top5sales;

