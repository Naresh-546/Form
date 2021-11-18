import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Form = () => {
  const [inputValue, setInputValue] = useState("");
  const formData = 
   `Patient Name :- ${inputValue.patientName}
    Gender:- ${inputValue.Gender}
    Age :- ${inputValue.Age}
    Ration Card Number:- ${inputValue.RationCardNumber}
    Patient District:- ${inputValue.PatientDistrict}
    Patient District:- ${inputValue.patientTaluka}
    Procedure Code (MJPJAY) :- ${inputValue.ProcedureCode}
    Doctor Name :- ${inputValue.DoctorName}
    Phone No.:- ${inputValue.phoneNo}
    Designation :- ${inputValue.Designation}`;
  return (
    <>
      <div className="container mx-auto my_css">
        <div>
          <h1 className="m-3 my_h1">
            MAHATMA JYOTIRAO PHULE JAN AROGYA YOJANA
          </h1>
          <h5 className="m-3">
            Free Quality Critical Care For low Income Families
          </h5>
          <form className="bg">
            <div class="row md-row lg-row m-3">
              <div class="col">
                <label>Patient Name</label>
                <input
                  type="text"
                  class="form-control"
                  //   value={inputValue}
                  onChange={(e) =>
                    setInputValue({
                      ...inputValue,
                      patientName: e.target.value,
                    })
                  }
                  placeholder="Patient name"
                />
              </div>
              <div class="col">
                <label>Gender</label>
                <input
                  type="text"
                  //  value={inputValue}
                  onChange={(e) =>
                    setInputValue({ ...inputValue, Gender: e.target.value })
                  }
                  class="form-control"
                  placeholder="Gender"
                />
              </div>
              <div class="col">
                <label>Age</label>
                <input
                  type="number"
                  //  value={inputValue}
                  onChange={(e) =>
                    setInputValue({ ...inputValue, Age: e.target.value })
                  }
                  class="form-control"
                  placeholder="Age"
                />
              </div>
            </div>
            <div class="row m-3">
              <div class="col">
                <label>Ration Card Number</label>
                <input
                  type="text"
                  class="form-control"
                  onChange={(e) =>
                    setInputValue({
                      ...inputValue,
                      RationCardNumber: e.target.value,
                    })
                  }
                  placeholder="Ration Card Number"
                />
              </div>
              <div class="col">
                <label>Patient District</label>
                <input
                  type="text"
                  class="form-control"
                  //   value={inputValue}
                  onChange={(e) =>
                    setInputValue({
                      ...inputValue,
                      PatientDistrict: e.target.value,
                    })
                  }
                  placeholder="Patient District"
                />
              </div>
              <div class="col">
                <label>Patient Taluka</label>
                <input
                  type=""
                  class="form-control"
                  //   value={inputValue}
                  onChange={(e) =>
                    setInputValue({
                      ...inputValue,
                      patientTaluka: e.target.value,
                    })
                  }
                  placeholder="Patient Taluka"
                />
              </div>
            </div>
            <div className="row m-3">
              <div class="col dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Procedure Category
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Procedure Name
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col">
                <label>Procedure Code (MJPJAY)</label>
                <input
                  type="text"
                  class="form-control"
                  //   value={inputValue}
                  onChange={(e) =>
                    setInputValue({
                      ...inputValue,
                      ProcedureCode: e.target.value,
                    })
                  }
                  placeholder="Procedure Code (MJPJAY)"
                />
              </div>
            </div>
            <div class="row m-3">
              <div class="col">
                <label>Doctor Name</label>
                <input
                  type="text"
                  class="form-control"
                  //   value={inputValue}
                  onChange={(e) =>
                    setInputValue({ ...inputValue, DoctorName: e.target.value })
                  }
                  placeholder="Doctor Name"
                />
              </div>
              <div class="col">
                <label>Phone No.</label>
                <input
                  type="Number"
                  //  value={inputValue}
                  onChange={(e) =>
                    setInputValue({ ...inputValue, phoneNo: e.target.value })
                  }
                  class="form-control"
                  placeholder="Phone No."
                />
              </div>
              <div class="col">
                <label>Designation</label>
                <input
                  type="text"
                  // value={inputValue}
                  onChange={(e) =>
                    setInputValue({
                      ...inputValue,
                      Designation: e.target.value,
                    })
                  }
                  class="form-control"
                  placeholder="Designation"
                />
              </div>
            </div>
            <div className="my_btn">
              <CopyToClipboard text={formData}>
                <button type="button" class="btn btn-outline-success">
                  Submit
                </button>
              </CopyToClipboard>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;