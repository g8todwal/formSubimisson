import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "../style.css";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const Main = ({ formSubmit }) => {
  const { register, handleSubmit, errors } = useForm();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = (data) => {
    formSubmit(data);
    console.log("Data>>>>", data);
    alert("Now click on NEXT to procced further");
    localStorage.setItem("Information about user: ", JSON.stringify(data));
  };

  return (
    <div>
      <form className="App" onSubmit={handleSubmit(onSubmit)}>
        <button className="top_btn">Scan Your Buisness Card/ID</button>
        <h1>OR</h1>
        <label onClick={handleClickOpen}>Aadhar Card No.</label>
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

        <div>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Information Asked For Opening Account In HSBC"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Confidential Information
                <ul>
                  <li>Name</li>
                  <li>Address</li>
                  <li>Pan Card</li>
                  <li>Aadhar Card</li>
                  <br />
                  <strong>Documents</strong>
                  <li>Pan Card Soft-Copy</li>
                  <li>Aadhar Card Soft-Copy</li>
                </ul>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Approve
              </Button>
              <Button onClick={handleClose} color="primary" autoFocus>
                Reject
              </Button>
            </DialogActions>
          </Dialog>
        </div>

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
          <button type="submit">Verify</button>
          <Link to="/next">
            <button className="btnVerify">Next</button>
          </Link>
        </section>
      </form>
    </div>
  );
};

export default Main;
