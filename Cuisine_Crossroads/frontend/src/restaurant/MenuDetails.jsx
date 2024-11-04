import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
function MenuDetails(){
    const navigate = useNavigate()
    const location= useLocation()


const[menu,setMenu]=useState([])

async function ReadMenuofThisRestaurant(res_id){
    console.log(res_id)
    let token = localStorage.getItem("userToken");
    if (!token) {
      navigate("/user-signin");
    }

    let url = `http://localhost:3000/getresmenu/${res_id}`;
    let response = await fetch(url)
  
 
    response = await response.json();
    // console.log(response)
    if (response.error != "") {
      Qual.errord(response.error);
    } else {
      // console.log(response.records)
      setMenu(response.records);
    }

}


async function AddToCart(id){
    let token = localStorage.getItem("userToken");
    if (!token) {
      navigate("/user-signin");
    }

    let url= `http://localhost:3000/addtocart/${id}`;
    let response = await fetch(url,{
        method: "GET",
        headers: { Authorization: "Bearer " + token },
    })
    response = await response.json()
    console.log(response)
    if(response.error=="jwt expired"){
        navigate("/user-signin")
    } else if(response.error != ""){
        Qual.errord(response.error);
    } else {
      // console.log(response.records)
      Swal.fire({
        title: "Added To cart",
        text: "View from View Cart",
        icon: "success"
      });
      
      ;
    }
    
}




    useEffect(()=>{
        if(!location.state){
            navigate("/menu")
        }else{
            //console.log(location.state.res_id)
            ReadMenuofThisRestaurant(location.state.res_id)
        }
    },[])
    return(
        <>
       
        <div className="ht__bradcaump__area bg-image--18">
            <div className="ht__bradcaump__wrap d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="bradcaump__inner text-center">
                                <h2 className="bradcaump-title">Menu</h2>
                                <nav className="bradcaump-inner">
                                  <a className="breadcrumb-item" href="/">Restaurant</a>
                                  <span className="brd-separetor"><i className="zmdi zmdi-long-arrow-right"></i></span>
                                  <span className="breadcrumb-item active">Menu</span>
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
                                    
                                    {menu.map((value)=>(    <div key={value.id} className="single__food__list d-flex wow fadeInUp">
                                    <div  className="food__list__thumb">
                                        <a href="menu-details.html">
                                            <img  src={"http://localhost:3000" + value.image}style={{height:"263px",width:"469px"}}/>
                                        </a>
                                    </div>
                                    <div className="food__list__inner d-flex align-items-center justify-content-between">
                                        <div className="food__list__details">
                                            <h2><a href="menu-details.html">{value.name}</a></h2>
                                            <p>{value.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem modi hic error eius minima provident incidunt. Distinctio quasi assumenda nulla.</p>
                                            <div className="list__btn">
                                                <button className="food__btn grey--btn theme--hover" onClick={() => AddToCart(value.id)}  >Add To Cart</button>
                                            </div>
                                        </div>
                                        <div className="food__rating">

                                            <div className="list__food__prize">
                                                <span>${value.price}</span>
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
                                </div>))}
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>

       
        </>
    )
}

export default MenuDetails