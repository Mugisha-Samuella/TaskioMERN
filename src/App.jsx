import "./App.css";
import React,  { useEffect, useState } from "react";
import GeneralInformation from "./../Components/GeneralInformation";
import ContactDetails from "./../Components/ContactDetails";

function App() {

  const [userData, setUserData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    position: "",
    company: "",
    businessArena: "",
    employees: "",
    street: "",
    additional: "",
    zip: "",
    place: "",
    country: "",
    code: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    try {

      const res = await fetch('http://localhost:3000/api/users', {
        method:"POST",
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify({...userData})
      })

      const data = await res.json()
      console.log(data)
    } catch (error) {
      console.log("error:", error?.message)
      
    }
  }
  return (
    <div>
      <div className="page-content">
        <div className="form-v10-content">
          <div className="form-detail">
          <div>
      <div>
        <div class="form-left">
          <h2>General Infomation</h2>
          <div class="form-row">
            <select onChange={handleChange} name="title">
              <option class="option" value="title">
                Title
              </option>
              <option class="option" value="businessman">
                Businessman
              </option>
              <option class="option" value="reporter">
                Reporter
              </option>
              <option class="option" value="secretary">
                Secretary
              </option>
            </select>
            <span class="select-btn">
              <i class="zmdi zmdi-chevron-down"></i>
            </span>
          </div>
          <div class="form-group">
            <div class="form-row form-row-1">
              <input
                type="text"
                name="firstName"
                onChange={handleChange}
                id="first_name"
                class="input-text"
                placeholder="First Name"
                required
              />
            </div>
            <div class="form-row form-row-2">
              <input
                type="text"
                name="lastName"
                onChange={handleChange}
                id="last_name"
                class="input-text"
                placeholder="Last Name"
                required
              />
            </div>
          </div>
          <div class="form-row">
            <select name="position" onChange={handleChange}>
              <option value="position">Position</option>
              <option value="director">Director</option>
              <option value="manager">Manager</option>
              <option value="employee">Employee</option>
            </select>
            <span class="select-btn">
              <i class="zmdi zmdi-chevron-down"></i>
            </span>
          </div>
          <div class="form-row">
            <input
              type="text"
              onChange={handleChange}
              name="company"
              class="company"
              id="company"
              placeholder="Company"
              required
            />
          </div>
          <div class="form-group">
            <div class="form-row form-row-3">
              <input
                type="text"
                onChange={handleChange}
                name="business"
                class="business"
                id="business"
                placeholder="Business Arena"
                required
              />
            </div>
            <div class="form-row form-row-4">
              <select name="employees" onChange={handleChange}>
                <option value="employees">Employees</option>
                <option value="trainee">Trainee</option>
                <option value="colleague">Colleague</option>
                <option value="associate">Associate</option>
              </select>
              <span class="select-btn">
                <i class="zmdi zmdi-chevron-down"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
       <div class="form-right">
            <h2>Contact Details</h2>
            <div class="form-row">
              <input
                type="text"
                name="street"
                onChange={handleChange}
                class="street"
                id="street"
                placeholder="Street + Nr"
                required
              />
            </div>
            <div class="form-row">
              <input
                type="text"
                name="additional"
                onChange={handleChange}
                class="additional"
                id="additional"
                placeholder="Additional Information"
                required
              />
            </div>
            <div class="form-group">
              <div class="form-row form-row-1">
                <input
                  type="text"
                  name="zip"
                  class="zip"
                  onChange={handleChange}
                  id="zip"
                  placeholder="Zip Code"
                  required
                />
              </div>
              <div class="form-row form-row-2">
                <select name="place" onChange={handleChange}>
                  <option value="place">Place</option>
                  <option value="Street">Street</option>
                  <option value="District">District</option>
                  <option value="City">City</option>
                </select>
                <span class="select-btn">
                  <i class="zmdi zmdi-chevron-down"></i>
                </span>
              </div>
            </div>
            <div class="form-row">
              <select name="country" onChange={handleChange}>
                <option value="country">Country</option>
                <option value="Vietnam">Vietnam</option>
                <option value="Malaysia">Malaysia</option>
                <option value="India">India</option>
              </select>
              <span class="select-btn">
                <i class="zmdi zmdi-chevron-down"></i>
              </span>
            </div>
            <div class="form-group">
              <div class="form-row form-row-1">
                <input
                  type="text"
                  name="code"
                  onChange={handleChange}
                  class="code"
                  id="code"
                  placeholder="Code +"
                  required
                />
              </div>
              <div class="form-row form-row-2">
                <input
                  type="text"
                  onChange={handleChange}
                  name="phone"
                  class="phone"
                  id="phone"
                  placeholder="Phone Number"
                  required
                />
              </div>
            </div>
            <div class="form-row">
              <input
                type="text"
                name="email"
                onChange={handleChange}
                id="your_email"
                class="input-text"
                required
                pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"
                placeholder="Your Email"
              />
            </div>
            <div class="form-checkbox">
              <label class="container"
                ><p>
                  I do accept the
                  <a href="#" class="text">Terms and Conditions</a> of your
                  site.
                </p>
                <input type="checkbox" name="checkbox" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div class="form-row-last">
            <button
                class="register"
                onClick={handleSubmit}
                value="Register Badge"
              >
                Register Badge
              </button>
            </div>
          </div>
    </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
