import { faBars, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../Security/Authcontext";


export default function Headertest() {
    const [isOpen, setOpen] = useState() 

    const toggleMenu = () => {
        setOpen(!isOpen);
    }
    const authContext = useAuth()
    const mode = authContext.mode
    console.log(isOpen)

    function toggleMode() {
        authContext.toogle()
    }

    return (
        <header className={`${mode && "dark"} fixed z-20 md:flex md:justify-center md:w-full bg-[#FFFEBC] dark:bg-black`}>
            <nav className=" flex justify-between w-full vsm:space-x-[100px] sm:space-x-[110px] px-11 py-8 md:w-[1200px] md:m-auto">
                <div>
                    <p className="sm:text-xl font-light md:text-3xl cursor-pointer vsm:text-sm dark:text-white">Om Tamang</p>
                </div>
                <ul className="md:flex hidden justify-between w-4/12 font-medium cursor-pointer dark:text-white pt-2">
                    <li className="hover:text-green-500"><Link to={'/'}>Home</Link></li>
                    <li className="hover:text-green-500"><Link to={'/allwork'}>Work</Link></li>
                    <li className="hover:text-green-500"><Link to={'/about'}>About me</Link></li>
                    <li className="transition ease-out duration-500 dark:bg-slate-500
                        bg-black text-white rounded-xl font-bold text-center p-1 w-[90px] hover:text-slate-800 hover:bg-green-500"><Link to={'/hire'}>HIRE ME</Link></li>
                </ul>
                <button className=" transition ease-out duration-500 font-bold items-center
                        text-white rounded-full  md:text-2xl  hover:text-green-500"
                        onClick={toggleMode}>
                            {mode ? <FontAwesomeIcon icon={faMoon}/> : <FontAwesomeIcon className="text-black hover:text-green-500" icon={faSun}/>}
                    </button>
                <div className="md:hidden">
                    <FontAwesomeIcon icon={faBars} className="dark:text-white" onClick={toggleMenu}/>
                </div>

            </nav>
            {isOpen ? 
                    (
                        <ul className="text-center flex-row space-y-2 font-poopins text-[14px] bg-[#FFFEBC] dark:bg-black dark:text-white pb-6 font-medium ">
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/allwork'}>Work</Link></li>
                            <li><Link to={'/about'}>About me</Link></li>
                            <li className="transition ease-out duration-500 dark:bg-slate-500
                        bg-black text-white rounded-2xl w-[130px] m-auto hover:text-slate-800 hover:bg-green-500"><div>
                            <Link to={'/hire'}>HIRE ME</Link>
                        </div></li>
                        </ul>
                    ): null}
        </header>
    )
}