import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import spinner from "./Assets/White.mp4";
import UpdatePassword from "./Components/Login/UpdatePassword";
import Footer from "./Components/Shared/Footer";
import Navbar from "./Components/Shared/Navbar";
import NotFound from "./Components/Shared/NotFound";
import SubNavbar from "./Components/Shared/SubNavbar";
import About from "./Pages/About";
import Admin from "./Pages/Admin";
import AdvisorsPanel from "./Pages/AdvisorPanel";
import CaptureCollection from "./Pages/CaptureCollection";
import ClubStructure from "./Pages/ClubStructure";
import Contact from "./Pages/Contact";
import Event from "./Pages/Event";
import Fall21ExecutiveBody from "./Pages/Fall21ExicutiveBody";
import Fall21SubExecutiveBody from "./Pages/Fall21SubExecutiveBody";
import Home from "./Pages/Home";
import LogIn from "./Pages/LogIn";
import Register from "./Pages/Register";
import Spring21ExecutiveBody from "./Pages/Spring21ExecutiveBody";
import Spring21SubExecutiveBody from "./Pages/Spring21SubExecutiveBody";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <video className="w-[100%] h-[100%]" src={spinner} autoPlay loop muted/>
      ) : (
        <div>
          <SubNavbar></SubNavbar>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route
              path="/Fall21Executive"
              element={<Fall21ExecutiveBody></Fall21ExecutiveBody>}
            ></Route>
            <Route
              path="/Fall21SubExecutive"
              element={<Fall21SubExecutiveBody></Fall21SubExecutiveBody>}
            ></Route>
            <Route
              path="/Spring21Executive"
              element={<Spring21ExecutiveBody></Spring21ExecutiveBody>}
            ></Route>
            <Route
              path="/Spring21SubExecutive"
              element={<Spring21SubExecutiveBody></Spring21SubExecutiveBody>}
            ></Route>
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
            <Route
              path="/advisorPanel"
              element={<AdvisorsPanel></AdvisorsPanel>}
            ></Route>
            <Route path="/admin" element={<Admin></Admin>}></Route>
            <Route path="/updatePassword" element={<UpdatePassword></UpdatePassword>}></Route>
            <Route path="*" element={<NotFound></NotFound>}></Route>
          </Routes>
          <Footer></Footer>
          <ToastContainer />
        </div>
      )}
    </div>
  );
}

export default App;
