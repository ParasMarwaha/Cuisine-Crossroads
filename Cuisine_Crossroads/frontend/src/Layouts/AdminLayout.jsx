import { Outlet } from "react-router-dom";
import AdminNavbar from "../Components/AdminNavbar";
import Footer from "../Components/Footer";

function AdminLayout(){
    return(
        <div>
        <AdminNavbar/>
        <Outlet/><br /><br /><br />
        <Footer/>
        </div>
    )
}

export default AdminLayout