import React, {useState} from 'react';
import './App.css';
import Main from './components/Main';
import Qrcode from './components/Qrcode';
import {BrowserRouter} from 'react-router-dom';
import {Switch, Route} from 'react-router-dom';

function App() {

  const [form, setForm] = useState("");

  const formSubmit = (data) => {
    setForm(data);
  }
  console.log(form);

  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main formSubmit={formSubmit} />
          </Route>
          <Route exact path="/next">
            <Qrcode form = {form}/>  
          </Route> 
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
