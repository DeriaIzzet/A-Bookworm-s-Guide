import "./Register.css";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../contexts/AuthContext";

const RegisterFormKeys = {
  Email: "email",
  Password: "password",
  Username: "username",
  ConfirmPassword: "confirmPassword",
};
export default function Register() {
  const { onRegisterSubmit } = useContext(AuthContext);
  const { values, changeHandler, onSubmit } = useForm(
    {
      [RegisterFormKeys.Username]: "",
      [RegisterFormKeys.Email]: "",
      [RegisterFormKeys.Password]: "",
      [RegisterFormKeys.ConfirmPassword]: "",
    },
    onRegisterSubmit
  );
  return (
    <div className="register">
      <form className="registerForm" method="POST" onSubmit={onSubmit}>
      <span className="registerTitle">Register</span>
        <label>Username</label>
        <input
          className="registerInput"
          type="username"
          id="username"
          placeholder="Enter username ..."
          autoComplete="username"
          name={RegisterFormKeys.Username}
          value={values[RegisterFormKeys.Username]}
          onChange={changeHandler}
        />
        <label>Email</label>
        <input
          className="registerInput"
          type="email"
          id="email"
          placeholder="Enter email ..."
          autoComplete="username"
          name={RegisterFormKeys.Email}
          value={values[RegisterFormKeys.Email]}
          onChange={changeHandler}
        />
        <label>Password:</label>
        <input
          className="registerInput"
          type="password"
          id="password"
          autoComplete="current-password"
          placeholder="Enter password ..."
          name={RegisterFormKeys.Password}
          value={values[RegisterFormKeys.Password]}
          onChange={changeHandler}
        />
        <label>Confirm Password:</label>
        <input
          className="registerInput"
          type="password"
          id="confirmPassword"
          autoComplete="current-password"
          placeholder="Enter password ..."
          name={RegisterFormKeys.ConfirmPassword}
          value={values[RegisterFormKeys.ConfirmPassword]}
          onChange={changeHandler}
        />
        <button className="registerButton">Register</button>
      </form>
      <p className="field">
      <span className="registerLoginButton">
        Already have profile? You can <Link to="/login"> Login </Link> here.
      </span>
      </p>
    </div>
  );
}
