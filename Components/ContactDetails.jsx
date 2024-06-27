import React from "react";

export default function ContactDetails() {

  return (
    <div>
       <div class="form-right">
            <h2>Contact Details</h2>
            <div class="form-row">
              <input
                type="text"
                name="street"
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
                  id="zip"
                  placeholder="Zip Code"
                  required
                />
              </div>
              <div class="form-row form-row-2">
                <select name="place">
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
              <select name="country">
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
                  class="code"
                  id="code"
                  placeholder="Code +"
                  required
                />
              </div>
              <div class="form-row form-row-2">
                <input
                  type="text"
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
                name="your_email"
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
              <input
                type="submit"
                name="register"
                class="register"
                value="Register Badge"
              />
            </div>
          </div>
    </div>
  );
}
