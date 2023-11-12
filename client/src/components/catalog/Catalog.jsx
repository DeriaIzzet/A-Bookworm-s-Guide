import SinglePost from "../post/SinglePost";
import "./Posts.css";

export const  Catalog =({
 reviews
}) =>{
  return (
    <section>
      <h2>All Reviews</h2>
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

    <h6 className="no-reviews">No Reviews Yet</h6>
    </section>
  );
}