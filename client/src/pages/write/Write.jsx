import "./Write.css";
import { useForm } from "../../hooks/useForm";
import { useReviewContext } from "../../contexts/ReviewContext";


export default function Write() {
  const { onCreateReviewSubmit } = useReviewContext()
  const { values, changeHandler, onSubmit } = useForm(
    {
      bookTitle: "",
      imageUrl: "",
      author: "",
      bookGenre: "",
      bookReview: "",
      bookRating: "",
    },
    onCreateReviewSubmit
  );

  return (
    <div className="write-body">
      <h2 className="header-h1">Create Review</h2>
      <div className="writePage-div">
        <form className="createWrite" method="post" onSubmit={onSubmit}>
          <div className="write">
            <div>
              <label htmlFor="title">Book Title:</label>
              <input
                value={values.bookTitle}
                onChange={changeHandler}
                type="text"
                id="bookTitle"
                name="bookTitle"
                placeholder="Enter book title..."
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
                placeholder="Enter book author..."
              />
            </div>
            <div className="writeReview">
              <label htmlFor="review">Book Review:</label>
              <textarea
                value={values.bookReview}
                onChange={changeHandler}
                name="bookReview"
                id="bookReview"
                placeholder="Enter review..."
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
                placeholder="Enter book genre..."
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
                placeholder="Upload photo"
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
            <button className="btnSubmit" type="submit">Submit</button>
          </div>
        </form>
      </div>
     
    </div>
  );
}
