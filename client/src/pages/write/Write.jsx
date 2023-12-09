import "./Write.css";
import { useForm } from "../../hooks/useForm";


export default function Write({ onCreateReviewSubmit }) {
  const [errors, setErrors] = useState({
    bookTitle: "",
    imageUrl: "",
    author: "",
    bookGenre: "",
    bookReview: "",
    bookRating: "",
  });

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

  const isValidImageUrl = url => {
    return /^(ftp|http|https):\/\/[^ "]+$/.test(url);
  };

  const hasErrors = () => {
    return Object.values(errors).some(error => error !== "");
  };

  const changeHandlerWithValidation = event => {
    const { name, value } = event.target;

    let error = "";
    if (name === "imageUrl" && !isValidImageUrl(value)) {
      error = "Invalid image URL";
    }

    setErrors(prevErrors => ({ ...prevErrors, [name]: error }));
    changeHandler(event);
  };

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
              <div className="error-message">{errors.bookTitle}</div>
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
              <div className="error-message">{errors.author}</div>
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
              <div className="error-message">{errors.bookReview}</div>
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
              <div className="error-message">{errors.bookGenre}</div>
            </div>
            <div>
              <label htmlFor="image">Book Image URL:</label>
              <input
                value={values.imageUrl}
                onChange={changeHandlerWithValidation}
                type="url"
                id="imageUrl"
                name="imageUrl"
                placeholder="Upload photo"
              />
              <div className="error-message">{errors.imageUrl}</div>
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
              <div className="error-message">{errors.bookRating}</div>
            </div>
            <button className="btnSubmit" type="submit" disabled={hasErrors()}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
