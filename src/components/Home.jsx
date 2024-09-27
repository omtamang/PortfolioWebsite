import Work from "./FeaturedWork/Work";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Hero from "./HeroSection/Hero";
import { useAuth } from "./Security/Authcontext";
import Skill from "./Skills/Skill";


export default function Home() {

    const authContext = useAuth()
    const mode = authContext.mode
    return (
        <div className={`${mode && "dark"}`}>
            <div className="bg-[#FFFEBC] dark:bg-black">
                <Header/>
            </div>

            <div className="bg-[#FFFEBC] dark:bg-black">
                <Hero/>
            </div>

            <div>
                <Skill/>
            </div>

            <div className="dark:bg-black">
                <Work/>
            </div>

            <div className="dark:bg-black">
                <Footer/>
            </div>
        </div>
    )
}