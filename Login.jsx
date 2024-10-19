import "./Login.css";
import { useForm } from "react-hook-form";
import { useContext, useEffect } from "react";
import { userLoginContext } from "../../contexts/userLoginContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { loginUser, userLoginStatus, err } = useContext(userLoginContext);
  const navigate = useNavigate();
  let { register, handleSubmit, formState: { errors } } = useForm();

  function onUserLogin(userCred) {
    loginUser(userCred);
  }
  useEffect(() => {
    if (userLoginStatus === true ) {
      console.log(userLoginStatus)
      navigate("/user-profile");
    }
  }, [userLoginStatus]);
  return (
    <div className="login-container">
      <div className="login-card">
          {err && <p className="fs-1 text-danger">{err}</p>}
          <form
            className="login-form"
            onSubmit={handleSubmit(onUserLogin)}
          >
            <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" className="form-control" placeholder="Enter your username" {...register("username", { required: true, minLength: 5, maxLength: 20 })} />
            {errors.username?.type === "required" && (<p className="text-danger">*Username is required.</p>)}
            {errors.username?.type === "minLength" && (<p className="text-danger">*The Minimum Length of Username is 5.</p>)}
            {errors.username?.type === "maxLength" && (<p className="text-danger">*The Maximum Length of Username is 20.</p>)}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" className="form-control" placeholder="Enter your password" {...register("password", { required: true, minLength: 6, maxLength: 12 })} />
            {errors.password?.type === "required" && (<p className="text-danger">*Password is required.</p>)}
            {errors.password?.type === "minLength" && (<p className="text-danger">*The Minimum Length of Password is 6.</p>)}
            {errors.password?.type === "maxLength" && (<p className="text-danger">*The Maximum Length of Password is 12.</p>)}
          </div>
          <button className="btn btn-primary btn-block" type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
}


export default Login;
