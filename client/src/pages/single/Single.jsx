import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlePost/SinglePost";
import "./Single.css";

export default function Single() {
  return (
    <div className="single-div">
      <SinglePost />
      <div>
        <Sidebar />
    </div>
    </div>
  );
}