import React from "react";
import "./App.css";
import GeneralInformation from "./../Components/GeneralInformation";
import ContactDetails from "./../Components/ContactDetails";

function App() {
  return (
    <div>
      <div className="page-content">
        <div className="form-v10-content">
          <form className="form-detail" action="#" method="post" id="myform">
            <GeneralInformation />
            <ContactDetails />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
