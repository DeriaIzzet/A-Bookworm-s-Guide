import { useState } from "react";
import "./Edit.css";


export default function Edit() {
    const[values,setValues] = useState ({
        title,
    ,)
  return (
    <div className="edit-body">
      <h1 className="header-h1">Edit Review</h1>
      <div className="edit-div">
        <form id="edit" method="post" onSubmit={onSubmit}>
          <div className="edit">
            <div>
              <label htmlFor="title">Book Title:</label>
              <input
                type="text"
                id="title"
                name="title"
                defaultValue=""
              />
            </div>
            <div>
              <label htmlFor="author">Book Author:</label>
              <input
                type="text"
                id="author"
                name="author"
                defaultValue=""
              />
            </div>
            <div>
              <label htmlFor="review">Book Review:</label>
              <textarea
                name="review"
                id="review"
                defaultValue=""
              ></textarea>
            </div>
            <div>
              <label htmlFor="genre">Book Genre:</label>
              <input
               
                type="text"
                id="genre"
                name="genre"
                defaultValue=""
              />
            </div>
            <div>
              <label htmlFor="image">Book Image URL:</label>
              <input
                type="url"
                id="imageUrl"
                name="imageUrl"
                defaultValue=""
              />
            </div>
            <div>
              <label htmlFor="stars">Rating:</label>
              <input
                type="number"
                id="rating"
                name="rating"
                min="0"
                max="5"
                defaultValue=""
              />
            </div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
