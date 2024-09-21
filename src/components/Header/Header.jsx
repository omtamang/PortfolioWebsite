import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Header(){
    const [isOpen, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!isOpen);
    }

    console.log(isOpen);

    return (
        <div className="fixed w-full z-40 bg-inherit pt-7 pb-7 font-poopins">
            <nav className=" flex justify-between max-w-[400px] md:max-w-[1200px] m-auto">
                <span className="text-xl font-light md:text-3xl w-full cursor-pointer">Om Tamang 
                {isOpen ? (
                    <ul className="transition ease-in-out delay-300 flex-col md:hidden font-normal text-sm space-y-3 text-center">
                        <li>Home</li>
                        <li>Work</li>
                        <li>About Me</li>
                        <li className="pb-1 ">
                        <button className="font-bold bg-black text-white rounded-full p-1 w-[140px] hover:text-black hover:bg-green-500">
                            GET IN TOUCH
                        </button></li>
                    </ul>
                ): null}</span>

                <ul className="hidden md:flex md:justify-around font-medium w-7/12 bg-[#FFFFEA] rounded-full h-11 pt-2">
                    <li className="cursor-pointer">Home</li>
                    <li className="cursor-pointer">Work</li>
                    <li className="cursor-pointer">About Me</li>
                    <li className="pb-1 ">
                    <button className=" transition ease-out duration-500 font-bold bg-black text-white rounded-full p-1 w-[140px] hover:text-black hover:bg-green-500">
                        GET IN TOUCH
                    </button></li>
                </ul>

                <button className="text-xl md:hidden fixed right-3 text-gray-600" onClick={toggleMenu} >
                    <FontAwesomeIcon icon={faBars} />
                </button>

                
            </nav>
        </div>
    )
}