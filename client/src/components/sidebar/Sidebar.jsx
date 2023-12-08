import { Link } from "react-router-dom";
import "./Sidebar.css";
import imageSmall from "../../../public/books.jpeg";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT US</span>
        <img src={imageSmall} alt="" />
        <p>
          Welcome to our Books Forum, a vibrant community of avid readers and
          literary enthusiasts! At our virtual gathering place, we celebrate the
          magical world of literature and engage in passionate discussions about
          the written word. Whether you're an ardent bibliophile, a casual
          reader, or someone looking for your next literary adventure, this
          forum is your haven. Share your favorite books, discover hidden gems,
          and connect with fellow bookworms who share your passion.
        </p>

      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">GENRES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Action</li>
          <li className="sidebarListItem">Horror</li>
          <li className="sidebarListItem">Romance</li>
          <li className="sidebarListItem">Fantasy</li>
          <li className="sidebarListItem">Fiction</li>
          <li className="sidebarListItem">Dystopian</li>
            <li className="sidebarListItem">Mystery</li>

          <li className="sidebarListItem">Travel</li>
          <li className="sidebarListItem">LGBTQ+</li>
          <li className="sidebarListItem">Short Story</li>
          <li className="sidebarListItem">Children’s</li>
          <li className="sidebarListItem">Biography</li>
          <li className="sidebarListItem">Self-help</li>
          <li className="sidebarListItem">True Crime</li>
          <li className="sidebarListItem">Humor</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}
