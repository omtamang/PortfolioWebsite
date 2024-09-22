import Work from "./FeaturedWork/Work";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Hero from "./HeroSection/Hero";


export default function Portfolio(){
    return(
        <div>
            <div className="bg-[#FFFEBC]">
                <Header/>
            </div>

            <div className="bg-[#FFFEBC]">
                <Hero/>
            </div>

            <div>
                <Work/>
            </div>

            <div>
                <Footer/>
            </div>
        </div>
    )
}