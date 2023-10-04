import "./App.css";
import fullLogo from "./fullLogo.png";
import logo from "./logo.png";
import { CloseCircle } from "iconsax-react";
import { Monitor } from "iconsax-react";
import { Video } from "iconsax-react";
import { Microphone } from "iconsax-react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import VideoIsReadyHero from "./components/VideoIsReadyHero/VideoIsReadyHero";
import VideoPage from "./components/VideoPage/VideoPage";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route element={<Homepage/>} path="/" />
        <Route element={<VideoPage />} path="/video/:id" />
      </Routes>
    </div>
  );
}

export default App;
