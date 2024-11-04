import Footer from "./Components/Footer"
import PublicNavbar from "./Components/PublicNavbar"

function Contact (){
    return(
        <>
        <PublicNavbar/>

        <div class="ht__bradcaump__area bg-image--24">
            <div class="ht__bradcaump__wrap d-flex align-items-center">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <div class="bradcaump__inner text-center brad__white">
                                <h2 class="bradcaump-title">contact us</h2>
                                <nav class="bradcaump-inner">
                                  <a class="breadcrumb-item" href="/">Home</a>
                                  <span class="brd-separetor"><i class="zmdi zmdi-long-arrow-right"></i></span>
                                  <span class="breadcrumb-item active">contact us</span>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="contact__map__area">
            <div class="contact__map__wrapper">
                <div class="contact__map__left">
                    <div class="map__thumb">
                        <img src="images/banner/contact/1.jpg" alt="images"/>
                    </div>
                </div>
                <div class="contact__map__right">
                    <div class="htc__google__map">
                        <div class="map-contacts">
                            <div id="googlemap"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="food__contact">
            <div class="food__contact__wrapper d-flex flex-wrap flex-lg-nowrap">
                
                <div class="contact">
                    <div class="ct__icon">
                        <i class="zmdi zmdi-phone"></i>
                    </div>
                    <div class="ct__address">
                        <p><a href="#">+91 7340 896 847</a></p>
                        <p><a href="#">+91 6284 013 726</a></p>
                    </div>
                </div>
                
                <div class="contact">
                    <div class="ct__icon">
                        <i class="zmdi zmdi-home"></i>
                    </div>
                    <div class="ct__address">
                        <p>Ranjit Avenue D-Block <br/> Amritsar, Punjab</p>
                    </div>
                </div>
                
                <div class="contact">
                    <div class="ct__icon">
                        <i class="zmdi zmdi-email"></i>
                    </div>
                    <div class="ct__address">
                        <p><a href="#">deliveryCC@e-mail.com</a></p>
                        <p><a href="#">Cuisine@e-mail.com</a></p>
                    </div>
                </div>
                
            </div>
        </div>
     

        <Footer/>
        </>
    )
}

export default Contact