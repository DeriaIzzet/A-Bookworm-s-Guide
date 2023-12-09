
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Homepage.css";
import Post from "../../components/post/Post";



export default function Homepage({
  reviews
}) {
  
  return (
    <>
      <Header />
      <div className="home">
      <div className="posts">
      {reviews.map(x => x.bookRating == 5 ? <Post key={x._id} {...x}/>: null).reverse()}
    </div>
    <div>
        <Sidebar />
    </div>
      </div>
      
    </>
  );
}