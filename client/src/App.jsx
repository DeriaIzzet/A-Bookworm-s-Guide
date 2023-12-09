
import {
  BrowserRouter as Router,
  Route,
  Routes,
 
} from "react-router-dom";
import "./App.css";


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
import Logout from "./pages/logout/Logout";
import Edit from "./components/edit/Edit";
import MyList from "./pages/myList/MyList";
import RouteGuard from "./components/guard/RouteGuard";
import { ReviewProvider } from "./contexts/ReviewContext";

function App() {

  return (
    <AuthProvider>
      <ReviewProvider>
      <div>
        <Topbar />
        <Routes>
          <Route path="/" element={<Homepage  />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/catalog" element={<Catalog  />} />
          <Route element={<RouteGuard />}>
          <Route path="/logout" element={<Logout />} />
            <Route
              path="/create-review"
              element={<Write />}
            />
            <Route path="/catalog/:reviewId" element={<Details />} />
            <Route path="/settings" element={<MyList  />} />
            <Route
              path="/catalog/:reviewId/edit"
              element={<Edit />}
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
      </ReviewProvider>
      
    </AuthProvider>
  );
}
export default App;
