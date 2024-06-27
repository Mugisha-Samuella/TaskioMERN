import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addData } from '../redux/userSlice.js';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addData({ ...userData }));
    setUserData({
      title: "",
      firstName: "",
      lastName: "",
      position: "",
      company: "",
      businessArena: "",
      employees: "",
    });
  };

  return (
    <div>
      <div>
        <div className="form-left">
          <h2>General Information</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <select onChange={handleChange} name="title" value={userData.title}>
                <option value="">Title</option>
                <option value="businessman">Businessman</option>
                <option value="reporter">Reporter</option>
                <option value="secretary">Secretary</option>
              </select>
            </div>
            <div className="form-group">
              <div className="form-row form-row-1">
                <input
                  type="text"
                  name="firstName"
                  onChange={handleChange}
                  value={userData.firstName}
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="form-row form-row-2">
                <input
                  type="text"
                  name="lastName"
                  onChange={handleChange}
                  value={userData.lastName}
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <select name="position" onChange={handleChange} value={userData.position}>
                <option value="">Position</option>
                <option value="director">Director</option>
                <option value="manager">Manager</option>
                <option value="employee">Employee</option>
              </select>
            </div>
            <div className="form-row">
              <input
                type="text"
                onChange={handleChange}
                name="company"
                value={userData.company}
                placeholder="Company"
                required
              />
            </div>
            <div className="form-group">
              <div className="form-row form-row-3">
                <input
                  type="text"
                  onChange={handleChange}
                  name="businessArena"
                  value={userData.businessArena}
                  placeholder="Business Arena"
                  required
                />
              </div>
              <div className="form-row form-row-4">
                <select name="employees" onChange={handleChange} value={userData.employees}>
                  <option value="">Employees</option>
                  <option value="trainee">Trainee</option>
                  <option value="colleague">Colleague</option>
                  <option value="associate">Associate</option>
                </select>
              </div>
            </div>
            <button type="submit">Add Data</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default GeneralInformation;
