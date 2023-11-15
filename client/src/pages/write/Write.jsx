import "./Write.css";

export default function Write() {
  return (
    <div>
      <h1>Create Review</h1>
      <div className="writePage-div">
      <form id = "create">
        <div>
          <label htmlFor="title">Book Title:</label>
          <input type="text" id="title" />
        </div>
        <div>
          <label htmlFor="review">Book Review:</label>
          <textarea id="review"></textarea>
        </div>
        <div>
          <label htmlFor="genre">Book Genre:</label>
          <select id="genre">
            <option value="Fiction">Fiction</option>
            <option value="Thriller">Thriller</option>
            <option value="Mystery">Mystery</option>
            <option value="Romance">Romance</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Dystopian">Dystopian</option>
            <option value="Historical">Historical</option>
          </select>
        </div>
        <div>
        <label for="image">Book Image URL:</label>
        <input type="url" id="image"/>
      </div>
        <div>
          <label htmlFor="stars">Rating:</label>
          <input type="number" id="stars" min="0" max="5" />
        </div>
        <button type="submit">Submit</button>
      </form>
      </div>
    </div>
  );
};
