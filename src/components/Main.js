import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "../style.css";

const Main = ({ formSubmit }) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    formSubmit(data);
    console.log("Data>>>>", data);
    alert("Now click on NEXT to procced further");
    localStorage.setItem("Information about user: ", JSON.stringify(data));
  };

  return (
    <div>
      <form className="App" onSubmit={handleSubmit(onSubmit)}>
        <h1>Form</h1>

        <label>Aadhar Card No.</label>
        <input
          name="aadharcard"
          type="number"
          ref={register({ required: true, minLength: 12 })}
        />
        {errors.aadharcard && errors.aadharcard.type === "required" && (
          <p>AadharCard Number is required</p>
        )}
        {errors.aadharcard && errors.aadharcard.type === "minLength" && (
          <p>Enter correct number</p>
        )}

        <label>Name:</label>
        <input name="name" ref={register({ required: true, minLength: 4 })} />
        {errors.name && errors.name.type === "required" && (
          <p>First name is required</p>
        )}
        {errors.name && errors.name.type === "minLength" && (
          <p>Enter proper name</p>
        )}

        <label>Address: </label>
        <input
          name="address"
          ref={register({
            required: true,
          })}
        />
        {errors.address && errors.address.type === "required" && (
          <p>Address is required</p>
        )}

        <label>Gender</label>
        <select name="gender" ref={register}>
          <option>Select...</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="others">Others</option>
          <option value="nan">Don't want to specify</option>
        </select>

        <label>Martial Status</label>
        <select name="mStatus" ref={register}>
          <option>Select...</option>
          <option value="married">Married</option>
          <option value="unmarried">Unmarried</option>
          <option value="divorced">Divorced</option>
        </select>

        <hr />

        <label>Upload your Pan Card: </label>
        <input
          name="panCard"
          ref={register({
            required: true,
            pattern: /[A-Z]{5}[0-9]{4}[A-Z]{1}/i,
          })}
        />
        {errors.panCard && errors.panCard.type === "required" && (
          <p>PAN is required</p>
        )}
        {errors.panCard && errors.panCard.type === "pattern" && (
          <p>PAN is invalid</p>
        )}
        <input name="uploadPan" type="file" ref={register} />

        <label>Upload your Driving License: </label>
        <input
          name="dl"
          ref={register({
            required: true,
          })}
        />
        {errors.dl && errors.dl.type === "required" && <p>DL is required</p>}
        <input name="uploadDL" type="file" ref={register} />

        <section className="btnSubmit">
          <input type="submit" />
          <Link to="/next">
            <button className="btnVerify">Next</button>
          </Link>
        </section>
      </form>
    </div>
  );
};

export default Main;
