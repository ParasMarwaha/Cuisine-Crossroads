import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import BreadCrumb from "../Components/BreadCrumb"
import Footer from "../Components/Footer"
import PublicNavbar from "../Components/PublicNavbar"

function AdminLogin(){
    
    const navigate = useNavigate()
    const{register,handleSubmit}=useForm()
    async function onSubmit(data){
        console.log(data)
        let response= await fetch("http://localhost:3000/adminlogin",{
            method:'POST',
            headers:{"Content-Type":'application/json'},
            body : JSON.stringify(data)
        })
        response = await response.json()
        //console.log(response)
        localStorage.setItem("adminToken",response.token)
        if (response.error != "") {
            Qual.errord("!Oh No", response.error);
          } else {
            navigate ("/admin/dashboard")
            Swal.fire({
              title: "Logged In",
              
              icon: "success"
            });
          }

    }

    return(
     <div>
        <PublicNavbar/>
        <BreadCrumb title="Admin Login"/>
        <div className="container">
        <form className="contact__form__inner container" onSubmit={handleSubmit(onSubmit)}>
          <div className="single-contact-form">
            <div className="contact-box name d-flex flex-wrap flex-md-nowrap flex-lg-nowrap justify-content-between">
            <input
            {...register("email")}
            type="email"
            placeholder="enter email"
            className="form-control"
          />
          
            </div>
          </div>
          <div className="single-contact-form">
            <div className="contact-box name d-flex flex-wrap flex-md-nowrap flex-lg-nowrap justify-content-between">

          
          <input
            {...register("password")}
            type="password"
            placeholder="enter password"
            className="form-control"
          />
          

          
            </div>
          </div>
          <div className="contact-btn">
          <button type="submit" className="food__btn">
            Sign-In
          </button>
          </div>
         
        </form>
      </div>

        <Footer/>
     </div>
    )
}

export default AdminLogin
