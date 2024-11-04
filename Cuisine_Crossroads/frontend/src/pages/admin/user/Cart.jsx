import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../App";



function Cart() {
  const { cartData, ReadCartCount } = useContext(UserContext);
  //   console.log(cartData)

  let totalCartPrice = 0;

  const navigate = useNavigate();
  async function RemoveCartItem(id) {
    let url = `http://localhost:3000/removecartitem/${id}`;
    let response = await fetch(url, { method: "DELETE" });

    response = await response.json();
    ReadCartCount();
    //console.log(response);
    if(response.error==="jwt expired"){
      navigate("/user-signin")
    }
    else if (response.error !== "") {
      Qual.errord(response.error);
    } else {
      // console.log(response.records)
      navigate("/user/itemcart");
    }
  }
  async function CheckOut() {
    navigate("/user/checkout");
  }

  async function UpdateQuantity(food_id,action) {
    //console.log(food_id,action)
    let token = localStorage.getItem("userToken");
    let path = `http://localhost:3000/update-cart-item/${food_id}/${action}`;
    let response = await fetch(path, {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    });
    response = await response.json();
    //console.log(response);
    ReadCartCount()
  }

  return (
    <>
      <div className="ht__bradcaump__area bg-image--18">
        <div className="ht__bradcaump__wrap d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="bradcaump__inner text-center">
                  <h2 className="bradcaump-title">Cart</h2>
                  <nav className="bradcaump-inner">
                    <a className="breadcrumb-item" href="/">
                      Home
                    </a>
                    <span className="brd-separetor">
                      <i className="zmdi zmdi-long-arrow-right"></i>
                    </span>
                    <span className="breadcrumb-item active">Cart</span>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cart-main-area section-padding--lg bg--white">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 ol-lg-12">
              <div className="table-content table-responsive">
                <table>
                  <thead>
                    <tr className="title-top">
                      <th className="product-thumbnail">Image</th>
                      <th className="product-name">Product</th>
                      <th className="product-price">Price</th>
                      <th className="product-quantity">Quantity</th>
                      <th className="product-subtotal">Total</th>
                      <th className="product-remove">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartData.map((value) => {
                      totalCartPrice += value.price * value.quantity;

                      return (
                        <tr key={value.id}>
                          {/* {(totalCartPrice += value.price * value.quantity)} */}
                          <td className="product-thumbnail">
                            {" "}
                            <img
                              src={"http://localhost:3000" + value.image}
                              style={{ height: "100px" }}
                            />
                          </td>
                          <td className="product-name">{value.name}</td>
                          <td className="product-price">{value.price}</td>
                          <td className="product-price">
                            <span
                              onClick={() =>
                                UpdateQuantity(value.food_id, "dec")
                              }
                              className="btn btn-sm btn-warning"
                            >
                              -
                            </span>
                            <span>{value.quantity}</span>
                            <span
                              onClick={() =>
                                UpdateQuantity(value.food_id, "inc")
                              }
                              className="btn btn-sm btn-warning"
                            >
                              +
                            </span>
                          </td>
                          <td className="product-subtotal">
                            {value.price * value.quantity}
                          </td>
                          <td className="product-remove">
                            <button
                              onClick={() => RemoveCartItem(value.id)}
                              type="button"
                              className="btn btn-danger"
                            >
                              X
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <div className="cartbox__btn">
                <ul className="cart__btn__list d-flex flex-wrap flex-md-nowrap flex-lg-nowrap justify-content-between">
                  <li>
                    <Link
                      
                      to= "/user/checkout"
                      state ={{total:totalCartPrice}}
                      
                    >
                      Check Out
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 offset-lg-6">
              <div className="cartbox__total__area">
                <div className="cartbox-total d-flex justify-content-between">
                  <ul className="cart__total__list">
                    <li>Sub Total</li>
                  </ul>
                  <ul className="cart__total__tk">
                    <li>{totalCartPrice}</li>
                  </ul>
                </div>
                <div className="cart__total__amount">
                  <span>Grand Total</span>
                  <span>{totalCartPrice}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
