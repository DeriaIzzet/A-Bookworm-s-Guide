import './Catalog.css'
import pictureHeader from "../../../public/cool-writing.jpeg"
import SinglePost from "../../components/singlePost/SinglePost";
import { useReviewContext } from '../../contexts/ReviewContext';


export default function Catalog() {
  const {reviews} = useReviewContext()
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
      <div className="no-reviews-div">
      {reviews.length === 0 && ( <h6 className="no-reviews">No Reviews Yet</h6> ) }
      </div>
      
    </section>
  );
}
