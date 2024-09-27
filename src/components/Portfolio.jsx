import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Allwork from "./FeaturedWork/Allwork"
import AuthProvider from "./Security/Authcontext";
import Pagenotfound from "./PageNotFound/Pagenotfound";


export default function Portfolio(){
    return(
        <div>
            <AuthProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/allwork" element={<Allwork/>}/>
                        <Route path="*" element={<Pagenotfound/>}/>
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </div>
    )
}