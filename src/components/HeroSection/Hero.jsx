import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Omtamang from "./Omtamang.pdf";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from 'gsap';

export default function Hero() {

    const animate = useRef()
    const { contextSafe } = useGSAP();

    contextSafe(() => {
        gsap.to(animate.current, {
            y:1000,
            duration: 3,
            delay: 1,
        })
    })

    return (
        <div>
            <div className="md:max-w-[1200px] px-4 m-auto md:flex justify-between font-poopins pt-[100px] md:h-screen md:pt-[120px] dark:bg-black">
                <div>
                    <div className="md:py-8 dark:text-green-400">
                        <p ref={animate} className="md:text-[64px] md:leading-tight text-3xl font-black font-poopins">
                        Hi, I’m Om Tamang,<br/>
                        a Full-Stack Developer.
                        </p>
                    </div>

                    <section className="pt-6 dark:text-slate-300">
                        <p className="md:text-[20px] text-[13px] md:w-8/12">
                        "Building seamless digital experiences with React JS and Spring Boot.
                        I specialize in creating dynamic, responsive web applications that blend
                        powerful front-end interfaces with robust back-end solutions."
                        </p>
                    </section>

                    <div className="md:my-11 my-6">
                        <p className="font-black md:text-[24px] dark:text-slate-300">
                        Let’s create something exceptional together.
                        </p>
                    </div>

                    <div className="flex justify-between">
                        <div className="flex space-x-11">
                            <button className="transition ease-out duration-500 bg-black text-white font-medium md:text-[24px] border 
                            rounded-full md:w-[180px] w-[120px] hover:bg-green-500 hover:text-slate-800 hover:font-bold dark:hover:border-black">
                                View Work
                            </button>
                            <a href={Omtamang} download={Omtamang}><button className="transition ease-out duration-500 bg-transparent dark:text-white dark:border-white text-black font-medium md:text-[24px] border-2 border-black rounded-full md:w-[200px] w-[120px] hover:font-bold">
                            Download CV
                            </button></a>
                        </div>

                        <div className="md:hidden text-2xl flex justify-between w-4/12 dark:text-white">
                            <div className="pb-4">
                                <a href="instagram.com/omtamang88/"><FontAwesomeIcon icon={faInstagram}/></a>
                            </div>
                            <div className="pb-4">
                                <a href="https://www.linkedin.com/in/om-tamang-31b1a0160/"><FontAwesomeIcon icon={faLinkedin}/></a>
                            </div>
                            <div>
                                <a href="https://github.com/omtamang"><FontAwesomeIcon icon={faGithub}/></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hidden md:text-5xl md:flex-col md:flex md:pt-[100px] cursor-pointer dark:text-white">
                    <div className="pb-4">
                        <a href="https://www.instagram.com/omtamang88/"><FontAwesomeIcon className="hover:text-green-500" icon={faInstagram}/></a>
                    </div>
                    <div className="pb-4">
                        <a href="https://www.linkedin.com/in/om-tamang-31b1a0160/"><FontAwesomeIcon className="hover:text-green-500" icon={faLinkedin}/></a>
                    </div>
                    <div>
                        <a href="https://github.com/omtamang"><FontAwesomeIcon className="hover:text-green-500" icon={faGithub}/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}