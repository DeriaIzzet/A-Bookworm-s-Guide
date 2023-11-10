import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Living The Reader Life</span>
        <span className="headerTitleLg">A Bookworm’s Guide</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/983200/pexels-photo-983200.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt=""
      />
    </div>
  );
}