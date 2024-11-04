import Footer from "./Components/Footer"
import PublicNavbar from "./Components/PublicNavbar"

function Gallery() {

    
    return(
        <>
        <PublicNavbar/>

        <div className="ht__bradcaump__area bg-image--18">
            <div className="ht__bradcaump__wrap d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="bradcaump__inner text-center">
                                <h2 className="bradcaump-title">our gallery</h2>
                                <nav className="bradcaump-inner">
                                  <a className="breadcrumb-item" href="index.html">Home</a>
                                  <span className="brd-separetor"><i className="zmdi zmdi-long-arrow-right"></i></span>
                                  <span className="breadcrumb-item active">our gallery</span>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="food__gallery__area section-padding--lg bg--white">
            <div className="container portfolio__area">
                <div className="row">
                    
                </div>
                <div className="row portfolio__wrap mt--50">
                    
                    <div className="col-lg-7 pro__item cat--4 cat--2">
                        <div className="portfolio foo">
                            <img src="images/gallery/portfolio/1.jpg" alt="portfolio images"/>
                            <div className="portfolio__hover">
                                <div className="portfolio__action">
                                    <ul className="portfolio__list">
                                        <li><a href="/images/gallery/big-img/1.jpg" data-lightbox="grportimg" data-title="My caption"><i className="fa fa-eye"></i></a></li>
                                        <li><a href="/"><i className="fa fa-link"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-5 pro__item cat--4 cat--1 cat--5">
                        <div className="portfolio foo">
                            <img src="images/gallery/portfolio/2.jpg" alt="portfolio images"/>
                            <div className="portfolio__hover">
                                <div className="portfolio__action">
                                    <ul className="portfolio__list">
                                        <li><a href="/images/gallery/big-img/2.jpg" data-lightbox="grportimg" data-title="My caption"><i className="fa fa-eye"></i></a></li>
                                        <li><a href="#"><i className="fa fa-link"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-5 pro__item cat--4 cat--3 cat--5">
                        <div className="portfolio foo">
                            <img src="/images/gallery/portfolio/3.jpg" alt="portfolio images"/>
                            <div className="portfolio__hover">
                                <div className="portfolio__action">
                                    <ul className="portfolio__list">
                                        <li><a href="/images/gallery/big-img/3.jpg" data-lightbox="grportimg" data-title="My caption"><i className="fa fa-eye"></i></a></li>
                                        <li><a href="#"><i className="fa fa-link"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-7 pro__item cat--4 cat--2">
                        <div className="portfolio foo">
                            <img src="/images/gallery/portfolio/4.jpg" alt="portfolio images"/>
                            <div className="portfolio__hover">
                                <div className="portfolio__action">
                                    <ul className="portfolio__list">
                                        <li><a href="/images/gallery/big-img/4.jpg" data-lightbox="grportimg" data-title="My caption"><i className="fa fa-eye"></i></a></li>
                                        <li><a href="#"><i className="fa fa-link"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-7 pro__item cat--4 cat--1 cat--2 cat--5">
                        <div className="portfolio foo">
                            <img src="/images/gallery/portfolio/5.jpg" alt="portfolio images"/>
                            <div className="portfolio__hover">
                                <div className="portfolio__action">
                                    <ul className="portfolio__list">
                                        <li><a href="/images/gallery/big-img/5.jpg" data-lightbox="grportimg" data-title="My caption"><i className="fa fa-eye"></i></a></li>
                                        <li><a href="#"><i className="fa fa-link"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-5 pro__item cat--4 cat--3">
                        <div className="portfolio foo">
                            <img src="/images/gallery/portfolio/6.jpg" alt="portfolio images"/>
                            <div className="portfolio__hover">
                                <div className="portfolio__action">
                                    <ul className="portfolio__list">
                                        <li><a href="images/gallery/big-img/6.jpg" data-lightbox="grportimg" data-title="My caption"><i className="fa fa-eye"></i></a></li>
                                        <li><a href="#"><i className="fa fa-link"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-5 pro__item cat--4 cat--2">
                        <div className="portfolio foo">
                            <img src="/images/gallery/portfolio/7.jpg" alt="portfolio images"/>
                            <div className="portfolio__hover">
                                <div className="portfolio__action">
                                    <ul className="portfolio__list">
                                        <li><a href="/images/gallery/big-img/7.jpg" data-lightbox="grportimg" data-title="My caption"><i className="fa fa-eye"></i></a></li>
                                        <li><a href="#"><i className="fa fa-link"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-7 pro__item cat--4 cat--1 cat--3 cat--5">
                        <div className="portfolio foo">
                            <img src="/images/gallery/portfolio/8.jpg" alt="portfolio images"/>
                            <div className="portfolio__hover">
                                <div className="portfolio__action">
                                    <ul className="portfolio__list">
                                        <li><a href="/images/gallery/big-img/8.jpg" data-lightbox="grportimg" data-title="My caption"><i className="fa fa-eye"></i></a></li>
                                        <li><a href="#"><i className="fa fa-link"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    

                </div>
            </div>
        </div>


        <Footer/>
        </>
    )
}
export default Gallery