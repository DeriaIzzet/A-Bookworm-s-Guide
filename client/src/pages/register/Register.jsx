import "./Register.css";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../contexts/AuthContext";

const RegisterFormKeys = {
  Email: 'email',
  Password: 'password',
  Username: 'username'
};
export default function Register() {
  const { onRegisterSubmit } = useContext(AuthContext);
  const { values, changeHandler, onSubmit } = useForm(
    {
      [RegisterFormKeys.Username]: "",
      [RegisterFormKeys.Email]: "",
      [RegisterFormKeys.Password]: "",
    },onRegisterSubmit
  );
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
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
        <label>Password</label>
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
        <button className="registerButton">Register</button>
      </form>
      <span className="registerLoginButton">
        Already have profile? You can <Link to="/login">Login</Link> here.
      </span>
    </div>
  );
}
