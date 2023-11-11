import './App.css'
import Footer from "./components/footer/Footer";
import Posts from './components/posts/Posts';
import SinglePost from './components/singlePost/SinglePost';
import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";

import Write from "./pages/write/Write";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";

function App() {
 
  return (
    <>
    <Router>
      <Topbar />
      <Routes>
      <Route path="/" element={<Homepage />} /> 
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post"element={<SinglePost />} />
        <Route path="/create-review" element={<Write />} />
        <Route path="/settings"  element={<Settings />} />  
        <Route path="/posts"  element={<Posts />} />  
      </Routes>
    </Router>
      <Footer />
     </>
  );
}

export default App;