import "./SinglePost.css";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

export default function SinglePost({
  _id,
  bookTitle,
  imageUrl,
  bookGenre,
  bookRating,
}) {
  const { isAuthenticated } = useAuthContext();

  return (
    <div className="review-container">
      <div className="review-details">
        <div className="detail-item">
        
          <div className="detail-item">
            <img
              className="detail-content"
              id="image"
              src={imageUrl}
              alt="Book Cover"
            />
          </div>
        
          <p className="detail-content" id="title">
            {bookTitle}
          </p>
        </div>
        <div className="detail-item">
          <label>Genre:</label>
          <p className="detail-content" id="genre">
            {bookGenre}
          </p>
        </div>
        <div className="detail-item">
          <label>Rating:</label>
          <p className="detail-content" id="stars">
            Reader rated this, {bookRating}/5 stars!
          </p>
        </div>

        {isAuthenticated && (
          <div className="details-btn-div">
            <Link to={`/catalog/${_id}`} className="details-btn">
              Details
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
