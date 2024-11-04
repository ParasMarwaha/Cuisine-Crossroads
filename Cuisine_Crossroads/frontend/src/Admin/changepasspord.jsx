import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"


function Changepassword(){
    const navigate= useNavigate()
    const{register,handleSubmit}= useForm()
    async function onSubmit(data){
        let token = localStorage.getItem("adminToken")
        //console.log(data)
        //console.log(token)
         if(!token){
             navigate  ("/admin-login")
         }else{
            data['token'] = token
            let url = "http://localhost:3000/change-password"
            let response = await fetch(url,{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(data)
            })
            response = await response.json()
            //console.log(response)
            if (response.error !== "") {
                Qual.errord("!Oh ho", response.error);
              } else {
                Qual.successd("Success", response.message);
              }
         }
    }

    return(
        <div>
        <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
            <h4>Enter Current Password</h4>
            <input {...register('password')} type="password" id="password" placeholder="enter current password"  className="form-control" /> <br />
            <h4>Enter New Password</h4>
            <input {...register('newpassword')} type="password" id="newpassword" placeholder="enter new password" className="form-control" /> <br />
            <h4>Confirm Password</h4>
            <input {...register('confirmpassword')} type="password" id="confirmpassword" placeholder="confirm password" className="form-control" /> <br />
            <button className="btn btn-primary">Submit</button>
        </form>
        </div>
        </div>
    )
 }

 export default Changepassword