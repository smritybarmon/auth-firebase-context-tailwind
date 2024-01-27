import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const handleRegister = (event) => {
    event.preventDefault();
    const from = event.target;
    const name = from.name.value;
    const email = from.email.value;
    const password = from.password.value;
    console.log(name, email, password);
  };
  return (
    <div className="min-h-screen hero bg-base-200">
      <div className="flex-col hero-content ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Please register now</h1>
        </div>
        <div className="w-full max-w-sm shadow-2xl card shrink-0 bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <Link
                  to="/login"
                  href="#"
                  className="label-text-alt link link-hover"
                >
                  Already have an account?
                </Link>
              </label>
            </div>
            <div className="mt-6 form-control">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
