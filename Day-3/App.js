import {  Routes, Route, BrowserRouter} from "react-router-dom";


import './App.css';
import RegistrationPage from './form';
import LoginPage from "./Login";
import Home from "./home";

function App() {
  return (
    <div className="App">
     {/* <RegistrationPage /> */}
     {/* <Home /> */}
     {/* { <LoginPage /> */}
    <BrowserRouter> 
     <Routes>
      <Route path="/" element={<RegistrationPage/> }/>
      <Route path="Login" element={<LoginPage/> }/>
      <Route path="Home" element={<Home/> }/>
      </Routes>
      </BrowserRouter> 
      {/* } */}
    </div>

    
  );
}

export default App;
