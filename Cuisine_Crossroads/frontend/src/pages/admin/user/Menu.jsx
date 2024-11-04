import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function Menu(){

    const navigate = useNavigate();

    const [res, setRes] = useState([]);
  
    async function ReadMenu() {
      let token = localStorage.getItem("userToken");
      if (!token) {
        navigate("/user-signin");
      }
  
      let url = "http://localhost:3000/menu";
      let response = await fetch(url, {
        method: "GET",
        headers: { Authorization: "Bearer " + token },
      });
      response = await response.json();
      // console.log(response)
      if (response.error != "") {
        Qual.errord(response.error);
      } else {
        // console.log(response.records)
        setRes(response.records);
      }
    }
  
    useEffect(() => {
      
      ReadMenu();
    }, []);


    return (
        <>
        
        <div className="ht__bradcaump__area bg-image--18">
            <div className="ht__bradcaump__wrap d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="bradcaump__inner text-center">
                                <h2 className="bradcaump-title">Resaturants</h2>
                                <nav className="bradcaump-inner">
                                  <a className="breadcrumb-item" href="/">Home</a>
                                  <span className="brd-separetor"><i className="zmdi zmdi-long-arrow-right"></i></span>
                                  <span className="breadcrumb-item active">Restaurants</span>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section className="food__menu__grid__area section-padding--lg">
            <div className="container">
               
                <div className="row mt--30">
                    <div className="col-lg-12">
                        <div className="fd__tab__content tab-content" id="nav-tabContent">
                            
                            <div className="food__list__tab__content tab-pane fade show active" id="nav-all" role="tabpanel">
                                    
                                    {res.map((value)=>(    <div key={value.id} className="single__food__list d-flex wow fadeInUp">
                                    <div className="food__list__thumb">
                                        <a href="menu-details.html">
                                            <img  src={"http://localhost:3000" + value.image}style={{height:"263px",width:"469px"}}/>
                                        </a>
                                    </div>
                                    <div className="food__list__inner d-flex align-items-center justify-content-between">
                                        <div className="food__list__details">
                                            <h2><a href="menu-details.html">{value.name}</a></h2>
                                            <p>{value.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem modi hic error eius minima provident incidunt. Distinctio quasi assumenda nulla.</p>
                                            <div className="list__btn">
                                                <Link className="food__btn grey--btn theme--hover" to="/user/menudetails" state ={{res_id:value.id}} >See Menu</Link>
                                            </div>
                                        </div>
                                        <div className="food__rating">
                                          
                                            <ul className="rating">
                                                <li><i className="zmdi zmdi-star"></i></li>
                                                <li><i className="zmdi zmdi-star"></i></li>
                                                <li><i className="zmdi zmdi-star"></i></li>
                                                <li><i className="zmdi zmdi-star"></i></li>
                                                <li className="rating__opasity"><i className="zmdi zmdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>))}
                                {/* <div className="single__food__list d-flex wow fadeInUp">
                                    <div className="food__list__thumb">
                                        <a href="menu-details.html">
                                            <img src="images/menu-list/1.jpg" alt="list food images"/>
                                        </a>
                                    </div>
                                    <div className="food__list__inner d-flex align-items-center justify-content-between">
                                        <div className="food__list__details">
                                            <h2><a href="menu-details.html">Spicy Beef Burger</a></h2>
                                            <p>Lorem ipsum dolor sit aLorem ipsum dolor sit amet, consectetu adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolmagna aliqua. enim ad minim veniam, quis nomagni dolores eos qnumquam.</p>
                                            <div className="list__btn">
                                                <a className="food__btn grey--btn theme--hover" href="menu-details.html">Order Now</a>
                                            </div>
                                        </div>
                                        <div className="food__rating">
                                            <div className="list__food__prize">
                                                <span>$30</span>
                                            </div>
                                            <ul className="rating">
                                                <li><i className="zmdi zmdi-star"></i></li>
                                                <li><i className="zmdi zmdi-star"></i></li>
                                                <li><i className="zmdi zmdi-star"></i></li>
                                                <li><i className="zmdi zmdi-star"></i></li>
                                                <li className="rating__opasity"><i className="zmdi zmdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div> */}
                                
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>

       
        </>
    )
}
export default Menu