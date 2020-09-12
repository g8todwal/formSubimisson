import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import '../style.css';

const Main = ({formSubmit}) => {

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    formSubmit(data);
    console.log(data);
    alert("Now cick on verify to procced further")
  };


  return (
    <div>
      <form 
        className="App" 
        onSubmit={handleSubmit(onSubmit)}>

        <h1>Sign Up</h1>

        <label>First Name:</label>
        <input name="firstName" ref={register({ required: true, minLength: 2 })} />
        {errors.firstName && errors.firstName.type === 'required' && <p>First name is required</p>}
        {errors.firstName && errors.firstName.type === 'minLength' && <p>Enter proper name</p>}

        <label>Last Name:</label>
        <input name="lastName" ref={register({required: true, minLength: 2})}/>
        {errors.lastName && errors.lastName.type === 'required' && <p>Last name is required</p>}
        {errors.lastName && errors.lastName.type === 'minLength' && <p>Enter proper Last Name</p>}

        <label>Gender</label>
        <select name="gender" ref={register}>
          <option>Select...</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="others">Others</option>
          <option value="nan">Don't want to specify</option>
        </select>

        <label>Email</label>
        <input name="email" ref={register({required: true, pattern: /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/i })} />
        {errors.email && errors.email.type === 'required' && <p>Email is required</p>}
        {errors.email && errors.email.type === 'pattern' && <p>Email is invalid</p>}

        <label>AadharCard No.</label>
        <input name="aadharcard" type="number" ref={register({required: true, minLength: 12})}/>
        {errors.aadharcard && errors.aadharcard.type === 'required' && <p>AadharCard Number is required</p>}
        {errors.aadharcard && errors.aadharcard.type === 'minLength' && <p>Enter correct number</p>}

        <label>PAN Card Number</label>
        <input name="panCard" ref={register({required: true, pattern: /[A-Z]{5}[0-9]{4}[A-Z]{1}/i })}/>
        {errors.panCard && errors.panCard.type === 'required' && <p>PAN is required</p>}
        {errors.panCard && errors.panCard.type === 'pattern' && <p>PAN is invalid</p>}

        <label>Any more number you want to enter</label>
        <textarea name="about you" ref={register}/>

        <section className="btnSubmit">
          <input type="submit"/>
          <Link to="/next"><button className="btnVerify">Verify</button></Link>
        </section>
      </form>
    </div>
  )
}
 
export default Main;
