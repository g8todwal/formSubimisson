import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import QRCode from "qrcode.react";
import "../qrcode.css";

const Qrcode = ({ form }) => {
  const [code, setCode] = useState("");
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    setCode(data);
  };
  console.log(code);

  return (
    <div>
      <h1>
        HI..! {form?.firstName} {form?.lastName}
      </h1>
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
            <h2>Please scan the QR code & Enter the code</h2>
            <QRCode
              value={form.aadharcard}
              id={1}
              size={290}
              level={"H"}
              className="qrcode"
            />
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
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
          )}
        </div>
      )}
    </div>
  );
};

export default Qrcode;
