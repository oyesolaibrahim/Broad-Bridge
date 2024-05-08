import { useEffect, useRef, useState } from "react";

const FourthSection = () => {
const [visible, setVisible] = useState(false);


useEffect (() => {
    const timer = setTimeout(() => {
        setVisible(true)
    }, 4000);

return () => clearTimeout(timer);
}, []);

const element = (e) => {
    console.log(e);
}
    return (
        <>  
            <section className={`flex justify-end md:right-12 sm:right-3 fixed md:bottom-32 sm:bottom-8 items-center space-x-4 ${visible ? "opacity-100 animate__animated animate__bounce" : "opacity-0"}`}>
                <h3 className="font-bold md:text-sm sm:text-xs rounded-lg bg-red-800 py-3 px-5 text-white toolpoint">Message us now</h3>
                <i className="fa fa-whatsapp fa-5x sm:text-3xl text-green-500 cursor-pointer"  aria-hidden="true"></i>
            </section>
        </>
    )
}

export default FourthSection;


