import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './components/Home/Home';
import './App.css';
import UserSignUp from "./components/Signup/User_signup";
import Admin_signUp from "./components/Signup/Admin_signup";
import UserLogin from "./components/Login/User_login";
import AdminLogin from "./components/Login/Admin_login";


function App() {
  return (
    <BrowserRouter>
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/signup' element={<UserSignUp/>}/>
         <Route path='/login' element={<UserLogin/>}/>
         <Route path='/admin/signup' element={<Admin_signUp/>}/>
         <Route path='/admin/login' element={<AdminLogin/>}/>
       </Routes>
    </BrowserRouter>
  );
}


export default App;
