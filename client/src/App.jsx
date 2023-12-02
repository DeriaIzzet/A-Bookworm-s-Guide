import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import "./App.css";

import * as reviewService from "./services/reviewService";
import { AuthContext } from "./contexts/AuthContext";

import Footer from "./components/footer/Footer";
import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Write from "./pages/write/Write";
import Catalog from "./pages/catalog/Catalog";
import Details from "./components/details/Details";
import NotFound from "./components/NotFound/NotFound";

function App() {
  const navigate = useNavigate();
  const [reviews, setReviews] = useState([]);
  const [auth,setAuth] = useState({})

  
  useEffect(() => {
    reviewService.getAll().then((result) => {
      setReviews(result);
    });
  }, []);

  const onCreateReviewSubmit = async (data) => {
    const newReview = await reviewService.create(data);
    setReviews((state) => [...state, newReview]);
    navigate("/catalog");
  };

  const onLoginSubmit = async (data) => {
    
    console.log(data)
  
  };

  return (
    <AuthContext.Provider value={{onLoginSubmit}} >
    <div id="book">
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
        <Route path="/settings" element={<Settings />} />
        <Route path="/catalog/:reviewId" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
    </AuthContext.Provider>
  );
}

export default App;
