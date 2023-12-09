import { Link } from "react-router-dom";
import "./Post.css";

export default function Post({
  _id,bookTitle,imageUrl,bookRating
}) {
  return (
    <div className="reviewHome-container">
    <div className="reviewHome-details">
      <div className="detail-item">
      <div className="detail-item">
     
      <Link className="link" to={`/catalog/${_id}`}>
        <img className="detail-content" id="image" src={imageUrl} alt="Book Cover" />   
          </Link>
      
      </div>
        <p className="detail-content" id="title">{bookTitle}</p>
      </div>
      <div className="detail-item">
        <p className="detail-content" id="stars">Reader rated this, {bookRating}/5 stars!</p>
      </div>
    </div>
  </div>
  );
}