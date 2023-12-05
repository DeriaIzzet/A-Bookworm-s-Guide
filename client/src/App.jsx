import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import "./App.css";

import { reviewServiceMaker } from "./services/reviewService";
 import { authServiceMaker } from "./services/authService";
import { AuthContext } from "./contexts/AuthContext";
import { useService } from "./hooks/useService";

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
import Logout from "./pages/logout/Logout"

function App() {
  const navigate = useNavigate();
  const [reviews, setReviews] = useState([]);
  const [auth, setAuth] = useState({});
  const reviewService = reviewServiceMaker(auth.accesToken);
   const authService = authServiceMaker(auth.accesToken);

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
    try {
      const result = await authService.login(data);

      setAuth(result);

      navigate("/");
    } catch (error) {
      console.log("There is a problem");
    }
  };

  const onRegisterSubmit = async (values) => {
    const { confirmPassword, ...registerData } = values;
    if (confirmPassword !== registerData.password) {
        return;
    }

    try {
        const result = await authService.register(registerData);

        setAuth(result);

        navigate('/');
    } catch (error) {
        console.log('There is a problem');
    }
};

  const onLogout = async () => {
    // await authService.logout();

    setAuth({});
  };

  const onGameEditSubmit = async (values) => {
    const result = await gameService.edit(values._id, values);

    setGames((state) => state.map((x) => (x._id === values._id ? result : x)));

    navigate(`/catalog/${values._id}`);
  };
  const contextVal = {
    onLoginSubmit,
    onRegisterSubmit,
    onLogout,
    userId: auth._id,
    token: auth.accessToken,
    userEmail: auth.email,
    userUsername: auth.username,
    isAuthenticated: !!auth.accessToken,
  };
  return (
    <AuthContext.Provider value={contextVal}>
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
           <Route path="/logout" element={<Logout/>} />
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
