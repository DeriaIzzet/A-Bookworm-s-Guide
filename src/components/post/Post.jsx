import { Link } from "react-router-dom";
import "./Post.css";

export default function Post({img}) {
  return (
    <div className="review-container">
  
    <div className="review-details">
      <div className="detail-item">
      <div className="detail-item">
        <img className="detail-content" id="image" src={img} alt="Book Cover" />
      </div>
        <p className="detail-content" id="title">Sample Book Title</p>
      </div>
      <div className="detail-item">
        <label>Review:</label>
        <p className="detail-content" id="review">This is a sample book review. It could be a detailed description of the book.</p>
      </div>
      <div className="detail-item">
        <label>Genre:</label>
        <p className="detail-content" id="genre">Fiction</p>
      </div>
      <div className="detail-item">
        <label>Rating:</label>
        <p className="detail-content" id="stars">4.5</p>
      </div>
    </div>
  </div>
  );
}