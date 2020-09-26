import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

const Transition = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <h1>Transition History</h1>
      <div className="tab-table">
        <table className="table">
          <thead>
            <tr style={{ color: "white" }}>
              <th>Date </th>
              <th>Purpose</th>
              <th>Shared With</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01/08/2020</td>
              <td onClick={handleClickOpen}>Bank Account Opening</td>
              <td>HSBC</td>
            </tr>
            <tr>
              <td>15/05/2020</td>
              <td onClick={handleClickOpen}>SIM card registration</td>
              <td>Telstra</td>
            </tr>
            <tr>
              <td>01/01/2020</td>
              <td onClick={handleClickOpen}>Health Insurance</td>
              <td>AXA Global Health</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style={{ marginTop: "5px" }}>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <DialogContentText>
              Information Shared
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
        </Dialog>
      </div>
    </React.Fragment>
  );
};

export default Transition;
