import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Main from "./components/Main";
import Qrcode from "./components/Qrcode";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import { auth } from "./components/Firebase";

function App() {
  const [form, setForm] = useState("");
  const [user, setUser] = useState("");
  const [aadhar, setAadhar] = useState("");

  const formSubmit = (data) => {
    setForm(data);
  };
  console.log(form);

  const aadharSubmit = (aadhar) => {
    setAadhar(aadhar);
  };
  console.log(aadhar);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  console.log("user>>>>", user);

  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login aadharSubmit={aadharSubmit} />
          </Route>
          <Route exact path="/form">
            <Main formSubmit={formSubmit} />
          </Route>
          <Route exact path="/next">
            <Qrcode form={form} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
