import "./Write.css";

export default function Write() {
  return (
    <div>
      <h1>Create Page</h1>
      <form>
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
            <option value="Non-fiction">Non-fiction</option>
            <option value="Mystery">Mystery</option>
            <option value="Science Fiction">Science Fiction</option>
            {/* Add more genre options as needed */}
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
  );
};
