import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import '../App.css';

const Login = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password }),
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            localStorage.setItem('token', json.authToken);
            console.log("This is authtoken :",json.authToken);
            navigate("/home");
            props.showAlert("SignedIn successfully", "success");
        } else {
            props.showAlert("Invalid credentials", "danger");
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <>
        {/* <Component/> */}
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body login-card">
                            <h3 className="card-title text-center">Welcome!</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address <span className="required">*</span></label>
                                    <input type="email" className="form-control" id="email" name="email" required value={credentials.email} onChange={onChange} aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password<span className="required">*</span></label>
                                    <input type="password" className="form-control" name="password" required value={credentials.password} onChange={onChange} id="password" />
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-dark">SignIn</button>
                                </div>
                                <div className='d-flex justify-content-center align-items-center mb-3'>
                                    <span className='my-3'>Need an account?</span>
                                    <Link className="mx-1 register-link" to='/signup'>Register</Link>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login;


