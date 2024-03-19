import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ExplorePage from "./pages/ExplorePage";
import LikesPage from "./pages/LikesPage";
import SliderBar from "./components/Sliderbar";

function App() {
  return (
    <div className="flex text-white">
      <SliderBar />
      <div className="max-w-5xl my-5 mx-auto transition-all duration-300 flex-1">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/likes" element={<LikesPage />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
