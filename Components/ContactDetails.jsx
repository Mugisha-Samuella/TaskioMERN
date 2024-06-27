import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {addData} from '../redux/userSlice.js'

export default function ContactDetails() {
  const formData = useSelector(state=>state)
  const [userData, setUserData] = useState({
    street: "",
    additional: "",
    zip: "",
    place: "",
    country: "",
    code: "",
    phone: "",
    email: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    dispatch(addData(userData));
    
  }, [userData]);

  const handleSubmit = () => {
    // e.preventDefault()
    console.log(formData)
  }
  return (
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
  );
}
