import { useEffect, useRef, useState } from "react";
import Article from "../../Article/Article"

const SecondSection = () => {
const [visible, setVisible] = useState(false);
const popSection = useRef(null);


useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log('Right Element is in view');
            entry.target.classList.add("animate-popUp");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
  
    if (popSection.current) {
      observer.observe(popSection.current);
    }
  
    return () => {
      if (popSection.current) {
        observer.unobserve(popSection.current);
      }
    };
  }, []);
    return (
        <>  
            <section id="myElement">
              <div className={`flex flex-wrap justify-center ${visible ? 'animate-popUp' : ''}`} ref={popSection}>
              <article className={`bg-yellow-100 w-1/3 p-5 m-5 rounded-3xl sm:w-screen`}>
                 <h3 className="flex justify-center my-5 font-semibold text-2xl text-center"> Introduction:</h3>
                 <p className="text-center leading-8 pb-4">
                     Broad-bridge is your ultimate platform for bridging the gap between business owners and clients. We understand the importance of meaningful connections in driving business success, and that's why we've created a space where businesses and clients can come together to thrive.
                  </p>
                </article>
                
                <article className="bg-yellow-100 w-1/3 p-5 m-5 rounded-3xl sm:w-screen">
                 <h3 className="flex justify-center my-5 font-semibold text-2xl text-center"> Purpose:</h3>
                 <p className="text-center leading-8 pb-4">
                     Our purpose is simple yet powerful: to facilitate connections that fuel growth and success. Whether you're a business owner looking to expand your reach or a client seeking quality services, Broad-bridge is here to help you find the perfect match. We're dedicated to making the process seamless, efficient, and rewarding for everyone involved.
                  </p>
                </article>  
          
                
                <article className="bg-yellow-100 w-1/3 p-5 m-5 rounded-3xl sm:w-screen">
                 <h3 className="flex justify-center my-5 font-semibold text-2xl text-center">Value Proposition:</h3>
                 <p className="text-center leading-8 pb-4">
                   At Broad-bridge, we offer more than just a platform—we offer opportunities. By joining our community, you'll gain access to a network of like-minded professionals, valuable resources, and endless possibilities for collaboration and growth. Our personalized approach ensures that every connection you make is meaningful and mutually beneficial.
                  </p>
                </article>

                <article className="bg-yellow-100 w-1/3 p-5 m-5 rounded-3xl sm:w-screen">
                 <h3 className="flex justify-center my-5 font-semibold text-2xl text-center">Features:</h3>
                 <p className="text-center leading-8 pb-4">
                     Matchmaking: Our advanced matchmaking algorithm connects businesses with clients based on their unique needs, preferences, and goals.
                      Networking: Join our vibrant community of businesses and clients to expand your network, share insights, and discover new opportunities.
                      Success Stories: Hear from businesses and clients who have found success through Broad-bridge. Their stories are a testament to the power of meaningful connections and the endless possibilities that await you.
                      Featured Businesses and Clients:                  </p>
                </article>
            
              </div>
            </section>
        </>
    )
}

              
export default SecondSection;


{/**                              ABC Consulting: "Thanks to Broad-bridge, we were able to connect with clients we never would have reached otherwise. The platform has truly transformed our business."
                              XYZ Design Studio: "Broad-bridge has been instrumental in helping us find talented professionals to collaborate with. It's like having a dedicated team of experts at our fingertips."
                              Join Us Today:
                              Ready to take your business to new heights? Join Broad-bridge today and start making meaningful connections that drive growth and success.
 */}