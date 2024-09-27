import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {  faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Footer2(){
    return (
        <footer className="bg-black text-white font-poopins">
            <div className="h-[400px] text-center pt-11">
                <div className="pt-4">
                    <p className="text-2xl">Want to work together?</p>
                    <button className="text-xl pt-3 underline underline-offset-8 decoration-1 cursor-pointer hover:text-slate-400">
                        Get In touch
                    </button>
                </div>

                <div className="md:flex md:justify-center md:space-x-11 md:mt-[100px]">
                    <div className=" mt-11 text-start px-4 text-slate-300 text-sm md:mt-0">
                        <p className=" text-slate-300">Contact Number</p>
                        <FontAwesomeIcon icon={faPhone} className="pr-2 pt-3"/> +977 - 9818776961
                    </div>

                    <div className="mt-6 text-start px-4 text-slate-300 text-sm md:mt-0">
                        Socials
                        <div className="md:flex-col space-x-8 text-start md:mt-0 mt-2 text-2xl md:justify-between w-[400px] m-auto md:w-[200px] md:text-3xl md:pt-3 cursor-pointer">
                            <a href="instagram.com/omtamang88/"><FontAwesomeIcon className="hover:text-gray-400" icon={faInstagram}/></a>
                                
                            <a href="https://www.linkedin.com/in/om-tamang-31b1a0160/"> <FontAwesomeIcon className="hover:text-gray-400" icon={faLinkedin}/></a>
                               
                            <a href="https://github.com/omtamang"><FontAwesomeIcon className="hover:text-gray-400" icon={faGithub}/></a>
                            
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}