import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function AddMenu() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  async function onSubmit(data) {
    console.log(data);
    let token = localStorage.getItem("resToken");
    if (!token) {
      navigate("/res-signin");
    } else {
      data["token"] = token;
      console.log(data["token"]);
      let response = await fetch("http://localhost:3000/res/menu", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      response = await response.json();
      //console.log(response)
      if (response.error != "") {
        Qual.errord("!Oh No", response.error);
      } else {
        ReadCategory();
        ReadMenu();
        Qual.successd("Success", response.message);
      }
    }
  }
  const [cat, setCat] = useState([]);

  async function ReadCategory() {
    let token = localStorage.getItem("resToken");
    if (!token) {
      navigate("/res-signin");
    }

    let url = "http://localhost:3000/category";
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
      setCat(response.records);
    }
  }
  const [menu, setMenu] = useState([]);

  async function ReadMenu() {
    let token = localStorage.getItem("resToken");
    if (!token) {
      navigate("/res-signin");
    }

    let url = "http://localhost:3000/res/menu";
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
      setMenu(response.records);
    }
  }
  


  useEffect(() => {
    ReadCategory();
    ReadMenu();
  }, []);

  const [uploadPhoto, setUploadPhoto] = useState(false);
  const [menuId, setMenuId] = useState("");
  const photoRef = useRef(null);

  function handlePhotoState(id) {
    setMenuId(id);
    window.scrollTo(0, 0);
    setUploadPhoto(true);
  }

  async function uploadPhotoHandler() {
    let token = localStorage.getItem("resToken");
    if (!token) {
      navigate("/res-signin");
    }

    let formData = new FormData();
    formData.append("menuId", menuId);
    formData.append("token", token);
    formData.append("photo", photoRef.current.files[0]);

    let url = "http://localhost:3000/res/res-menu-photo";
    let response = await fetch(url, {
      method: "POST",
      body: formData,
    });
    response = await response.json();
    // console.log(response)

    if (response.error != "") {
      Qual.errord(response.error);
    } else {
      ReadCategory();
      ReadMenu();
      setUploadPhoto(false);
    }
  }

  async function DeleteMenu(id){
    let url = `http://localhost:3000/res/menu/${id}`
    let response= await fetch(url,{method:'DELETE'})

    response = await response.json()
    console.log(response)
}

  return (
    <div>
      <div className="ht__bradcaump__area bg-image--24">
        <div className="ht__bradcaump__wrap d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="bradcaump__inner text-center brad__white">
                  <h2 className="bradcaump-title">Welcome To Menu</h2>
                  <nav className="bradcaump-inner">
                    <span className="brd-separetor">
                      <i className="zmdi zmdi-long-arrow-right"></i>
                    </span>
                    <span className="breadcrumb-item active">Add Menu</span>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="container py-5">
        <div className="card">
          <div className="card-header">
            <h1 className="text-danger">
              {uploadPhoto ? "Upload Photo" : "Add new menu"}
            </h1>
          </div>
          <div className="card-body">
            {uploadPhoto ? (
              <form>
                <div className="mb-3">
                  <label htmlFor="photo" className="form-label">
                    <h3>Photo</h3>
                  </label>
                  <input
                    type="file"
                    ref={photoRef}
                    name="photo"
                    className="form-control form-control-sm"
                    id="photo"
                    required
                  />
                </div>

                <button
                  onClick={uploadPhotoHandler}
                  className="btn btn-primary"
                  type="button"
                >
                  Submit
                </button>
                <button
                  className="btn btn-danger ml-3"
                  type="button"
                  onClick={() => setUploadPhoto(false)}
                >
                  Cancel
                </button>
              </form>
            ) : (
              <form
                className="contact__form__inner container"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="single-contact-form">
                  <div className="contact-box name d-flex flex-wrap flex-md-nowrap flex-lg-nowrap justify-content-between">
                    <input
                      {...register("name")}
                      type="text"
                      name="name"
                      placeholder="Name Of Dish"
                      className="form-control"
                    />
                    <input
                      {...register("price")}
                      type="number"
                      placeholder="Enter Price"
                      className="form-control"
                    />
                    <input
                      {...register("discount")}
                      type="number"
                      placeholder="Enter Discount"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="single-contact-form">
                  <div className="contact-box name d-flex flex-wrap flex-md-nowrap flex-lg-nowrap justify-content-between">
                    <select
                      {...register("category")}
                      name="category"
                      className="form-control"
                    >
                      <option value="id">Select Category</option>
                      {cat.map((x) => (
                        <option key={x.id} value={x.id}>
                          {x.CategoryName}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="single-contact-form">
                  <textarea
                    {...register("description")}
                    cols="50"
                    rows="3"
                    placeholder="enter description"
                    className="form-control"
                  ></textarea>
                </div>

                <div className="contact-btn">
                  <button type="submit" className="food__btn">
                    Add
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        <div className="mt-5">
          <h1 className="text-danger">All menu</h1>
        </div>

        <table>
          <thead>
            <tr>
              <th>Sr.No</th>
              <th>Name</th>
              <th>Photo</th>
              <th>Price</th>
              <th>Discount (%)</th>
              <th>Description</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((value, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{value.name}</td>
                <td>
                  {value.image ? (
                    <img
                      src={"http://localhost:3000" + value.image}
                      style={{ height: "100px" }}
                    />
                  ) : (
                    <button
                      onClick={() => handlePhotoState(value.id)}
                      className="btn btn-sm btn-primary"
                    >
                      Upload
                    </button>
                  )}
                </td>
                <td>{value.price}</td>
                <td>{value.discount}%</td>
                <td>{value.description}</td>
                <td>
                <button type='button' className='btn btn-danger ' onClick={()=>DeleteMenu(value.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AddMenu;
