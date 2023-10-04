import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Leftbar from './Components/Leftbar';
import Navbar from './Components/Navbar';
import Layout from './Components/Layout';
import Signup from'./Pages/Signup';
import Dashboard from './Pages/Dashboard';
import Profile from './Pages/Profile';
import Travel from './Pages/Travel';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/profile" element={<Profile/>}/>
    <Route path="/travel" element={<Travel/>}/>
    <Route path="/home" element={<Home/>}/>
    </Routes>
    </BrowserRouter>


    </div>
  );
}

export default App;
