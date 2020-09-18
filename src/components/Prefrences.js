import React from "react";
import { Link } from "react-router-dom";

const Prefrences = () => {
  return (
    <div>
      <h1>Prefrences</h1>
      <div className="tab-table">
        <table className="table">
          <thead>
            <tr style={{ color: "white" }}>
              <th></th>
              <th>Public </th>
              <th>Private</th>
              <th>Confi..</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Aadhar Card</td>
              <td>
                <input type="radio" name="AadharCard" value="public" />
              </td>
              <td>
                <input type="radio" name="AadharCard" value="confidential" />
              </td>
              <td>
                <input type="radio" name="AadharCard" value="private" />
              </td>
            </tr>
            <tr>
              <td>Address</td>
              <td>
                <input type="radio" name="address" value="public" />
              </td>
              <td>
                <input type="radio" name="address" value="confidential" />
              </td>
              <td>
                <input type="radio" name="address" value="private" />
              </td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>
                <input type="radio" name="gender" value="public" />
              </td>
              <td>
                <input type="radio" name="gender" value="confidential" />
              </td>
              <td>
                <input type="radio" name="gender" value="private" />
              </td>
            </tr>
            <tr>
              <td>Marital Status</td>
              <td>
                <input type="radio" name="mStatus" value="public" />
              </td>
              <td>
                <input type="radio" name="mStatus" value="confidential" />
              </td>
              <td>
                <input type="radio" name="mStatus" value="private" />
              </td>
            </tr>
            <tr>
              <td>PAN Card</td>
              <td>
                <input type="radio" name="pancard" value="public" />
              </td>
              <td>
                <input type="radio" name="pancard" value="confidential" />
              </td>
              <td>
                <input type="radio" name="pancard" value="private" />
              </td>
            </tr>
            <tr>
              <td>Driving License</td>
              <td>
                <input type="radio" name="DL" value="public" />
              </td>
              <td>
                <input type="radio" name="DL" value="confidential" />
              </td>
              <td>
                <input type="radio" name="DL" value="private" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Link to="/next">
        <button className="btn-qr">Back to Dashboard</button>
      </Link>
    </div>
  );
};

export default Prefrences;
