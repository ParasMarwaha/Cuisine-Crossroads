


function AdminNavbar(){
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
                                     <li><a href="/admin/dashboard">Admin- Home</a></li>
                                     <li><a href="/admin/checkres">Check-Restaurants</a></li>
                                     <li><a href="/admin/category">Manage Category</a></li>
                                     <li><a href="/admin/change-password">Change-password</a></li>
                                     

                                     
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

 export default AdminNavbar