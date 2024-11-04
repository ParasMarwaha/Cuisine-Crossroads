
function CheckOutForm ({user , total}){
    //console.log(user)


// const {register,handleSubmit,formState:{errors} } = useForm({defaultValues:user})
// const navigate = useNavigate()
//     async function onSubmit(data){
//         console.log(data)
//         let token = localStorage.getItem("userToken")
//         if(!token){
//             navigate ("/user-signin")
//         }else{
//             data['token'] = token
//             //console.log(data['token'])
//             let url = "http://localhost:3000/bill"
//             let response = await fetch(url,{
//                 method:'POST',
//                 headers:{'Content-Type':'application/json'},
//                 body:JSON.stringify(data)
//             })
//             response = await response.json()
//             //console.log(response)

//             if (response.error == "jwt expired"){
//                 navigate("/user-signin")
//             }else if(response.error != "") {
//                 Qual.errord("!Oh no", response.error);
//               } else {
//                 Qual.successd("Success", response.message);
//               }
//          }
//     }


    return(
        <div id="billing-method" className="collapse">
        <div className="accordion-body billing-method fix">
              <div className="accordion-body billing-method fix">

                                  <form onSubmit={handleSubmit(onSubmit)} className="billing-form checkout-form">
                                      <div className="row">
                                        
                                          <div className=" col-12 mb--20">                                 
                                              <input {...register('full_name')} type="text" placeholder="Full Name"/>
                                          </div>
                                          
                                          <div className="col-12 mb--20">                              
                                              <input {...register('email')} type="email" placeholder="E-Mail"/>
                                          </div>
                                          <div className="col-12 mb--20">
                                              <input {...register('address')} placeholder=" Address" type="text"/>
                                          </div>

                                          <div className="col-12 mb--20">
                                              <input {...register('landmark')} placeholder="Near-By Landmark" type="text"/>
                                          </div>
                                          
                                          <div className="col-12 mb--20">
                                              <input {...register('city')} placeholder="Town / City" type="text"/>
                                          </div>
                                          <div className="col-md-6 col-12 mb--20">                                 
                                              <input {...register('state')} type="text" placeholder="State / County"/>
                                          </div>
                                          
                                          
                                          <div className="col-md-6 col-12">                                   
                                              <input {...register('phone')} placeholder="Phone Number" type="text"/>
                                          </div>                          
                                      </div>
                                      <button className="food__btn">Submit</button>
                                  </form>
                                  
                              </div>
        </div>
      </div>
    )
}

export default  CheckOutForm