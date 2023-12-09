import "./NotFound.css";
import notFound from "../../../public/opps not fond.jpg"

export default function NotFound() {
  return (
    
      <div className="not-found">
        <img
        className="not-foundImg"
        src={notFound}   
      />
        <a href="/"  className="not-found-button">Return to Home Page</a>  
      
        </div>
        
  );
}