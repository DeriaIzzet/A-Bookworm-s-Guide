import "./Login.css";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";

export default function Login() {
  const {onLoginSubmit} = useContext(AuthContext)
  const {} = useForm({})

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm"  onSubmit={onLoginSubmit} >
        <label>Email</label>
        <input className="loginInput" type="text" placeholder="Enter your email..." />
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="Enter your password..." />
        <button className="loginButton">Login</button>
      </form>
        <button className="loginRegisterButton">Register</button>
    </div>
  );
}