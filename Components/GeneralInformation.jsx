import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {addData} from '../redux/userSlice.js'

function GeneralInformation() {
  const [userData, setUserData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    position: "",
    company: "",
    businessArena: "",
    employees: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    dispatch(addData({ ...userData }));
    
  }, [userData]);
  return (
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
  );
}

export default GeneralInformation;
