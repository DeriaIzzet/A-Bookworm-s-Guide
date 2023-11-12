import "./Header.css";
import videoHeader from "../../../public/pexels_videos_2268807 (1080p).mp4"

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Living The Reader Life</span>
        <span className="headerTitleLg">A Bookworm’s Guide</span>
      </div>
      <video
        className="headerImg"
        src={videoHeader}
       autoPlay loop
      />
    </div>
  );
}