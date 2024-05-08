import { useEffect, useRef, useState } from "react";
import Article from "../../Article/Article"


const FirstSection = () => {
const [visible, setVisible] = useState(false);
const rightSlide = useRef(null);

useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log('Right Element is in view');
            entry.target.classList.add("animate-slideInRight");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
  
    if (rightSlide.current) {
      observer.observe(rightSlide.current);
    }
  
    return () => {
      if (rightSlide.current) {
        observer.unobserve(rightSlide.current);
      }
    };
  }, []);
  

    return (
        <>  
          <div className="slider">
                <div className="slide absolute">
                    <div className="bg-blue-800 py-10 px-5 welcome opacity-80 rounded-lg overflow-hidden">
                        <h2 className="opacity-100 text-white">Welcome to Broad bridge - Unleashing Business Excellence
                        </h2>
                        <button className="mt-5 bg-red-800 text-white px-5 py-3 rounded-lg">Register Now</button>
                    </div>
                </div>

                <div className="slide absolute">
                    <div className="bg-blue-800 py-10 px-5 welcome opacity-80 rounded-lg overflow-hidden">
                        <h2 className="opacity-100 text-white">Join Broad Bridge Today and Unlock a World of Opportunities!</h2>
                      <button className="mt-5 bg-red-800 text-white px-5 py-3 rounded-lg">Register Now</button>
                    </div>
                </div>
                
                <div className="slide absolute">
                    <div className="bg-blue-800 py-10 px-5 welcome opacity-80 rounded-lg">
                        <h2 className="opacity-100 text-white">Elevate Your Business Presence
                        </h2>
                        <button className="mt-5 bg-red-800 text-white px-5 py-3 rounded-lg">Register Now</button>
                    </div>
                </div>
                <div className="slide absolute">
                <div className="bg-blue-800 py-10 px-5 welcome opacity-80 rounded-lg">
                        <h2 className="opacity-100 text-white">"Powerful Partnerships Start Here"
                        </h2>
                        <button className="mt-5 bg-red-800 text-white px-5 py-3 rounded-lg">Register Now</button>
                    </div>

                </div>
                <div className="slide absolute">
                <div className="bg-blue-800 py-10 px-5 welcome opacity-80 rounded-lg">
                        <h2 className="opacity-100 text-white">"Your Gateway to Business Excellence"
                        </h2>
                        <button className="mt-5 bg-red-800 text-white px-5 py-3 rounded-lg">Register Now</button>
                    </div>

                </div>
            
          </div>
        </>
    )
}

export default FirstSection;


