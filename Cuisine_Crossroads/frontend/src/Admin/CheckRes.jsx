import { useEffect, useState } from "react";
function CheckRes() {
  const [checkres, setCheckres] = useState([]);
  async function CheckRes() {
    let url = "http://localhost:3000/admin/checkres";
    let response = await fetch(url);
    response = await response.json();
    console.log(response);

    if (response.error != "") {
      console.log(response.error);
    } else {
      setCheckres(response.records);
    }
  }

  useEffect(() => {
    CheckRes();
  }, []);

  async function UpdateStatus(res_id, status) {
    console.log(res_id, status);

    // api - post
    let data = {
      res_id: res_id,
      status: status,
    };
    let url = "http://localhost:3000/admin/checkres";
    let response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    response = await response.json();
    console.log(response);

    if (response.error != "") {
      Qual.errord("!Oh No", response.error);
    } else {
      Qual.successd("Status Updated", response.message);
    }

    CheckRes();
  }

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Password</th>
            <th>Address</th>
            <th>Opening Time</th>
            <th>Closing Time</th>
            <th>City</th>
            <th>State</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {checkres.map((value, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{value.name}</td>
              <td>{value.description}</td>
              <td>{value.mobile}</td>
              <td>{value.email}</td>
              <td>{value.password}</td>
              <td>{value.address}</td>
              <td>{value.opening_hours}</td>
              <td>{value.closing_hours}</td>
              <td>{value.city}</td>
              <td>{value.state}</td>
              <td>{value.status}</td>
              <td style={{ width: "180px" }}>
                {value.status === "pending" && (
                  <>
                    <button
                      onClick={() => UpdateStatus(value.id, "approved")}
                      className="btn btn-success btn-sm"
                    >
                      Approve
                    </button>

                    <button
                      onClick={() => UpdateStatus(value.id, "rejected")}
                      className="btn btn-danger btn-sm ml-2"
                    >
                      Reject
                    </button>
                  </>
                )}

                {value.status === "approved" && (
                  <button
                    onClick={() => UpdateStatus(value.id, "rejected")}
                    className="btn btn-danger btn-sm ml-2"
                  >
                    Reject
                  </button>
                )}

                {value.status === "rejected" && (
                  <button
                    onClick={() => UpdateStatus(value.id, "approved")}
                    className="btn btn-success btn-sm ml-2"
                  >
                    Approve
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default CheckRes;
