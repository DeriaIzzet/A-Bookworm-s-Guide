
import "./SinglePost.css";

export default function SinglePost() {
  return (
    <div className="allReviews">
    <div className="reviews">
      <img src={reviews.img}  />
      <h4 className="title">Title</h4>
      <p className="book-review">Book Review</p>
      <h2 className="genre">genre</h2>
      <h1 className="rating">ratings</h1>
      <a href="/details" className="details-btn">Details</a>
    </div>
  </div>
  );
}