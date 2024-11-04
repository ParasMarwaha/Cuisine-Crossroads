

function UserNavbar(){
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
                                       <li><a href="/about-us">About</a></li>
                                       <li><a href="/user/menu">Restaurants</a></li>
                                       

                                       <li><a href="/service">Service</a></li>
                                       
                                       <li><a href="/contact-us">Contact</a></li>

                                       <li><a href="/user/itemcart">View cart</a></li>

                                       <li><a href="/user/order-placed">Restaurants</a></li>

                                      
                                       <li  className="drop"><a href="">User</a>
                                           <ul  className="dropdown__menu">
                                               <li><a href="/user-signup">Sign Up</a></li>
                                               <li><a href="/user-signin">Sign In</a></li>
                                           </ul>
                                       </li>
                                   </ul>
                               </nav>
                               
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

export default UserNavbar