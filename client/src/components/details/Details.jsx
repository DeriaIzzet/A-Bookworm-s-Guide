import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import{reviewServiceMaker} from "../../services/reviewService";
import "./Details.css"
export default function Details() {
  const { reviewId } = useParams();
  const [review, setReview] = useState({});
  const reviewService = 

  useEffect(() => {
    reviewService.getOne(reviewId).then((result) => {
      setReview(result);
    });
  }, [reviewId]);

  return (
    <div className="review-detail-container">
      <h6> Book Details </h6>
      <div className="review-details-div">
        <div className="details-item">
          <p className="details-content" id="title">
            {review.bookTitle}
          </p>
          <div className="details-item">
            <img
              className="details-content"
              id="image"
              src={review.imageUrl}
              alt="Book Cover"
            />
          </div>
        </div>
        <div className="details-item">
          <label>Author:</label>
          <p className="details-content" id="review">
            {review.author}
          </p>
        </div>
        <div className="details-item">
          <label>Review:</label>
          <p className="details-content" id="review">
            {review.bookReview}
          </p>
        </div>
        <div className="details-item">
          <label>Genre:</label>
          <p className="details-content" id="genre">
            {review.bookGenre}
          </p>
        </div>
        <div className="details-item">
          <label>Rating:</label>
          <p className="details-content" id="stars">
            Reader rated this, {review.bookRating}/5 stars!
          </p>
        </div>
        <div className="buttons">
          <a href="/details" className="delete-btn">
            Delete
          </a>

          <a href="/details" className="edit-btn">
            Edit
          </a>
        </div>
      </div>
    </div>
  );
}
