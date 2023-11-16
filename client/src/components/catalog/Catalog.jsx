import SinglePost from "../singlePost/SinglePost";
import './Catalog.css'
import pictureHeader from "../../../public/cool-writing.jpeg"


export default function Catalog({
  reviews
}) {
  return (
    <section className="catalog-section">
      <div className="header">
      <div className="headerTitles"> 
        <span className="headerTitleLg">All reviews</span>
      </div>
      <img
        className="headerImg"
        src={pictureHeader}
      />
    </div>
      <div className="catalog-div">
      {reviews.map(x => <SinglePost key={x._id} {...x} />).reverse()}
      </div>
      {reviews.length === 0 && ( <h6 className="no-reviews">No Reviews Yet</h6> ) }
    </section>
  );
}
