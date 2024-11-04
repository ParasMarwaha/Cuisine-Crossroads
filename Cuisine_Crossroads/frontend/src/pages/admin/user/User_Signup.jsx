import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import BreadCrumb from "../../../Components/BreadCrumb"
import Footer from "../../../Components/Footer"
import PublicNavbar from "../../../Components/PublicNavbar"

 function User_Signup(){
const navigate = useNavigate()
const {register,handleSubmit} = useForm()
  async function onSubmit(data){
  console.log(data)
  let response= await fetch("http://localhost:3000/user-signup",{
    method:'POST',
    headers:{"Content-Type":'application/json'},
    body : JSON.stringify(data)
})
response = await response.json()
//console.log(response)
if (response.error != "") {
  Qual.errord("!Oh No", response.error);
} else {
  navigate ("/user-signin")
  Qual.successd("Success", response.message);
}
  }
    return(
      <div>
        <PublicNavbar/>
        <BreadCrumb title="Sign-up"/>
        <br />
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container ">
        <div className="contact__form__inner container row">
          <div className="col-lg-6">
          
          <input {...register('email')} type="email" placeholder="enter email" className="form-control" />
          
          <input {...register('fullname')} type="text" placeholder="enter fullname" className="form-control" />
          <h4>Gender :</h4>
          <label  htmlFor="male">
          <input {...register('gender')}  type="radio"  value="male" name="gender" id="male"  />Male
          </label>
          <label  htmlFor="female">
          <input {...register('gender')}  type="radio" value="female" name="gender" id="female"  />Female
          </label>
          
          <input {...register('state')} type="text" placeholder="enter state" className="form-control" />

          </div>
          <div className="col-lg-6">
          
          <input {...register('password')} type="password" placeholder="enter password" className="form-control" />
          
          <input {...register('mobile')} type="tel" placeholder="enter mobile no." className="form-control" />
          
          <textarea {...register('address')} name="address" id="address" cols="50" rows="3" placeholder="enter address" className="form-control"></textarea>
          
          <input {...register('city')} type="text" placeholder="enter city" className="form-control" />
          </div>
        <button className="btn btn-primary text-center">Submit</button>
        </div>
        </div>
        </form>
        <Footer/>
      </div>
    )
}

export default User_Signup