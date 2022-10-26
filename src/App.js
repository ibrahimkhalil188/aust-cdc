import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import NotFound from "./Components/NotFound";
import CaptureCollection from "./Pages/CaptureCollection";
import ClubStructure from "./Pages/ClubStructure";
import Contact from "./Pages/Contact";
import GoverningPanel from "./Pages/GoverningPanel";
import Home from "./Pages/Home";

function App() {
  return (
    <div>
      <div className="h-8 w-full bg-gradient-to-r from-primary to-blue-900">
        {" "}
      </div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route
          path="/governingPanel"
          element={<GoverningPanel></GoverningPanel>}
        ></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route
          path="/clubStructure"
          element={<ClubStructure></ClubStructure>}
        ></Route>
        <Route
          path="/captureCollection"
          element={<CaptureCollection></CaptureCollection>}
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
