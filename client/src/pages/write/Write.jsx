import "./Write.css";
import { useState } from "react";

export default function Write({
  onCreateReviewSubmit,
}) {
  const [values,setValues] = useState({
    bookTitle: "",
    imageUrl: "",
    author: "",
    bookGenre:"",
    bookReview: "",
    bookRating : "",
  })

  const onChangeHandler = (e) => {
    setValues(state => ({...state, [e.target.name]: e.target.value}))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    onCreateReviewSubmit(values)
    console.log(values)
  }
  
  return (
    <div className="write-body">
      <h1 className="header-h1">Create Review</h1>
      <div className="writePage-div">
      <form id="create" onSubmit={onSubmit}>
        <div className="write">
        <div>
          <label htmlFor="title">Book Title:</label>
          <input value={values.bookTitle} onChange={onChangeHandler} type="text" id="bookTitle" name="bookTitle" placeholder="Enter book title..."/>
        </div>
        <div>
          <label htmlFor="author">Book Author:</label>
          <input value={values.author} onChange={onChangeHandler} type="text" id="author" name="author" placeholder="Enter book author..."/>
        </div>
        <div>
          <label htmlFor="review">Book Review:</label>
          <textarea  value={values.bookReview} onChange={onChangeHandler} name="bookReview" id="bookReview" placeholder="Enter review..."></textarea>
        </div>
        <div>
          <label htmlFor="genre">Book Genre:</label>
          <input value={values.bookGenre} onChange={onChangeHandler} type="text" id="bookGenre" name="bookGenre" placeholder="Enter book genre..."/>
        </div>
        <div>
        <label htmlFor="image">Book Image URL:</label>
        <input value={values.imageUrl} onChange={onChangeHandler} type="url" id="imageUrl" name="imageUrl"  placeholder="Upload photo"/>
      </div>
        <div>
          <label htmlFor="stars">Rating:</label>
          <input value={values.bookRating} onChange={onChangeHandler} type="number" id="bookRating" name="bookRating" min="0" max="5" />
        </div>
        <button type="submit">Submit</button>
        </div>
      </form>
      </div>
    </div>
  );
};
