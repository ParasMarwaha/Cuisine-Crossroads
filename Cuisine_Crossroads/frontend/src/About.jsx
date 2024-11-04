import Footer from "./Components/Footer"
import PublicNavbar from "./Components/PublicNavbar"

function About (){
    return (
        <>
        <PublicNavbar/>

        <div className="ht__bradcaump__area bg-image--20">
            <div className="ht__bradcaump__wrap d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="bradcaump__inner text-center brad__white">
                                <h2 className="bradcaump-title">about us</h2>
                                <nav className="bradcaump-inner">
                                  <a className="breadcrumb-item" href="/">Home</a>
                                  <span className="brd-separetor"><i className="zmdi zmdi-long-arrow-right"></i></span>
                                  <span className="breadcrumb-item active">about us</span>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section className="food__about__us__area section-padding--lg bg--white">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section__title title__style--2 service__align--center">
                            <h2 className="title__line">Why Choose Us</h2>
                            <p>The process of our service </p>
                        </div>
                    </div>
                </div>
                <div className="row mt--80">
                    <div className="col-lg-6 col-sm-12 col-md-12 align-self-center">
                        <div className="food__container">
                            <div className="food__inner">
                                <h2>Watch Videos to Know more About Aahar</h2>
                                <p>Lorem ipsum dolor sit amsa vadip isicing elit, seddei han  liqua. Ut enim ad miveniam, quis noion ullam.</p>
                            </div>
                            <div className="food__details">
                                <p>Lorem ipsum dolor sit amadipisicing elit, seddei smod dolore maaliqua. Ut enim ad miveniam, quis noion ullaml aboris nisi umt aliquip cequatL ipsum dolor sit ac adipis icling elit, se eiusmod tempor incididunt labmn hmagna aliqua. Ut enim ad minim veniam, quis nostr</p>
                            </div>
                            <div className="food__tab">
                                <div className="food__nav nav nav-tabs d-block" role="tablist">
                                    <a className="active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">1. History of Aahar (2000-2017)</a>

                                    <a id="nav-prepare-tab" data-toggle="tab" href="#prepare" role="tab" aria-controls="prepare" aria-selected="false">2. How  We prepare your meals</a>

                                    <a id="nav-meals-tab" data-toggle="tab" href="#meals" role="tab" aria-controls="meals" aria-selected="false">3. How  We prepare your meals</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12 col-md-12">
                        <div className="food__video__wrap tab-content" id="nav-tabContent">

                            <div className="video__owl__activation tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div className="about__video__activation owl-carousel owl-theme">
                                    <div className="about__video__inner">
                                        <div className="about__video__thumb">
                                            <img src="/images/about/video/1.jpg" alt="video images"/>
                                            <a className="video-play-button" href="https://www.youtube.com/watch?v=wJ9Ll8uD07I"><img src="/images/icon/play.png" alt="viveo play icon"/></a>
                                        </div>
                                        <div className="about__video__content">
                                            <span>1</span>
                                        </div>
                                    </div>
                                    <div className="about__video__inner">
                                        <div className="about__video__thumb">
                                            <img src="/images/about/video/2.jpg" alt="video images"/>
                                            <a className="video-play-button" href="https://www.youtube.com/watch?v=wJ9Ll8uD07I"><img src="/images/icon/play.png" alt="viveo play icon"/></a>
                                        </div>
                                        <div className="about__video__content">
                                            <span>2</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="video__owl__activation tab-pane fade" id="prepare" role="tabpanel" aria-labelledby="nav-prepare-tab">
                                <div className="about__video__activation owl-carousel owl-theme">
                                    <div className="about__video__inner">
                                        <div className="about__video__thumb">
                                            <img src="images/about/video/2.jpg" alt="video images"/>
                                            <a className="video-play-button" href="https://www.youtube.com/watch?v=wJ9Ll8uD07I"><img src="images/icon/play.png" alt="viveo play icon"/></a>
                                        </div>
                                        <div className="about__video__content">
                                            <span>1</span>
                                        </div>
                                    </div>
                                    <div className="about__video__inner">
                                        <div className="about__video__thumb">
                                            <img src="images/about/video/3.jpg" alt="video images"/>
                                            <a className="video-play-button" href="https://www.youtube.com/watch?v=wJ9Ll8uD07I"><img src="images/icon/play.png" alt="viveo play icon"/></a>
                                        </div>
                                        <div className="about__video__content">
                                            <span>2</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           
                            <div className="video__owl__activation tab-pane fade" id="meals" role="tabpanel" aria-labelledby="nav-meals-tab">
                                <div className="about__video__activation owl-carousel owl-theme">
                                    <div className="about__video__inner">
                                        <div className="about__video__thumb">
                                            <img src="images/about/video/3.jpg" alt="video images"/>
                                            <a className="video-play-button" href="https://www.youtube.com/watch?v=wJ9Ll8uD07I"><img src="images/icon/play.png" alt="viveo play icon"/></a>
                                        </div>
                                        <div className="about__video__content">
                                            <span>1</span>
                                        </div>
                                    </div>
                                    <div className="about__video__inner">
                                        <div className="about__video__thumb">
                                            <img src="images/about/video/1.jpg" alt="video images"/>
                                            <a className="video-play-button" href="https://www.youtube.com/watch?v=wJ9Ll8uD07I"><img src="images/icon/play.png" alt="viveo play icon"/></a>
                                        </div>
                                        <div className="about__video__content">
                                            <span>2</span>
                                        </div>
                                    </div>
                                    <div className="about__video__inner">
                                        <div className="about__video__thumb">
                                            <img src="images/about/video/2.jpg" alt="video images"/>
                                            <a className="video-play-button" href="https://www.youtube.com/watch?v=wJ9Ll8uD07I"><img src="images/icon/play.png" alt="viveo play icon"/></a>
                                        </div>
                                        <div className="about__video__content">
                                            <span>2</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="food__team__area team--2 bg--white section-padding--lg bg-image--21">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="section__title title__style--2 service__align--center section__bg__black">
                            <h2 className="title__line">Meet Our Team</h2>
                            <p>The process of our service </p>
                        </div>
                    </div>
                </div>
                <div className="row mt--40">
                    <div className="col-lg-4 col-md-4">
                        <div className="team text-center foo">
                            <div className="team__thumb">
                                <a href="">
                                    <img src="images/team/team-list/2.jpg" alt="team images"/>
                                </a>
                            </div>
                            <div className="team__content">
                                <div className="team__info">
                                    <h4><a href="">Najnin Supa</a></h4>
                                    <h6>Founder</h6>
                                </div>
                                <p>adipisicing elid tempor in dolore magna alua. Ut enim ad minim veniamexercitation llamco laboris nisi ut aliqui</p>
                                <ul className="team__social__net">
                                    <li><a href=""><i className="zmdi zmdi-google"></i></a></li>
                                    <li><a href=""><i className="zmdi zmdi-rss"></i></a></li>
                                    <li><a href=""><i className="zmdi zmdi-tumblr"></i></a></li>
                                    <li><a href=""><i className="zmdi zmdi-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4">
                        <div className="team text-center foo">
                            <div className="team__thumb">
                                <a href="">
                                    <img src="images/team/team-list/3.jpg" alt="team images"/>
                                </a>
                            </div>
                            <div className="team__content">
                                <div className="team__info">
                                    <h4><a href="">Wiliam Millar</a></h4>
                                    <h6>Co-Founder</h6>
                                </div>
                                <p>adipisicing elid tempor in dolore magna alua. Ut enim ad minim veniamexercitation llamco laboris nisi ut aliqui</p>
                                <ul className="team__social__net">
                                    <li><a href=""><i className="zmdi zmdi-google"></i></a></li>
                                    <li><a href=""><i className="zmdi zmdi-rss"></i></a></li>
                                    <li><a href=""><i className="zmdi zmdi-tumblr"></i></a></li>
                                    <li><a href=""><i className="zmdi zmdi-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4">
                        <div className="team text-center foo">
                            <div className="team__thumb">
                                <a href="">
                                    <img src="images/team/team-list/4.jpg" alt="team images"/>
                                </a>
                            </div>
                            <div className="team__content">
                                <div className="team__info">
                                    <h4><a href="">Irin Pervin</a></h4>
                                    <h6>Supplier</h6>
                                </div>
                                <p>adipisicing elid tempor in dolore magna alua. Ut enim ad minim veniamexercitation llamco laboris nisi ut aliqui</p>
                                <ul className="team__social__net">
                                    <li><a href=""><i className="zmdi zmdi-google"></i></a></li>
                                    <li><a href=""><i className="zmdi zmdi-rss"></i></a></li>
                                    <li><a href=""><i className="zmdi zmdi-tumblr"></i></a></li>
                                    <li><a href=""><i className="zmdi zmdi-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

            </div>
            </div>
        </section>

        <Footer/>
        </>
    )
} 

export default About