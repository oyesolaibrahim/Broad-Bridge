import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import FirstSection from "./Sections/FirstSEction";
import SecondSection from "./Sections/SecondSection";
import ThirdSection from "./Sections/ThirdSection";
import FourthSection from "./Sections/FourthSection";

const Home = () => {

    return (
        <>  
            <Header/>
            <main className="bg-gray-500 pb-16">
               <FirstSection/>
               <SecondSection/>
             {/*  <ThirdSection/>
    */}           <FourthSection/>
                </main>
            <Footer/>
        </>
    )
}

export default Home;


