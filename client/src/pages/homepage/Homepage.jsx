// import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Homepage.css";
import Post from "../../components/post/Post";



export default function Homepage({
  reviews
}) {
  //  const location = useLocation();
  //  console.log(location);
  return (
    <>
      <Header />
      <div className="home">
      <div className="posts">
      {reviews.map(x => x.bookRating == 5 ? <Post key={x._id} {...x}/>: null)}
    </div>
    <div>
        <Sidebar />
    </div>
      </div>
    </>
  );
}