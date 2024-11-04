import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useRazorpay from "react-razorpay";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../../App";

function CheckOut() {
  const { cartData } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation()
  //   console.log(cartData);

  let totalCartPrice = 0;

  const [user, setUser] = useState([]);
  async function UserInfo() {
    //console.log(user_id)
    let token = localStorage.getItem("userToken");
    if (!token) {
      navigate("/user-signin");
    }

    let url = `http://localhost:3000/readuser`;
    let response = await fetch(url, {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    });
    response = await response.json();
    // console.log(response)
    if (response.error == "jwt expired") {
      navigate("/user-signin");
    } else if (response.error != "") {
      Qual.errord(response.error);
    } else {
      //console.log(response.records)
      setUser(response.records[0]);
    }
  }

  useEffect(() => {
    UserInfo()
    
  }, []);

  function checkPaymentMode(data) {
    console.log(data);
    if (data.payment_mode === "COD") {
      placeOrder(null)
    } else if (data.payment_mode === "Online") {
      //console.log(location.state.total)
      initiateRazorpay()
    }
  }

  const Razorpay = useRazorpay();

  async function initiateRazorpay() {
    let options = {
      key: "rzp_test_A3RM3Asww6uWvF",
      currency: "INR",
      amount: location.state.total * 100,
      // amount: 0,
      name: "Cuisine Crossroads",
      description: "Online Food Delivery",
      image: "/images/logo/Cuisine.png",
      // handler: function (response) {
      //     let payment_id = response.razorpay_payment_id;
      //     if (payment_id !== '') {
      //         alert(response.razorpay_payment_id);
      //         alert('Payment Done.');
      //     } else {
      //         alert('Payment Failed.');
      //     }
      // },
      handler: function (response) {
        placeOrder(response)
    },

      prefill: {
                //name: user[0].fullname,
                //email: user[0].email,
                //contact: user[0].phone,

      },
      theme: {
        color: "#F29600",
        // hide_topbar: false
      },
    };

    // options.amount = cartTotal * 100;

    let rzp = new window.Razorpay(options);
    rzp.open();
  }

  async function placeOrder(response) {
    console.log(response)
    let data = getValues();

    data["cart"] = cartData;
    data["total"] = location.state.total;

    if (!response) {
      // COD
      data["payment_mode"] = "COD";
    } else {
      // Online
      data["payment_mode"] = "Online";
    }

    const token = localStorage.getItem("userToken");
    const url = "http://localhost:3000/place-order";

    let res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(data),
    });
    res = await res.json();
    console.log(res);
    if (res.error === '') {
      navigate('/user/order-placed', {state: {bill_id: res.bill_id}});
        }

  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({ defaultValues: user });

  return (
    <>
      <div className="ht__bradcaump__area bg-image--18">
        <div className="ht__bradcaump__wrap d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="bradcaump__inner text-center">
                  <h2 className="bradcaump-title">Checkout</h2>
                  <nav className="bradcaump-inner">
                    <a className="breadcrumb-item" href="/user/home">
                      Home
                    </a>
                    <span className="brd-separetor">
                      <i className="zmdi zmdi-long-arrow-right"></i>
                    </span>
                    <span className="breadcrumb-item active">Checkout</span>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="htc__checkout bg--white section-padding--lg">
        <div className="checkout-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12 mb-30">
                <div id="checkout-accordion">
                  <div className="single-accordion">
                    <button
                      className="accordion-head collapsed btn btn-dander"
                      data-toggle="collapse"
                      data-parent="#checkout-accordion"
                      href="#billing-method"
                    >
                      1. Payment Area
                    </button>
                    <div id="billing-method" className="collapse">
                      <div className="accordion-body billing-method fix">
                        <div className="accordion-body billing-method fix">
                          <form
                          
                            onSubmit={handleSubmit(checkPaymentMode)}
                            className="billing-form checkout-form"
                          >
                            <div className="row">
                              <div className=" col-12 mb--20">
                                <input
                                  {...register("full_name")}
                                  type="text"
                                  placeholder="Full Name"
                                />
                              </div>

                              <div className="col-12 mb--20">
                                <input
                                  {...register("email")}
                                  type="email"
                                  placeholder="E-Mail"
                                />
                              </div>
                              <div className="col-12 mb--20">
                                <input
                                  {...register("address")}
                                  placeholder=" Address"
                                  type="text"
                                />
                              </div>

                              <div className="col-12 mb--20">
                                <input
                                  {...register("landmark")}
                                  placeholder="Near-By Landmark"
                                  type="text"
                                />
                              </div>

                              <div className="col-12 mb--20">
                                <input
                                  {...register("city")}
                                  placeholder="Town / City"
                                  type="text"
                                />
                              </div>
                              <div className="col-md-6 col-12 mb--20">
                                <input
                                  {...register("state")}
                                  type="text"
                                  placeholder="State / County"
                                />
                              </div>

                              <div className="col-md-6 col-12">
                                <input
                                  {...register("phone")}
                                  placeholder="Phone Number"
                                  type="text"
                                />
                              </div>
                              <div className="col-12 mb--20">
                                <input
                                  {...register("order_notes")}
                                  placeholder="Order Notes"
                                  type="text"
                                />
                              </div>
                            </div>
                            <div className="form-check col-12 mb--20">
                              <input
                              style={{height:"30px"}}
                                className="form-check-input"
                                {...register("payment_mode")}
                                type="radio"
                                name="payment_mode"
                                value="COD"
                                id="COD"
                              />
                              <label className="form-ckeck-label" htmlFor="COD">Cash On Delivery :</label>
                            </div>
                            <div className="form-check col-12 mb--20   ">
                              
                              <input
                              style={{height:"30px"}}
                                className="form-check-input"
                                {...register("payment_mode")}
                                type="radio"
                                name="payment_mode"
                                value="Online"
                                id="Online" 
                              />
                              <label className="form-check-label" htmlFor="Online">Online Payment :</label>
                            </div>

                            <div className="col-md-6 col-12">
                              <button className="btn btn-secondary">
                                Place Order
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-12 mb-30">
                <div className="order-details-wrapper">
                  <h2>your order</h2>
                  <div className="order-details">
                    <form action="#">
                      <ul>
                        <li>
                          <p className="strong">product</p>
                          <p className="strong">total</p>
                        </li>

                        {cartData.map((value) => {
                          totalCartPrice += value.price * value.quantity;

                          return (
                            <li key={value.id}>
                              <p>{value.name}</p>
                              <p>{value.price * value.quantity}</p>
                            </li>
                          );
                        })}

                        <li>
                          <p className="strong">order total</p>
                          <p className="strong">{totalCartPrice}</p>
                        </li>
                      </ul>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CheckOut;
