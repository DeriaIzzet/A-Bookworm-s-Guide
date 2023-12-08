import { useParams ,useNavigate,Link} from "react-router-dom";
import { useEffect, useState ,useContext} from "react";
import { useService } from '../../hooks/useService'

import { AuthContext } from "../../contexts/AuthContext";
import{reviewServiceMaker} from "../../services/reviewService";
import "./Details.css"


export default function Details() {
  const {userId} = useContext(AuthContext)
  const [username,setUsername] = useState("")
  const [comment,setComment] = useState("")
  const { reviewId } = useParams();
  const [review, setReview] = useState({});
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const reviewService = useService(reviewServiceMaker)
const navigate = useNavigate()
  useEffect(() => {
    reviewService.getOne(reviewId).then((result) => {
      setReview(result);
    });
  }, [reviewId])

  const onDelete = async () => {
    await reviewService.delete(review._id)
    
    navigate("/")
    // Close the modal after deletion
     setShowDeleteModal(false);
  };

  return (
    <div className="review-detail-container">
      <h6> Book Details </h6>
      <div className="reviewDetailsDiv">
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
        {review._ownerId === userId && (
          <div className="buttons">
            <button onClick={() => setShowDeleteModal(true)} className="delete-btn">
              Delete
            </button>

            <Link to={`/catalog/${review._id}/edit`} className="edit-btn">
              Edit
            </Link>
          </div>
        )}

        {/* Delete Modal */}
        {showDeleteModal && (
          <div className="delete-modal">
            <p>Are you sure you want to delete this review?</p>
            <button onClick={onDelete} className="confirm-delete-btn">
              Yes, delete
            </button>
            <button onClick={() => setShowDeleteModal(false)} className="cancel-delete-btn">
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
