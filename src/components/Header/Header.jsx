import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { useAuth } from "../Security/Authcontext";

export default function Header(){
    const [isOpen, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!isOpen);
    }

    const authContext = useAuth()
    const mode = authContext.mode

    function toggleMode() {
        authContext.toogle()
    }

    return (
        <div className={`${mode && "dark"}`}>
            <div className="fixed w-full z-40 bg-[#FFFEBC] pt-7 pb-7 font-poopins dark:bg-black">
                <nav className=" flex justify-between max-w-[400px] md:max-w-[1200px] m-auto">
                    <span className="text-xl font-light md:text-3xl cursor-pointer w-full dark:text-white">Om Tamang 
                    {isOpen ? (
                        <ul className="flex-col md:hidden font-normal text-sm space-y-3 text-center dark:text-white">
                        <Link to={"/allwork"}><li>Home</li></Link>
                            <Link to={"/allwork"}><li>Work</li></Link>
                            <li>About Me</li>
                            <li className="pb-1 ">
                            <button className="font-bold bg-black text-white rounded-full p-1 w-[100px] hover:text-black hover:bg-green-500">
                                HIRE ME
                            </button></li>
                        </ul>
                    ): null}</span>

                    <ul className="hidden md:flex md:justify-around font-medium w-8/12  pt-2 dark:text-white">
                        <Link to={"/"}><li className="cursor-pointer hover:text-green-500">Home</li></Link>
                        <Link to={"/allwork"}><li className="cursor-pointer hover:text-green-500">Work</li></Link>
                        <li className="cursor-pointer hover:text-green-500">About Me</li>
                        <li className=" transition ease-out duration-500 font-bold dark:bg-slate-500 text-center
                        bg-black text-white rounded-full cursor-pointer w-[120px] h-7 text-xl hover:text-slate-800 hover:bg-green-500">
                            HIRE ME
                        </li>
                        
                    </ul>

                   
                    <button className="text-xl md:hidden fixed right-3 text-gray-600" onClick={toggleMenu} >
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    
                    <button className=" transition ease-out duration-500 font-bold items-center
                        text-white rounded-full  text-2xl hover:text-green-500"
                        onClick={toggleMode}>
                            {mode ? <FontAwesomeIcon icon={faMoon}/> : <FontAwesomeIcon className="text-black hover:text-green-500" icon={faSun}/>}
                    </button>
                    
                </nav>
            </div>
        </div>
    )
}