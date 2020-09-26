import React from "react";
import { Link } from "react-router-dom";
import QRCode from "qrcode.react";
import "../qrcode.css";
import photo from "./photo.png";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const Qrcode = ({ form }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
          <img
            src={photo}
            alt="Logo"
            className="imgQi"
            onClick={handleClickOpen}
          />
          <div className="imgQr">
            <QRCode
              value={`Data of ${form.name} is:\n AadharCard-  ${form.aadharcard},\n Pan Card-  ${form.panCard}, \n Driving Lincense-  ${form.dl}, \n Address-  ${form.address} `}
              id={form.aadharcard}
              size={280}
              level={"H"}
              includeMargin={true}
              className="qrcode"
            />
          </div>
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
        </div>
      )}
    </div>
  );
};

export default Qrcode;
