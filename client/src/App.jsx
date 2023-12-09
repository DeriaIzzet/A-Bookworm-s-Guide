import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import "./App.css";

import { reviewServiceMaker } from "./services/reviewService";
import { AuthProvider } from "./contexts/AuthContext";
import Footer from "./components/footer/Footer";
import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import Write from "./pages/write/Write";
import Catalog from "./pages/catalog/Catalog";
import Details from "./components/details/Details";
import NotFound from "./pages/NotFound/NotFound";
import Logout from "./pages/logout/Logout"
import Edit from "./components/edit/Edit";
import MyList from "./pages/myList/MyList";

function App() {
  const navigate = useNavigate();
  const [reviews, setReviews] = useState([]);
  
  const reviewService = reviewServiceMaker();

  useEffect(() => {
    reviewService.getAll()
    .then((result) => {
      setReviews(result);
    });
  }, []);

  const onCreateReviewSubmit = async (data) => {
    const newReview = await reviewService.create(data);
    setReviews(state => [...state, newReview]);
    navigate("/catalog");
  };


  const OnEditSubmit = async (values) => {
    const result = await reviewService.edit(values._id, values);

    setReviews((state) => state.map((x) => (x._id === values._id ? result : x)));

    navigate(`/catalog/${values._id}`);
  };
  
  return (
    <AuthProvider>
      <div>
        <Topbar />
        <Routes>
          <Route path="/" element={<Homepage reviews={reviews} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/catalog" element={<Catalog reviews={reviews} />} />
          <Route
            path="/create-review"
            element={<Write onCreateReviewSubmit={onCreateReviewSubmit} />}
          />
           <Route path="/logout" element={<Logout/>} />
          <Route path="/settings" element={<MyList reviews={reviews}/>} />
          <Route path="/catalog/:reviewId" element={<Details />} />
          <Route path="/catalog/:reviewId/edit" element={<Edit  OnEditSubmit={OnEditSubmit}/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </AuthProvider>
  );
}
export default App;
