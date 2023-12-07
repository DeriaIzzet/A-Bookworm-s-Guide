import "./Login.css";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";
import { Link } from "react-router-dom";


const LoginFormKeys = {
  Email: 'email',
  Password: 'password'
};

export default function Login ()  {
  const { onLoginSubmit } = useContext(AuthContext);
  const { values, changeHandler, onSubmit } = useForm({
      [LoginFormKeys.Email]: '',
      [LoginFormKeys.Password]: '',
      [LoginFormKeys.Username]: '',
  }, onLoginSubmit);

  return (
      <section id="login-page" className="login">
          <form id="login" method="POST" onSubmit={onSubmit}>
              <div className="login-div">
                  
                  <h1>Login</h1>
                  
                  <label htmlFor="email">Email:</label>
                  <input
                      type="email"
                      id="email"
                      placeholder="Enter email ..."
                      autoComplete="username"
                      name={LoginFormKeys.Email}
                      value={values[LoginFormKeys.Email]}
                      onChange={changeHandler}
                  />

                  <label htmlFor="login-pass">Password:</label>
                  <input
                      type="password"
                      id="login-password"
                      autoComplete="current-password"
                      placeholder="Enter password ..."
                      name={LoginFormKeys.Password}
                      value={values[LoginFormKeys.Password]}
                      onChange={changeHandler}
                  />
                  <input type="submit" className="btn-submit" value="Login" />
                  <p className="field">
                      <span className="loginRegisterButton" >Don't have proile?  You can  <Link to="/register"> Register </Link> here. </span>
                  </p>
              </div>
          </form>
      </section>
  );
}