import { Link } from "react-router-dom";
import "./Post.css";

export default function Post({
  bookTitle, Author ,imageUrl,bookGenre,bookReview,bookRating
}) {
  return (
    <div className="reviewHome-container">
  
    <div className="reviewHome-details">
      
      <div className="detail-item">
      <div className="detail-item">
      <Link className="link" to="/review">
        <img className="detail-content" id="image" src={imageUrl} alt="Book Cover" />   
          </Link>
      </div>
        <p className="detail-content" id="title">{bookTitle}</p>
      </div>
      {/* <div className="detail-item">
        <label>Author:</label>
        <p className="detail-content" id="review">{Author}</p>
      </div>
      <div className="detail-item">
        <label>Review:</label>
        <p className="detail-content" id="review">{bookReview}</p>
      </div>
      <div className="detail-item">
        <label>Genre:</label>
        <p className="detail-content" id="genre">{bookGenre}</p>
      </div> */}
      <div className="detail-item">
        {/* <label>Rating:</label> */}
        <p className="detail-content" id="stars">Reader rated this, {bookRating}/5 stars!</p>
      </div>
    </div>
  </div>
  );
}