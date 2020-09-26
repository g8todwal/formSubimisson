import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Nav/Navbar";

const Dash = ({ form }) => {
  return (
    <div>
      <Navbar />
      {form.length === 0 && (
        <div className="formFill">
          <h2 className="fill">VERIFY the form first</h2>
          <Link to="/form">
            <button>Lets Verify the form</button>
          </Link>
        </div>
      )}
      {form.length !== 0 && (
        <div>
          <div className="tab-table">
            <table className="table">
              <thead>
                <tr>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{form?.name}'s Aadhar Card</td>
                  <td>{form.aadharcard}</td>
                </tr>
                <tr>
                  <td>{form?.name}'s Address</td>
                  <td>{form.address}</td>
                </tr>
                <tr>
                  <td>{form?.name}'s Gender</td>
                  <td>{form.gender}</td>
                </tr>
                <tr>
                  <td>{form?.name}'s Marital Status</td>
                  <td>{form.mStatus}</td>
                </tr>
                <tr>
                  <td>{form?.name}'s Pan-Card</td>
                  <td>{form.panCard}</td>
                </tr>
                <tr>
                  <td>{form?.name}'s Driving License</td>
                  <td>{form.dl}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <Link to="/verify">
            <button className="btn-qr">Genrate QR Code</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Dash;
