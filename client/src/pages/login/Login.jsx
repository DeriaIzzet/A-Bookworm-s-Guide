import "./Login.css";
import { useContext } from "react";

import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";

export default function Login() {
  const { onLoginSubmit } = useContext(AuthContext);
  const { values, changeHandler } = useForm({
    email: "",
    password: "",
  });
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={onLoginSubmit}>
        <label>Email:</label>
        <input
          type="email"
          className="loginInput"
          id="email"
          autoComplete="username"
          name="email"
          value={values.email}
          onChange={changeHandler}
          placeholder="Enter your email..."
        />

        <label>Password:</label>
        <input
          type="password"
          className="loginInput"
          id="login-password"
          name="password"
          value={values.password}
          onChange={changeHandler}
          autoComplete="current-password"
        />
        <input type="submit" className="loginButton" value="Login" />
        <p className="loginRegisterButton">
          <span>
            Don't have profile? Click <a href="/register">here</a>
          </span>
        </p>
      </form>
    </div>
  );
}
