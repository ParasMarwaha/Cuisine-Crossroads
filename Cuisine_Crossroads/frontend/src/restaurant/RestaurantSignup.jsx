import { useForm } from "react-hook-form";
import BreadCrumb from "../Components/BreadCrumb";
import Footer from "../Components/Footer";
import PublicNavbar from "../Components/PublicNavbar";
function RestaurantSignup() {
  const { register, handleSubmit } = useForm();
  async function onSubmit(data) {
    console.log(data);
    let response = await fetch("http://localhost:3000/res-signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    response = await response.json();
    //console.log(response)
    if (response.error != "") {
      Qual.errord("!Oh No", response.error);
    } else {
      Qual.successd("Success", response.message);
    }
  }


  return (
    <div>
      <PublicNavbar />
      <BreadCrumb title="Sign-Up"/>
      <br />
      
      <form
        className="contact__form__inner container"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="single-contact-form">
          <div className="contact-box name d-flex flex-wrap flex-md-nowrap flex-lg-nowrap justify-content-between">
            <input {...register('name')} type="text" name="name" placeholder="Name Of Restaurant" className="form-control" />
            <input {...register('email')} type="email" name="email" placeholder="E-mail" className="form-control"  />
            <input {...register('mobile')} type="tel" placeholder="enter mobile no." className="form-control" />
            <input {...register('password')}
              type="password"name="password"placeholder="Enter Password"className="form-control"
            />
          </div>
        </div>

        <div className="single-contact-form">
          <div className="contact-box name d-flex flex-wrap flex-md-nowrap flex-lg-nowrap justify-content-between">
            <select
              {...register("opentime")}
              name="opentime"
              className="form-control"
            >
              <option value="">Select Open Time</option>
              <option value="06:00">06:00</option>
              <option value="07:00">07:00</option>
              <option value="08:00">08:00</option>
              <option value="09:00">09:00</option>
              <option value="10:00">10:00</option>
              <option value="11:00">11:00</option>
              <option value="12:00">12:00</option>
            </select>
            <select
              {...register("closetime")}
              name="closetime"
              className="form-control"
            >
              <option value="">Select Close Time</option>
              <option value="06:00">06:00</option>
              <option value="07:00">07:00</option>
              <option value="08:00">08:00</option>
              <option value="09:00">09:00</option>
              <option value="10:00">10:00</option>
              <option value="11:00">11:00</option>
              <option value="12:00">12:00</option>
            </select>
           
          </div>
        </div>
        <div className="single-contact-form">
          <div className="contact-box name d-flex flex-wrap flex-md-nowrap flex-lg-nowrap justify-content-between">
          <select {...register('city')} name="city"  className="form-control">
            <option value="">Select City</option>
            <option value="amritsar">Amritsar</option>
            
          </select>
          <select {...register('state')} name="state"  className="form-control">
            <option value="">Select State</option>
            <option value="punjab">Punjab</option>
           </select>
          </div>
        </div>

        <div className="single-contact-form">
        <input {...register('description')} type="text" placeholder="enter description" className="form-control" />
          <textarea {...register('address')} name="address" id="address" cols="50" rows="3" placeholder="enter address" className="form-control"></textarea>
        </div>

        <div className="contact-btn">
          <button type="submit"  className="food__btn">
            submit
          </button>
        </div>
      </form>
      
      



      <Footer />

      
    </div>
  );
}
export default RestaurantSignup;
