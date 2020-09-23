import React from "react";
import { Link } from "react-router-dom";
import QRCode from "qrcode.react";
import "../qrcode.css";

const Qrcode = ({ form }) => {
  return (
    <div>
      <h1>HI..! {form?.name}</h1>
      {form.length === 0 && (
        <div className="formFill">
          <h2 className="fill">SUBMIT the form first</h2>
          <Link to="/form">
            <button>Lets Submit the form</button>
          </Link>
        </div>
      )}
      {form.length !== 0 && (
        <div>
          <div className="imgQr">
            <h2>Please scan the QR code......</h2>
            <QRCode
              value={`Data of ${form.name} is:\n AadharCard-  ${form.aadharcard},\n Pan Card-  ${form.panCard}, \n Driving Lincense-  ${form.dl}, \n Address-  ${form.address} `}
              id={form.aadharcard}
              size={280}
              level={"H"}
              includeMargin={true}
              className="qrcode"
            />
          </div>
          {/* <form onSubmit={handleSubmit(onSubmit)}>
            <label>Enter Your Code Here</label>
            <input
              name="code"
              type="number"
              ref={register({ required: true, minLength: 12, maxLength: 12 })}
            />
            {errors.code && errors.code.type === "required" && (
              <p>Code is required for Submission</p>
            )}
            {errors.code && errors.code.type === "minLength" && (
              <p>Wrong Code</p>
            )}
            {errors.code && errors.code.type === "maxLength" && (
              <p>Wrong Code</p>
            )}
            <input type="submit" />
          </form>
          {code.length !== 0 && (
            <h2 className="Congrats">Congratulation your data is saved..!!!</h2>
          )} */}
        </div>
      )}
    </div>
  );
};

export default Qrcode;
