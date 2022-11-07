import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/Home/About";
import Footer from "./Components/Shared/Footer";
import Navbar from "./Components/Shared/Navbar";
import NotFound from "./Components/Shared/NotFound";
import SubNavbar from "./Components/Shared/SubNavbar";
import CaptureCollection from "./Pages/CaptureCollection";
import ClubStructure from "./Pages/ClubStructure";
import Contact from "./Pages/Contact";
import Executive from "./Pages/Executive";
import Home from "./Pages/Home";

function App() {
  return (
    <div> 
      <SubNavbar></SubNavbar>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route
          path="/executive"
          element={<Executive></Executive>}
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
      <Footer></Footer>
    </div>
  );
}

export default App;
