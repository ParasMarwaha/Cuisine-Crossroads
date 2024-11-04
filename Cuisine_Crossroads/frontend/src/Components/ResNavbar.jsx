
function ResNavbar(){
    return(
        <div>
        <header  className="htc__header bg--white">
             
             <div id="sticky-header-with-topbar"  className="mainmenu__wrap sticky__header">
                 <div  className="container">
                     <div  className="row">
                         <div  className="col-lg-2 col-sm-4 col-md-6 order-1 order-lg-1">
                             <div  className="logo">
                                 <a href="/">
                                     <img src="/images/logo/Cuisine.png" alt="logo images"/>
                                 </a>
                             </div>
                         </div>
                         <div  className="col-lg-9 col-sm-4 col-md-2 order-3 order-lg-2">
                             <div  className="main__menu__wrap">
                                 <nav  className="main__menu__nav d-none d-lg-block">
                                     <ul  className="mainmenu">
                                         <li  className="drop"><a href="/">Home</a>
                                         </li>
                                         <li><a href="about-us.html">About</a></li>
                                         
                                         <li><a href="/res/menu">Add Menu</a></li>
                                         
                                         <li  className="drop"><a href="#">Pages</a>
                                             <ul  className="dropdown__menu">
                                                 <li><a href="service.html">Service</a></li>
                                                 <li><a href="cart.html">Cart Page</a></li>
                                                 <li><a href="checkout.html">Checkout Page</a></li>
                                                 <li><a href="contact.html">Contact Page</a></li>
                                             </ul>
                                         </li>
                                         <li><a href="contact.html">Contact</a></li>
 
                                     </ul>
                                 </nav>
                                 
                             </div>
                         </div>
                         <div  className="col-lg-1 col-sm-4 col-md-4 order-2 order-lg-3">
                             <div  className="header__right d-flex justify-content-end">
                                 <div  className="log__in">
                                     <a  className="accountbox-trigger" href="#"><i  className="zmdi zmdi-account-o"></i></a>
                                 </div>
                                 <div  className="shopping__cart">
                                     <a  className="minicart-trigger" href="#"><i  className="zmdi zmdi-shopping-basket"></i></a>
                                     <div  className="shop__qun">
                                         <span>03</span>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                   
                         <div  className="mobile-menu d-block d-lg-none"></div>
                     
                 </div>
             </div>
             
         </header>
        </div>
    )
 }

 export default ResNavbar