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
        </div>
    )
}