

export default function Skill() {
    return (
        <div className="md:h-[790px] h-[850px] bg-slate-100">
            <div className="font-poopins text-center pt-11 text-black">
                <p className="md:text-[36px] text-[20px]">My Skills</p>
                <p className="md:text-sm text-[14px] font-light">Things I am good at</p>
            </div>

            <div className="md:max-w-[1200px] md:m-auto pt-9 md:pt-9 font-poopins grid md:grid-cols-3 sm:grid-cols-2 md:gap-9 grid-cols-2 md:gap-y-9 gap-5 px-6">
                <div className="bg-white h-[210px] rounded-xl shadow-md md:max-w-[400px] md:h-[250px] md:rounded-2xl md:shadow-2xl hover:shadow-2xl p-2">
                    <div className="w-full h-[100px] flex justify-center md:pt-3">
                        <img alt="HTML" className="border rounded-full md:w-[80px]"
                        src="https://cdn.pixabay.com/photo/2018/05/08/21/28/html5-3384014_1280.png"/>
                    </div>
                    <p className="text-center md:text-[20px] md:pt-2 text-[20px]">HTML5</p>
                    <p className="text-center md:text-sm text-[9px] text-slate-500 font-light md:pt-2 md:px-11">"I use HTML to create clean, structured layouts, turning ideas into functional, accessible web experiences."</p>
                </div>

                <div className="bg-white h-[210px] md:max-w-[400px] md:h-[250px] md:rounded-2xl rounded-xl md:shadow-2xl shadow-md p-2">
                    <div className="md:w-full h-[100px] flex justify-center md:pt-3">
                        <img alt="Tailwind CSS" className="border w-[105px] rounded-full md:h-[80px] md:w-[80px] object-cover"
                        src="https://balticanebula.com/content/images/2023/06/plus-tailwind.jpg"/>
                    </div>
                    <p className="text-center md:text-[20px] md:pt-2 text-[20px]">Tailwind CSS</p>
                    <p className="text-center md:text-sm text-[9px] text-slate-500 font-light md:pt-2 md:px-11">"I use Tailwind CSS to quickly design responsive, modern interfaces with clean, efficient code."</p>
                </div>

                <div className="bg-white h-[210px] md:max-w-[400px] md:h-[250px] md:rounded-2xl rounded-xl md:shadow-2xl shadow-md p-2">
                    <div className="w-full h-[100px] flex justify-center md:pt-3">
                        <img alt="React JS" className="border rounded-full md:w-[80px]"
                        src="https://pbs.twimg.com/profile_images/1785867863191932928/EpOqfO6d_400x400.png"/>
                    </div>
                    <p className="text-center md:text-[20px] md:pt-2 text-[20px]">React JS</p>
                    <p className="text-center md:text-sm text-slate-500 font-light md:pt-2 md:px-11 text-[9px]">"I build dynamic, interactive web applications with React JS, focusing on performance and a seamless user experience."</p>
                </div>

                <div className="bg-white h-[210px] md:max-w-[400px] md:h-[250px] md:rounded-2xl rounded-xl shadow-md md:shadow-2xl p-2">
                    <div className="w-full h-[100px] flex justify-center md:pt-3">
                        <img alt="SpringBoot" className="border rounded-full md:w-[80px]"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7bjf214-KOghPj0dwGPPfZpAX2ubdFu5VQQ&s"/>
                    </div>
                    <p className="text-center md:text-[20px] md:pt-2 text-[20px]">SpringBoot</p>
                    <p className="text-center md:text-sm text-[9px] text-slate-500 font-light md:pt-2 md:px-11">"I develop robust, scalable back-end systems with Spring Boot, ensuring smooth and efficient performance for web applications."</p>
                </div>

                <div className="bg-white h-[210px] md:max-w-[400px] md:h-[250px] md:rounded-2xl rounded-xl shadow-md md:shadow-2xl p-2">
                    <div className="w-full h-[100px] flex justify-center md:pt-3">
                        <img alt="SpringBoot" className="border rounded-full md:w-[80px]"
                        src="https://seeklogo.com/images/G/github-logo-5F384D0265-seeklogo.com.png"/>
                    </div>
                    <p className="text-center md:text-[20px] md:pt-2 text-[20px]">Git</p>
                    <p className="text-center md:text-sm text-[9px] text-slate-500 font-light md:pt-2 md:px-11">"I use GitHub to collaborate on projects, manage code efficiently, and track version control for smooth development workflows."</p>
                </div>

                <div className="bg-white h-[210px] md:max-w-[400px] md:h-[250px] md:rounded-2xl rounded-xl shadow-md md:shadow-2xl p-2">
                    <div className="w-full h-[100px] flex justify-center md:pt-3">
                        <img alt="SpringBoot" className="border rounded-full md:w-[80px] object-contain"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png"/>
                    </div>
                    <p className="text-center md:text-[20px] md:pt-2 text-[20px]">Bootstrap</p>
                    <p className="text-center md:text-sm text-[9px] text-slate-500 font-light md:pt-2 md:px-11">"I use Bootstrap to quickly create responsive, mobile-first websites with consistent, modern designs."</p>
                </div>
            </div>
        </div>
    )
}