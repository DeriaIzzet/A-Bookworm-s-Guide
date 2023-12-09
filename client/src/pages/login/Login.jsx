import "./Login.css";
import { useAuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";
import { Link } from "react-router-dom";
import { useState } from "react";


const LoginFormKeys = {
  Email: 'email',
  Password: 'password'
};

export default function Login ()  {
    const { onLoginSubmit } = useAuthContext();
    const {error} = useAuthContext()
    const [errors, setErrors] = useState({
      [LoginFormKeys.Email]: "",
      [LoginFormKeys.Password]: "",
    });
  
    const { values, changeHandler, onSubmit } = useForm(
      {
        [LoginFormKeys.Email]: "",
        [LoginFormKeys.Password]: "",
      },
      async () => {
        // You can perform additional actions on successful form submission
        await onLoginSubmit(values);
      }
    );
  
    const isValidEmail = email => {
      // Basic email validation, you might want to use a library or more complex validation logic
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };
  
    const isValidPassword = password => {
      // Basic password validation, you might want to use a library or more complex validation logic
      return password.length >= 6;
    };
  
    const hasErrors = () => {
      return Object.values(errors).some(error => error !== "");
    };
  
    const changeHandlerWithValidation = event => {
      const { name, value } = event.target;
  
      let error = "";
      if (name === LoginFormKeys.Email && !isValidEmail(value)) {
        error = "Invalid email address";
      } else if (name === LoginFormKeys.Password && !isValidPassword(value)) {
        error = "Password must be at least 6 characters long";
      }
  
      setErrors(prevErrors => ({ ...prevErrors, [name]: error }));
      changeHandler(event);
    };
  
    return (
      <section id="login-page" className="login">
        <form className="loginForm" method="POST" onSubmit={onSubmit}>
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
              onChange={changeHandlerWithValidation}
            />
            <div className="error-message">{errors[LoginFormKeys.Email]}</div>
  
            <label htmlFor="login-pass">Password:</label>
            <input
              type="password"
              id="login-password"
              autoComplete="current-password"
              placeholder="Enter password ..."
              name={LoginFormKeys.Password}
              value={values[LoginFormKeys.Password]}
              onChange={changeHandlerWithValidation}
            />
            <div className="error-message">{errors[LoginFormKeys.Password]}</div>
            
            {error && <div className="error-message">{error}</div>} 
            <input type="submit" className="btn-submit" value="Login" />
  
            <p className="field">
              <span className="loginRegisterButton">
                Don't have a profile? You can <Link to="/register"> Register </Link> here.
              </span>
            </p>
          </div>
        </form>
      </section>
    );
  }