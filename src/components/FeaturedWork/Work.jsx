import { useAuth } from "../Security/Authcontext"


export default function Work() {
    const authContext = useAuth()
    const mode = authContext.mode
    return (
        <div className={`${mode && "dark"}`}>
        <div className=" md:max-w-[1200px] max-w-[400px] m-auto h-auto ">
            <div className="pt-11 text-center font-poopins text-[36px] dark:text-white">
                <p>Featured Work</p>
            </div>

            <div className="grid md:grid-cols-3 grid-cols-2 md:gap-5 gap-8 mt-8 font-poopins text-sm dark:text-white px-7">
                <div>
                    <img alt="Vroom Car Rental" className="md:w-[360px] md:h-[230px] w-full h-[100px] object-cover"  src="https://miro.medium.com/v2/resize:fit:1400/1*WhuoNGVyEYr0JtoOhSk3hg.png"/>
                    <p className="pt-2">Vroom Car Rental</p>
                </div>

                <div>
                    <img alt="cocokind" className="md:w-[360px] md:h-[230px] w-full h-[100px] object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB8j0CAVcG9UG3i8FYtpj_GtHb6slmPI9w1w&s"/>
                    <p className="pt-2">Cocokind</p>
                </div>

                <div>
                    <img alt="weather app" className="md:w-[360px] md:h-[230px] w-full h-[100px] object-cover" src="https://9to5mac.com/wp-content/uploads/sites/6/2023/04/Apple-Weather-app.jpg?quality=82&strip=all&w=1024"/>
                    <p className="pt-2">Weather App</p>
                </div>

                <div>
                    <img alt="daraz" className="md:w-[360px] md:h-[230px] w-full h-[100px] object-cover"  src="https://www.fiscalnepal.com/wp-content/uploads/2024/06/Daraz-Logo.jpg"/>
                    <p className="pt-2">Daraz Clone</p>
                </div>
            </div>

            <div className="md:mt-[80px] mt-11 text-center font-poopins w-full">
                <button className="transition ease-out duration-500 text-black dark:text-slate-300 font-light md:text-[36px] animate-bounce
                 rounded-xl hover:text-gray-500 underline underline-offset-8 decoration-1 hover:decoration-2">
                    See More Work
                </button>
            </div>
        </div>
        </div>
    )
}