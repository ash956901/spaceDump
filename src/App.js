import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Earth from "./pages/Earth"
import Mars from "./pages/Mars"
import Potd from "./pages/Potd"
import Patents from "./pages/Patents"
import About from "./pages/About";
import "../src/App.css"
function App() {
  return (
    <div className="bg-space overflow-x-hidden relative w-[100vw] bg-cover h-[100vh]" >

      <div className="w-full bg-burger bg-repeat-x">
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/earth" element={<Earth/>} />
        <Route path="/mars" element={<Mars/>} />
        <Route path="/potd" element={<Potd/>} />
        <Route path="/patents" element={<Patents/>} />
        <Route path="/about" element={<About/>} />
      </Routes>

    </div>
  );
}

export default App;
