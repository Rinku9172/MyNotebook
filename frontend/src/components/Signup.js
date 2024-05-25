import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

const Signup = (props) => {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    const response = await fetch("https://my-notebook-chi.vercel.app/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem('token', json.authToken);
      navigate("/home");
      props.showAlert("Account created successfully", "success");
    } else {
      props.showAlert("Invalid details", "danger");
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center">Create an Account</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name <span className="required">*</span></label>
                  <input type="text" className="form-control" id="name" name="name" onChange={onChange} required aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address <span className="required">*</span></label>
                  <input type="email" className="form-control" id="email" name="email" onChange={onChange} required aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password <span className="required">*</span></label>
                  <input type="password" className="form-control" id="password" name="password" onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="cpassword" className="form-label">Confirm Password <span className="required">*</span></label>
                  <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onChange} minLength={5} required />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-dark">SignUp</button>
                </div>
                <div className='d-flex justify-content-center align-items-center mb-3'>
                  <span className='my-3'>Already have an account?</span>
                  <Link className="mx-1 signIn-link" to='/'>SignIn</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
