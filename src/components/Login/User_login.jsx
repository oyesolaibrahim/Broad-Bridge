import { useNavigate } from "react-router-dom";
//import axios from "axios";
import { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const UserLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    /*    let Navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [signup, setSignup] = useState(false);
    const [error, setError] = useState(null)
    
      const Signup = (e) => {
      e.preventDefault();
      
      const fetching =  {
        method: 'POST',
        url: 'http://localhost:5000/api/user/signup',
        data: {
          firstName,
          lastName,
          email,
          password
        }
      }
      axios(fetching)
      .then((result) => {
         console.log(result);
         setSignup(true);
         Navigate('/user/login')
        })
      . catch ((error) => {
        console.log('Error during signup', error);
        setError(error.response.data.message)
      }) */
    
        
    
    return (
        <>
            <Header/>
            <main className="bg-gray-700">
                <h3 className="error"></h3>
                
                <div className="pt-44 flex justify-center min-h-screen">
                    <div className="bg-yellow-100 md:min-w-3/5 sm:min-w-4/5 flex m-auto rounded-2xl pb-10 px-10">
                        <form className="">
                            <div className="mb-10 flex justify-center pt-10">
                                <label htmlFor="email">
                                </label>
                                <input className="rounded-lg w-full py-4 px-10" type="email" placeholder="Email Address"/>
                            </div>
                            <div className="mb-10 flex justify">
                                <label htmlFor="password">
                                </label>
                                <input className="rounded-lg w-full py-4 px-10" type="password" placeholder="Password"/>
                            </div>
                            <button type="SUBMIT" className="cursor-pointer font-bold rounded-lg bg-red-800 py-3 px-5 text-white">Login</button> 
                        </form>
                    </div>
                </div>
            </main>
                
        <Footer/>
        </>
    )

}
export default UserLogin;