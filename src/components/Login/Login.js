//login.js
import React from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

import Layout from "../Layout";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your login logic can go here

    // After successful login, navigate to the add sales page
    navigate("/");
  };

  return (
    <div>
      <Layout>
      <div className="login template d-flex justify-content-center align-items-center vh-100 bg-secondary">
        <div className="form_container p-5 rounded bg-white">
          <form onSubmit={handleSubmit}>
            <h3>Login Form</h3>
            <div className="mb-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="form-control"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Enter Your Password"
                className="form-control"
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-success">Submit</button>
            </div>
            <p className="text-center mt-2">
              <Link to="/Register">Register</Link>
            </p>
          </form>
        </div>
      </div>
      </Layout>
    </div>
  );
}

export default Login;
