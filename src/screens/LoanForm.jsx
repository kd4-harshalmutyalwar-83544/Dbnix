import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function LoanForm() {
  const [formData, setFormData] = useState({
    loanId: "",
    name: "",
    state: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClear = () => {
    setFormData({ loanId: "", name: "", state: "", address: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="row d-flex align-items-center">
          <div className="col-md-6 d-flex flex-column align-items-center">
            <form className="w-75" onSubmit={handleSubmit}>
            <label htmlFor="loandId" className="form-label fw-bold">LoanId</label>
              <select
                className="form-select mb-3"
                name="loanId"
                value={formData.loanId}
                onChange={handleChange}
              >
                <option value="">Select Loan ID</option>
                <option value="1">Loan 1</option>
                <option value="2">Loan 2</option>
              </select>

              <label htmlFor="loanId" className="form-label fw-bold">LoanId</label>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Search by LoanId"
                name="loanId"
                value={formData.loanId}
                onChange={handleChange}
              />
               
            
               <label htmlFor="name" className="form-label fw-bold">Name</label>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />

              <label htmlFor="state" className="form-label fw-bold">State</label>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="State"
                name="state"
                value={formData.state}
                onChange={handleChange}
              />
  
              <label htmlFor="address" className="form-label fw-bold">Address</label>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />

              <div className="d-flex justify-content-center">
                <button type="button" className="btn btn-secondary me-2" onClick={handleClear}>
                  Clear
                </button>
                 <Link to= "/progressbar"><button type="submit" className="btn btn-primary">
                  Submit
                </button>
                </Link>
              </div>
            </form>
          </div>

         
        <div className="col-md-6 d-flex flex-column align-items-center">
  <div className="w-100 d-flex justify-content-center gap-3 mb-3">
    <div className="form-check">
      <input className="form-check-input" type="radio" name="options" id="read" />
      <label className="form-check-label" htmlFor="read">Read</label>
    </div>

    <div className="form-check">
      <input className="form-check-input" type="radio" name="options" id="leave" />
      <label className="form-check-label" htmlFor="leave">Leave</label>
    </div>

    <div className="form-check">
      <input className="form-check-input" type="radio" name="options" id="download" />
      <label className="form-check-label" htmlFor="download">Download</label>
    </div>

    <div className="form-check">
      <input className="form-check-input" type="radio" name="options" id="delete" />
      <label className="form-check-label" htmlFor="delete">Delete</label>
    </div>
    </div>


          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="docx.png"
              alt="Loan Information"
              className="img-fluid rounded"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default LoanForm;
