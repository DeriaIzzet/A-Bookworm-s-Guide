import { useEffect, useState, useReducer } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import { reviewServiceMaker } from "../../services/reviewService";
import { useService } from "../../hooks/useService";
import { useAuthContext } from "../../contexts/AuthContext";
import * as commentService from "../../services/commentService";

import { AddComment } from "./addComment/AddComment";
import { reviewReducer } from "../../reducers/reviewReducer";
import "./Details.css";

export default function Details() {
  const { reviewId } = useParams();
  const { userId, isAuthenticated, userUsername } = useAuthContext();
  const [review, dispatch] = useReducer(reviewReducer, {});
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const reviewService = useService(reviewServiceMaker);
  const navigate = useNavigate();

  useEffect(() => {
    Promise.all([
      reviewService.getOne(reviewId),
      commentService.getAll(reviewId),
    ]).then(([reviewData, comments]) => {
      const reviewState = {
        ...reviewData,
        comments,
      };

      dispatch({ type: "REVIEW_FETCH", payload: reviewState });
    });
  }, [reviewId]);

  const onCommentSubmit = async (values) => {
    const response = await commentService.create(reviewId, values.comment);

    dispatch({
      type: "COMMENT_ADD",
      payload: response,
      userUsername,
    });
  };

  const onDelete = async () => {
    await reviewService.delete(review._id);

    navigate("/");
    // Close the modal after deletion
    setShowDeleteModal(false);
  };

  return (
    <section className="review-detail-container">
      <h6> Book Details </h6>
      <div className="reviewDetailsDiv">
        <div className="details-item">
          <p className="details-content" id="title">
            {review.bookTitle}
          </p>
          <div className="details-item">
            <img
              className="details-content"
              id="imageUrl"
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
        {review._ownerId !== undefined && review._ownerId === userId && (
          <div className="buttons">
            <button
              onClick={() => setShowDeleteModal(true)}
              className="delete-btn"
            >
              Delete
            </button>

            <Link to={`/catalog/${review._id}/edit`} className="edit-btn">
              Edit
            </Link>
          </div>
        )}

        <div className="details-comments">
          <h2>Comments:</h2>
          <ul className="commentUl">
            {review.comments &&
              review.comments.map((x) => (
                <li key={x._id} className="comment">
                  <p>
                    {x.author.username}: {x.comment}
                  </p>
                </li>
              ))}
          </ul>

          {!review.comments?.length && (
            <p className="no-comment">No comments.</p>
          )}
        </div>

        {isAuthenticated && <AddComment onCommentSubmit={onCommentSubmit} />}

        {/* Delete Modal */}
        {showDeleteModal && (
          <div className="delete-modal">
            <p>Are you sure you want to delete this review?</p>
            <button onClick={onDelete} className="confirm-delete-btn">
              Yes, delete
            </button>
            <button
              onClick={() => setShowDeleteModal(false)}
              className="cancel-delete-btn"
            >
              Cancel
            </button>
          </div>
        )}
      </div>
      
    </section>
  );
}
