import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import 'bootstrap/dist/css/bootstrap.css';

function Register() {
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let [err, setErr] = useState("");
  let navigate = useNavigate();

  async function onUserRegister(newUser) {
    try {
      let res = await fetch("http://localhost:5000/user-api/user", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(newUser),
      });
      let data = await res.json();
      if (data.message === "user created") {
        navigate("/login");
      } else {
        setErr(data.message);
      }
    } catch (err) {
      console.log("err is ", err);
      setErr(err.message);
    }
  }

  return (
    <div className="register-container">
      <div className="register-card">
        <h2 className="text-center">Create an Account</h2>
        {err && <p className="text-danger text-center fs-2">{err}</p>}
        <form className="register-form" onSubmit={handleSubmit(onUserRegister)}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              className="form-control"
              placeholder="Enter your username"
              {...register("username", {
                required: true,
                minLength: 5,
                maxLength: 20,
              })}
            />
            {errors.username?.type === "required" && (
              <p className="text-danger">*Username is required.</p>
            )}
            {errors.username?.type === "minLength" && (
              <p className="text-danger">
                *The Minimum Length of Username is 5.
              </p>
            )}
            {errors.username?.type === "maxLength" && (
              <p className="text-danger">
                *The Maximum Length of Username is 20.
              </p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter your password"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 12,
              })}
            />
            {errors.password?.type === "required" && (
              <p className="text-danger">*Password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-danger">
                *The Minimum Length of Password is 6.
              </p>
            )}
            {errors.password?.type === "maxLength" && (
              <p className="text-danger">
                *The Maximum Length of Password is 12.
              </p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter your email"
              {...register("email", { required: true })}
            />
            {errors.email?.type === "required" && (
              <p className="text-danger">*Email is required</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Mobile Number</label>
            <input
              type="tel"
              id="mobile"
              className="form-control"
              placeholder="Enter your mobile number"
              {...register("mobile", {
                required: true,
                validate: (value) => value.length === 10,
              })}
            />
            {errors.mobile?.type === "required" && (
              <p className="text-danger">*Mobile number is required</p>
            )}
            {errors.mobile?.type === "validate" && (
              <p className="text-danger">
                *Mobile number must be exactly 10 digits
              </p>
            )}
          </div>
          <button className="btn btn-primary btn-block" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
export default Register;