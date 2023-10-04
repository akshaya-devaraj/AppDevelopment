import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Leftbar from './Components/Leftbar';
function App() {
  return (
    <div className="App">
    <Leftbar/>
    </div>
  );
}

export default App;
