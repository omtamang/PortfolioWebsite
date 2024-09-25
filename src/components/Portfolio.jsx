import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Allwork from "./FeaturedWork/Allwork"


export default function Portfolio(){
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/allwork" element={<Allwork/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}