import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import Footer from "../Components/Footer"
import UserNavbar from "../Components/UserNavbar"


 function UserLayout(){
const navigate = useNavigate()
    useEffect(()=>{
        let token = localStorage.getItem("userToken")
        if(!token){
            navigate("/user-signin")
        }else{
            //console.log(token)
        }
    },[])
    return(
        <div>
        <UserNavbar/>
        <Outlet/> <br />
        <Footer/>
        </div>
    )
}
export default UserLayout