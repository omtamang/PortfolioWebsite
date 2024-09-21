import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Hero() {
    return (
        <div className="md:max-w-[1200px] max-w-[400px] m-auto md:flex justify-between font-poopins h-screen pt-[100px] md:pt-[120px]">
            <div>
                <div className="md:py-8">
                    <p className="md:text-[64px] md:leading-tight text-3xl font-black font-poopins">
                    Hi, I’m Om Tamang,<br/>
                    a Full-Stack Developer.
                    </p>
                </div>

                <section className="pt-6">
                    <p className="md:text-[20px] text-[13px] md:w-8/12">
                    "Building seamless digital experiences with React JS and Spring Boot.
                    I specialize in creating dynamic, responsive web applications that blend
                    powerful front-end interfaces with robust back-end solutions."
                    </p>
                </section>

                <div className="md:my-11 my-6">
                    <p className="font-black md:text-[24px]">
                    Let’s create something exceptional together.
                    </p>
                </div>

                <div>
                    <button className="transition ease-out duration-500 bg-black text-white font-medium md:text-[24px] border 
                    rounded-full md:w-[180px] w-[120px] hover:bg-green-500 hover:text-black hover:font-bold">
                        View Work
                    </button>
                </div>
            </div>

            <div className="md:text-5xl md:flex-col flex pt-[100px]">
                <div className="pb-4">
                    <FontAwesomeIcon icon={faInstagram}/>
                </div>
                <div className="pb-4">
                    <FontAwesomeIcon icon={faLinkedin}/>
                </div>
                <div>
                    <FontAwesomeIcon icon={faGithub}/>
                </div>
            </div>
        </div>
    )
}