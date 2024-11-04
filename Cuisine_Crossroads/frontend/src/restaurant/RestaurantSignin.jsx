import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import BreadCrumb from "../Components/BreadCrumb";
import Footer from "../Components/Footer";
import PublicNavbar from "../Components/PublicNavbar";

function RestaurantSignin() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  async function onSubmit(data) {
    async function Check(data) {
      const check = `Select status from restaurant `;
      connection.query(check, (error) => {
        if (error) {
          res.json({ error: error.message, message: "" });
        } else {
          res.json({ error: "", message: "Status Updated" });
        }
      });
    }
    console.log(data)
    let response = await fetch("http://localhost:3000/res-signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    response = await response.json();
    console.log(response)
    localStorage.setItem("resToken", response.token);
    if (response.error != "") {
      Qual.errord("!Oh No", response.error);
    } else {
      navigate("/res/dashboard");
      Qual.successd("Approved", response.message);
    }
  }

  return (
    <div>
      <PublicNavbar />
      <BreadCrumb title="Sign-in"/>
        <br />
        <br />
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
      
      <Footer />
    </div>
  );
}

export default RestaurantSignin;
