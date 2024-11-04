import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import ResNavbar from "../Components/ResNavbar";

function ResLayout(){
    return(
        <div>
        <ResNavbar/>
        <Outlet/><br /><br /><br />
        <Footer/>
        </div>
    )
}

export default ResLayout