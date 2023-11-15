import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'

import * as reviewService from "./services/reviewService"

import Footer from "./components/footer/Footer";
import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Write from "./pages/write/Write";
import Catalog from './components/catalog/Catalog';
import Single from './pages/single/Single';


function App() {
  const [reviews, setReviews] = useState([])
  useEffect(() => {
    reviewService.getAll()
      .then(result => {
        setReviews(result)
      })
  }, [])

  const onCreateReviewSubmit = (data) =>{
    
  }
  return (
    <>
      <Router>
        <Topbar />
        <Routes>
          <Route path="/" element={<Homepage reviews={reviews} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/review" element={< Single />} />
          <Route path="/catalog" element={<Catalog reviews={reviews} />} />
          <Route path="/create-review" element={<Write />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;