import { useEffect, useRef, useState } from "react";
import Article from "../../Article/Article"

const ThirdSection = () => {
const [visible, setVisible] = useState(false);
const leftSlide = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log('Left Element is in view');
            entry.target.classList.add("animate-slideInLeft");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
  
    if (leftSlide.current) {
      observer.observe(leftSlide.current);
    }
  
    return () => {
      if (leftSlide.current) {
        observer.unobserve(leftSlide.current);
      }
    };
  }, []);
    return (
        <>  
            <section ref={leftSlide}>
                <div className={`pt-36 text-white mb-24 ${visible ? 'animate-slideInLeft' : ''}`}>
                    <h1 className="flex text-6xl justify-center">New Arrivals</h1>
                </div>
                <Article/>
            </section>
        </>
    )
}

export default ThirdSection;


