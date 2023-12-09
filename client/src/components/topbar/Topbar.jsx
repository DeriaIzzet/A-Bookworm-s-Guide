import { Link } from "react-router-dom";
import "./Topbar.css";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function Topbar() {
  const { isAuthenticated, userUsername } = useContext(AuthContext);

  return (
    <div className="top">
      <div className="topLeft">
        <a href="https://github.com/DeriaIzzet"><i className="topIcon fab fa-github-square"></i></a>
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
                  src="https://images.pexels.com/photos/762685/pexels-photo-762685.jpeg?auto=compress&cs=tinysrgb&w=600"
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
