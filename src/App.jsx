import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import MapComponent from "./components/MapComponent";
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
import PostDetailPage from "./pages/PostDetailPage";
import UpdatePage from "./pages/UpdatePage";
import SignUpPage from "./pages/SignUpPage";
import "./firebase-config";

function App() {
  const location = useLocation(); // Get the current route using useLocation()

  // Determine if we should show the map (for example, show map on HomePage)
  const showMap = location.pathname === "/"; // You can adjust this to show map only on specific routes

  return (
    <>
      <Nav />
      <main>
        {/* Conditionally render the MapComponent */}
        {showMap && (
          <div className="map-container">
            <MapComponent />
          </div>
        )}
        <div className="content-container2">
          <Routes>
            <Route path="/create" element={<CreatePage />} />
            <Route path="/posts/:id" element={<PostDetailPage />} />
            <Route path="/posts/:id/update" element={<UpdatePage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>

          <div className="content-container">
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
