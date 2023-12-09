import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Edit.css"
import { useForm } from "../../hooks/useForm";
import { useService } from "../../hooks/useService";
import { reviewServiceMaker } from "../../services/reviewService";
import { useReviewContext } from "../../contexts/ReviewContext";


export default function Edit() {
  const { OnEditSubmit } = useReviewContext()
  const { reviewId } = useParams();
  const reviewService = useService(reviewServiceMaker);
  const { values, changeHandler, onSubmit, changeValues } = useForm(
    {
      _id: "",
      bookTitle: "",
      imageUrl: "",
      author: "",
      bookGenre: "",
      bookReview: "",
      bookRating: "",
    },
    OnEditSubmit
  );

  useEffect(() => {
    reviewService.getOne(reviewId)
    .then((result) => {
      changeValues(result);
    });
  }, [reviewId]);
  return (
    <section className="editBackground">
      <h1 className="headerEdit">Edit Review</h1>
      <div className="editDiv">
        <form className="editForm" method="post" onSubmit={onSubmit}>
          <div className="edit">
            <div>
              <label htmlFor="title">Book Title:</label>
              <input
                value={values.bookTitle}
                onChange={changeHandler}
                type="text"
                id="bookTitle"
                name="bookTitle"
              />
            </div>
            <div>
              <label htmlFor="author">Book Author:</label>
              <input
                value={values.author}
                onChange={changeHandler}
                type="text"
                id="author"
                name="author"
              />
            </div>
            <div className="editReview">
              <label htmlFor="review">Book Review:</label>
              <textarea
                value={values.bookReview}
                onChange={changeHandler}
                name="bookReview"
                id="bookReview"
              ></textarea>
            </div>
            <div>
              <label htmlFor="genre">Book Genre:</label>
              <input
                value={values.bookGenre}
                onChange={changeHandler}
                type="text"
                id="bookGenre"
                name="bookGenre"
              />
            </div>
            <div>
              <label htmlFor="image">Book Image URL:</label>
              <input
                value={values.imageUrl}
                onChange={changeHandler}
                type="url"
                id="imageUrl"
                name="imageUrl"
              />
            </div>
            <div>
              <label htmlFor="stars">Rating:</label>
              <input
                value={values.bookRating}
                onChange={changeHandler}
                type="number"
                id="bookRating"
                name="bookRating"
                min="0"
                max="5"
              />
            </div>
            <button className="submitButton" type="submit">Submit</button>
          </div>
        </form>
      </div>
      
      </section>
  );
}
