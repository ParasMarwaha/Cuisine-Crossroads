import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLogin from "./Admin/AdminLogin";
//import "./App.css";
import { createContext, useEffect, useState } from "react";
import About from "./About";
import Category from "./Admin/Category";
import CheckRes from "./Admin/CheckRes";
import Changepassword from "./Admin/changepasspord";
import Dashboard from "./Admin/dashboard";
import Contact from "./Contact";
import Gallery from "./Gallery";
import Home from "./Home";
import AdminLayout from "./Layouts/AdminLayout";
import ResLayout from "./Layouts/ResLayout";
import UserLayout from "./Layouts/UserLayout";
import OrderDetails from "./pages/OrderDetails";
import OrderPlaced from "./pages/OrderPlaced";
import Cart from "./pages/admin/user/Cart";
import CheckOut from "./pages/admin/user/CheckOut";
import Menu from "./pages/admin/user/Menu";
import Service from "./pages/admin/user/Service";
import UserDashboard from "./pages/admin/user/UserDashboard";
import User_Signin from "./pages/admin/user/User_Signin";
import UserSignup from "./pages/admin/user/User_Signup";
import Userchangepass from "./pages/admin/user/Userchangepass";
import AddMenu from "./restaurant/AddMenu";
import MenuDetails from "./restaurant/MenuDetails";
import RestaurantDashboard from "./restaurant/RestaurantDashboard";
import RestaurantSignin from "./restaurant/RestaurantSignin";
import RestaurantSignup from "./restaurant/RestaurantSignup";
import Pdf from "./Admin/Pdf.jsx";

export const UserContext = createContext(null);

function App() {
  const [cartData, setCartData] = useState([])
  const [cartCount, setCartCount] = useState(0);

  async function ReadCartCount() {
    let token = localStorage.getItem("userToken");

    if (!token) {
      setCartCount(0);
    } else {
      let path = "http://localhost:3000/read-cart-data";

      let response = await fetch(path, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      response = await response.json();
      // console.log(response);

      if (response.error != "") {
        setCartCount(0);
      } else {
        // console.log(response.records)
        setCartData(response.records);
        setCartCount(response.records.length);
      }
    }
  }

  useEffect(() => {
    ReadCartCount();
  }, []);
  return (
    <div>
      <BrowserRouter>
        <UserContext.Provider
          value={{ cartCount, setCartCount, ReadCartCount, cartData, setCartData }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/user-signup" element={<UserSignup />} />
            <Route path="/user-signin" element={<User_Signin />} />
            <Route path="/res-signup" element={<RestaurantSignup />} />
            <Route path="/res-signin" element={<RestaurantSignin />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about-us" element={<About />} />
            
            <Route path="/service" element={<Service />} />
            
            

            <Route path="/res" element={<ResLayout />}>
              <Route path="dashboard" element={<RestaurantDashboard />} />
              <Route path="menu" element={<AddMenu />} />
            </Route>

            <Route path="/user" element={<UserLayout />}>
              <Route path="userdashboard" element={<UserDashboard />} />
              <Route path="userchangepass" element={<Userchangepass />} />
              <Route path="menu" element={<Menu />} />
              <Route path="menudetails" element={<MenuDetails />} />
              <Route path="itemcart" element={<Cart />} />
              <Route path="checkout" element={<CheckOut/>}/>
              <Route path="order-placed" element={<OrderPlaced/>}/>
              <Route path="order-details" element={<OrderDetails/>}/>
            </Route>

            <Route path="/admin" element={<AdminLayout />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="change-password" element={<Changepassword />} />
              <Route path="checkres" element={<CheckRes />} />
              <Route path="category" element={<Category />} />
              <Route path="dummy" element={<Pdf />} />
            </Route>
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
