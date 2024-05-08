import { Link } from "react-router-dom";
import logo from "../../assets/shared/logo.svg";
import UserSignUp from "../Signup/User_signup";
import { useState } from "react";


const Header = () => {


    const [menuOpen, setMenuOpen] = useState(false);
    const [barClose, setBarClose] = useState(false);
    const [timesOpen, setTimesOpen] = useState(false);
     
    const barClick = () => {
        setMenuOpen(true)
        setTimesOpen(true);
        setBarClose(true);
    }
    const timesClick = () => {
        setMenuOpen(false); 
        setTimesOpen(false) 
        setBarClose(false)
    }

    return (
        <header className="bg-blue-900 py-10 w-screen md:px-5 fixed text-white z-40">
        <div className="">
            <div className="flex md:justify-center md:space-x-20 md:items-center sm:ml-5 sm:justify-between sm:items-center">
            <div className="flex items-center">
                <img src={logo} alt="logo-img"/>
                <h1 className="md:font-extrabold text-3xl overflow-hidden sm:w-36 sm:text-2xl">Broad Bridge</h1>
            </div>
            <div className="">
                 <div className="md:flex md:flex-row md:right-10 md:space-x-3 md:items-center backdrop md:space-y-0 md:pl-0 md:w-full md:h-1/5 md:static sm:items-start sm:space-y-8 sm:pl-5 sm:fixed sm:-right-3/4 sm:top-0 sm:h-screen sm:w-3/5 sm:flex-col sm:transition-all sm:duration-1000 sm:z-20" id={`${menuOpen && "slide"}`}>
                 {/*sm:flex-col sm:space-y-3 sm:justify-start sm:items-start */}
                     <div className="md:flex md:mt-0 md:flex-row md:items-center md:space-x-1 sm:mt-24">
                         <Link to="/">
                             <h3 className="cursor-pointer font-bold hover: rounded-lg py-5 px-2">Home</h3>
                         </Link>
                         <Link to="#">
                             <h3 className="cursor-pointer font-bold hover: rounded-lg py-5 px-2">About Us</h3>
                         </Link>
                         <Link to="#">
                             <h3 className="cursor-pointer font-bold hover: rounded-lg py-5 px-2">Services</h3>
                         </Link>
                         <Link to="#">
                             <h3 className="cursor-pointer font-bold hover: rounded-lg py-5 px-2 hover:text-white">Testimonials</h3>
                         </Link>
                         <Link to="#">
                             <h3 className="cursor-pointer font-bold hover: rounded-lg py-5 px-2 hover:text-white">Services</h3>
                         </Link>
                         <Link to="#">
                             <h3 className="cursor-pointer font-bold hover: rounded-lg py-5 px-2 hover:text-white">Contact Us</h3>
                         </Link>
                     </div>
                     <div className="flex  md:space-x-5 sm:space-x-0 items-center">
                         <Link to="/signup">
                             <h3 className="cursor-pointer font-bold hover: rounded-lg hover:bg-red-800 py-3 px-5 hover:text-white">Signup</h3>
                         </Link>
                         <Link to="/login">
                             <h3 className="cursor-pointer font-bold rounded-lg bg-red-800 py-3 px-5 text-white">Login</h3>
                         </Link>
                     </div>
                 </div>
            </div>
            <div className="flex z-50">
                <i id={barClose && "close"} className="fa fa-bars fa-2x  md:hidden sm:absolute sm:right-10 cursor-pointer" aria-hidden="true" onClick={barClick}></i>
                <i id={timesOpen && "open"} className="fa fa-times fa-2x hidden cursor-pointer sm:absolute sm:right-10" aria-hidden="true" onClick={timesClick}></i>
            </div>
            
            </div>
        </div>
    </header>
)
}

export default Header;