import { Link } from "react-router-dom";
import "./Topbar.css";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function Topbar() {
  const { isAuthenticated, userUsername } = useContext(AuthContext);

  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <div className="noUser">
        <Link to="/">HOME</Link>
        <Link to="/catalog">ALL REVIEWS</Link>
        </div>
        {isAuthenticated && (
          <div className="topList">
            <Link to="/create-review">CREATE REVIEW</Link>
            <Link to="/logout">LOGOUT</Link>

            <Link className="link" to="/settings">
              <div className="profile">
                <img
                  className="topImg"
                  src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                  />
                  <span>{userUsername}</span>
                <p>My book list</p>
                </div>
            </Link>
          </div>
        )}

        {!isAuthenticated && (
         
            <div className="loginRegister">
            <Link className="link" to="/login">
              LOGIN
            </Link>
            <Link className="link" to="/register">
              REGISTER
            </Link>

            </div>

        )}
      </div>
    </div>
  );
}
