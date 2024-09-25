import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

export default function Header(){
    const [isOpen, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!isOpen);
    }

    console.log(isOpen);

    return (
        <div className="fixed w-full z-40 bg-inherit pt-7 pb-7 font-poopins">
            <nav className=" flex justify-between max-w-[400px] md:max-w-[1200px] m-auto">
                <span className="text-xl font-light md:text-3xl cursor-pointer w-full">Om Tamang 
                {isOpen ? (
                    <ul className="flex-col md:hidden font-normal text-sm space-y-3 text-center">
                    <Link to={"/allwork"}><li>Home</li></Link>
                        <Link to={"/allwork"}><li>Work</li></Link>
                        <li>About Me</li>
                        <li className="pb-1 ">
                        <button className="font-bold bg-black text-white rounded-full p-1 w-[100px] hover:text-black hover:bg-green-500">
                            HIRE ME
                        </button></li>
                    </ul>
                ): null}</span>

                <ul className="hidden md:flex md:justify-around font-medium w-8/12 h-11 pt-2">
                    <Link to={"/"}><li className="cursor-pointer hover:text-green-500">Home</li></Link>
                    <Link to={"/allwork"}><li className="cursor-pointer hover:text-green-500">Work</li></Link>
                    <li className="cursor-pointer hover:text-green-500">About Me</li>
                    <li className="">
                    <button className=" transition ease-out duration-500 font-bold bg-black text-white rounded-full p-1 w-[100px] hover:text-black hover:bg-green-500">
                        HIRE ME
                    </button></li>
                </ul>

                <button className="text-xl md:hidden fixed right-3 text-gray-600" onClick={toggleMenu} >
                    <FontAwesomeIcon icon={faBars} />
                </button>

                
            </nav>
        </div>
    )
}