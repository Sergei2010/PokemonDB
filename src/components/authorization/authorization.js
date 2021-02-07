import React from 'react';
import {Link} from "react-router-dom";

import './authorization.css';

const Authorization = () => {
    return (
        <form className="authorization-form">
            <fieldset>
                <legend className="authorization">
                    <h1>
                        <Link to='/'>Pokemon DB</Link>
                    </h1>
                </legend>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                           placeholder="Enter email" defaultValue="" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                            else.</small>
                </div>
                <div className="form-group mb-5">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
                           defaultValue="" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </fieldset>
        </form>
    )

}
export default Authorization;