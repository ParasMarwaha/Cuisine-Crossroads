import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import BreadCrumb from "../Components/BreadCrumb";

function RestaurantDashboard() {
  const navigate = useNavigate();

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

  const [res, setRes] = useState([]);

  async function ReadRes() {
    let token = localStorage.getItem("resToken");
    if (!token) {
      navigate("/res-signin");
    }

    let url = "http://localhost:3000/res-signin";
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
    ReadRes();
  }, []);

  const [uploadPhoto, setUploadPhoto] = useState(false);
  const [resId, setResId] = useState("");
  const photoRef = useRef(null);

  function handlePhotoState(id) {
    setResId(id);
    window.scrollTo(0, 0);
    setUploadPhoto(true);
  }
  async function uploadPhotoHandler() {
    let token = localStorage.getItem("resToken");
    if (!token) {
      navigate("/res-signin");
    }
    let formData = new FormData();
    formData.append("token", token);
    formData.append("resId", resId);
    formData.append("photo", photoRef.current.files[0]);

    let url = "http://localhost:3000/res/res-signup-photo";
    let response = await fetch(url, {
      method: "POST",
      body: formData,
    });
    response = await response.json();
    // console.log(response)

    if (response.error != "") {
      Qual.errord(response.error);
    } else {
      ReadRes();
      setUploadPhoto(false);
    }
  }

  return (
    <div>
      <BreadCrumb title="Dashboard" />
      <br />
      {uploadPhoto ? (
          <form>
          <div className="single-contact-form">
            <div className="mb-3">
              <label htmlFor="photo" className="form-label">
                <h3>Restaurant Photo</h3>
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
          </div>
        </form>
     
      ) : (
        <div className="container py-5">
        <div className="mt-5">
          <h1 className="text-danger">Restaurant Details</h1>
        </div>
        <table>
          <thead>
            <tr>
              
              <th>Name</th>
              <th>Photo</th>
            </tr>
          </thead>
          <tbody>
            {res.map((value, index) => (
              <tr key={value.id}>
                
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      )}

      <div className="container py-5">
        <table>
          <thead>
            <tr>
              <th>Sr.No</th>
              <th>Name</th>
              <th>Photo</th>
              <th>Price</th>
              <th>Discount (%)</th>
              <th>Description</th>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RestaurantDashboard;
