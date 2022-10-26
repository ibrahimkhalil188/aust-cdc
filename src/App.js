import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import GoverningPanel from './Pages/GoverningPanel';
import Home from './Pages/Home';

function App() {
  return (
    <div>
      
      <div className='h-8 w-full bg-gradient-to-r from-primary to-blue-900'> </div>
      <Navbar></Navbar>
      <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/governingPanel" element={<GoverningPanel></GoverningPanel>}></Route>
      </Routes>
    </div>
  );
}

export default App;
