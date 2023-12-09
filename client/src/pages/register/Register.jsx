import "./Register.css";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {  useAuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";

const RegisterFormKeys = {
  Email: "email",
  Password: "password",
  Username: "username",
  ConfirmPassword: "confirmPassword",
};


export default function Register() {
  const { onRegisterSubmit } = useAuthContext()
  const {error} = useAuthContext()
  const [errors, setErrors] = useState({
    [RegisterFormKeys.Username]: "",
    [RegisterFormKeys.Email]: "",
    [RegisterFormKeys.Password]: "",
    [RegisterFormKeys.ConfirmPassword]: "",
  });

  const { values, changeHandler, onSubmit } = useForm(
    {
      [RegisterFormKeys.Username]: "",
      [RegisterFormKeys.Email]: "",
      [RegisterFormKeys.Password]: "",
      [RegisterFormKeys.ConfirmPassword]: "",
    },
    () => {
      onRegisterSubmit(values);
    }
  );
  const isValidUsername = username => {
    // Basic username validation, you might want to use a library or more complex validation logic
    return /^[a-zA-Z0-9_]+$/.test(username);
  };
  const isValidEmail = email => {
    // Basic email validation, you might want to use a library or more complex validation logic
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPassword = password => {
    // Basic password validation, you might want to use a library or more complex validation logic
    return password.length >= 6;
  };

  const isValidConfirmationPassword = (password, confirmPassword) => {
    return password === confirmPassword;
  };

  const hasErrors = () => {
    return Object.values(errors).some(error => error !== "");
  };

  const changeHandlerWithValidation = event => {
    const { name, value } = event.target;
  
    let error = "";
    if (name === RegisterFormKeys.Username && value.trim() === "") {
      error = "Username is required";
    } else if (name === RegisterFormKeys.Username && !isValidUsername(value)) {
      error = "Username can only contain letters, numbers, and underscores";
    } else if (name === RegisterFormKeys.Email && !isValidEmail(value)) {
      error = "Invalid email address";
    } else if (name === RegisterFormKeys.Password && !isValidPassword(value)) {
      error = "Password must be at least 6 characters long";
    } else if (
      name === RegisterFormKeys.ConfirmPassword &&
      !isValidConfirmationPassword(values[RegisterFormKeys.Password], value)
    ) {
      error = "Passwords do not match";
    }
  
    setErrors(prevErrors => ({ ...prevErrors, [name]: error }));
    changeHandler(event);
  };
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
        <div className="error-message">{errors[RegisterFormKeys.Username]}</div>

        <label>Email</label>
        <input
          className="registerInput"
          type="email"
          id="email"
          placeholder="Enter email ..."
          autoComplete="username"
          name={RegisterFormKeys.Email}
          value={values[RegisterFormKeys.Email]}
          onChange={changeHandlerWithValidation}
        />
        <div className="error-message">{errors[RegisterFormKeys.Email]}</div>

        <label>Password:</label>
        <input
          className="registerInput"
          type="password"
          id="password"
          autoComplete="current-password"
          placeholder="Enter password ..."
          name={RegisterFormKeys.Password}
          value={values[RegisterFormKeys.Password]}
          onChange={changeHandlerWithValidation}
        />
        <div className="error-message">{errors[RegisterFormKeys.Password]}</div>

        <label>Confirm Password:</label>
        <input
          className="registerInput"
          type="password"
          id="confirmPassword"
          autoComplete="current-password"
          placeholder="Enter password ..."
          name={RegisterFormKeys.ConfirmPassword}
          value={values[RegisterFormKeys.ConfirmPassword]}
          onChange={changeHandlerWithValidation}
        />
        <div className="error-message">{errors[RegisterFormKeys.ConfirmPassword]}</div>
        {error && <div className="error-message">{error}</div>} {/* Display error in the UI */}

<button className="registerButton" disabled={hasErrors()}>
  Register
</button>
</form>

<p className="field">
<span className="registerLoginButton">
  Already have a profile? You can <Link to="/login"> Login </Link> here.
</span>
</p>
</div>
);
}



