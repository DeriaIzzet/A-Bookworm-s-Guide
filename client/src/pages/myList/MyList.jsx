
import SinglePost from "../../components/singlePost/SinglePost";
import { useAuthContext } from "../../contexts/AuthContext";


export default function MyList({
  reviews,
}) {
  const { userId } = useAuthContext();

  // Filter reviews that match the current user
  const userReviews = reviews.filter(x => x._ownerId === userId);

  return (
    <section className="catalog-section">
      <div className="header">
      
      </div>
      <div className="catalog-div">
        {/* Render SinglePost for each user's review */}
        {userReviews.length > 0 ? (
          userReviews.map(x => <SinglePost key={x._id} {...x} />)
        ) : (
          <p className="settingsNo">No reviews yet</p>
        )}
      </div>
    </section>
  );
}