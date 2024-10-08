import Headertest from "../Header/Headertest";
import { useAuth } from "../Security/Authcontext";
import Footer2 from "../Footer/Footer2"

export default function Aboutme() {
    const authContext = useAuth()
    const mode = authContext.mode

    return (
        <div className={`${mode && "dark"}`}>
            {/* Header */}
            <div  className={`${mode && "dark"}`}>
                <Headertest/>
            </div>
            {/* Header ends here*/}

            
            {/* About me section */}
            <div className="pt-[140px] h-auto md:w-10/12 m-auto flex-wrap md:flex md:pb-[100px]">

                <div className=" flex justify-center">
                    <img className="w-9/12 rounded-2xl md:w-[500px] md:h-[470px]" src="/img/photo.jpg" alt="Om Tamang"/>
                </div>

                <div className="text-slate-700 vsm:text-[10px] font-poopins w-10/12 md:w-5/12 m-auto text-center pb-1">

                    <div className="font-poopins text-2xl text-slate-400 text-center pt-4">
                        <p>About me</p>
                    </div>

                    <p className="pt-3 md:text-xl">Hi, I'm Om, a passionate <b>React</b> and <b>Spring Boot</b> developer 
                    with a knack for creating seamless, <b>responsive web applications</b>. 
                    With a strong foundation in <b>full-stack development</b>, I love turning complex ideas into intuitive digital experiences. 
                    My journey in tech has been driven by curiosity and the desire to solve <b>real-world problems</b>, 
                    especially those faced by communities in <b>Nepal</b>.
                    </p>

                    <p className="pt-3 md:text-xl">
                    Outside of coding, I'm a curious traveler and enjoy uncovering the hidden stories behind famous cities. 
                    Whether I'm working on a new project or learning the latest tech trends, I'm always up for a challenge!
                    </p>
                </div>
            </div>
            {/* About me section ends here*/}

            {/* footer */}

            <div>
                <Footer2/>
            </div>
        </div>
    )
}