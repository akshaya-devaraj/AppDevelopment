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
import Profile from './Pages/Reservation';
import Billing from './Pages/Billing';
import About from './Pages/About';
import ContactUs from './Components/ContactUs';
import Privacy from './Components/Privacy';
import Terms from  './Components/Terms';
import Paymentsuccess from './Pages/Paymentsuccess';
import RoomDes from './Pages/RoomDes';
import FeedbackForm from './Components/FeedbackForm';
import AdminSidebar from './Components/AdminSidebar';
import AdminDashboard from './Pages/AdminDashboard';
import ReservedList from './Pages/ReservedList';
import Faq from './Components/Faq';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/profile" element={<Profile/>}/>
    <Route path="/billing" element={<Billing/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<ContactUs/>}/>
    <Route path="/privacy" element={<Privacy/>}/>
    <Route path="/terms" element={<Terms/>}/>
    <Route path="/payment" element={<Paymentsuccess/>}/>
    <Route path="/roomdes" element={<RoomDes/>}/>
    <Route path="/feedback" element={<FeedbackForm/>}/>
    <Route path="/admindash" element={<AdminDashboard/>}/>
    <Route path="/list" element={<ReservedList/>}/>
    <Route path="/faq" element={<Faq/>}/>
    </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
