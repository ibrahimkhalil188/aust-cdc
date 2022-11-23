import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import Footer from "./Components/Shared/Footer";
import Navbar from "./Components/Shared/Navbar";
import NotFound from "./Components/Shared/NotFound";
import SubNavbar from "./Components/Shared/SubNavbar";
import About from "./Pages/About";
import AdvisorsPanel from "./Pages/AdvisorPanel";
import CaptureCollection from "./Pages/CaptureCollection";
import ClubStructure from "./Pages/ClubStructure";
import Contact from "./Pages/Contact";
import Event from "./Pages/Event";
import Executive from "./Pages/Executive";
import Home from "./Pages/Home";
import LogIn from "./Pages/LogIn";
import Register from "./Pages/Register";
function App() {
  return (
    <div>
      <SubNavbar></SubNavbar>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/executive" element={<Executive></Executive>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route
          path="/clubStructure"
          element={<ClubStructure></ClubStructure>}
        ></Route>
        <Route path="/event" element={<Event></Event>}></Route>
        <Route
          path="/captureCollection"
          element={<CaptureCollection></CaptureCollection>}
        ></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<LogIn></LogIn>}></Route>
        <Route path="/advisorPanel" element={<AdvisorsPanel></AdvisorsPanel>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
