import { useNavigate } from "react-router-dom";
//import axios from "axios";
import { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";


const Admin_signUp = () => {
    
    return (
        <>
            <Header/>
            <main className="bg-gray-700 pb-16">
                <h3 className="error"></h3>
                <div className="pt-36 text-white mb-24">
                    <h2 className="flex text-6xl justify-center">Admin Signup</h2>
                </div>
                <div>
                    <div className="bg-yellow-100 w-3/5 flex m-auto rounded-2xl pb-10 px-10">
                        <form>
                            <div className="pt-20 mb-10 flex">
                                <label htmlFor="firstname">
                                </label>
                                <input className="rounded-lg w-96 py-4 px-10 m-auto" type="text" placeholder="First Name" value=""/>
                            </div>
                            <div className="mb-10 flex justify-center">
                                <label htmlFor="lastname">
                                </label>
                                <input className="rounded-lg w-96 py-4 px-10" type="text" placeholder="Last Name" value=""/>
                            </div>
                            <div className="mb-10 flex justify-center">
                                <label htmlFor="email">
                                </label>
                                <input className="rounded-lg w-96 py-4 px-10" type="email" placeholder="Email Address" value=""/>
                            </div>
                            <div className="mb-10 flex justify-center">
                                <label htmlFor="password">
                                </label>
                                <input className="rounded-lg w-96 py-4 px-10" type="password" placeholder="Password" value=""/>
                            </div>
                            <button type="SUBMIT" className="fcursor-pointer font-bold rounded-lg bg-red-800 py-3 px-5 text-white">Signup</button> 
                        </form>
                    </div>
                </div>
            </main>
                
        <Footer/>
        </>
    )
}

export default Admin_signUp;