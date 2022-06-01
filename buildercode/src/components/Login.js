import React, { useState, useEffect } from "react";
import { IsUserLogedIn } from "./AdminController";
import { useNavigate, Link } from "react-router-dom";
import { checkUserLogin } from "../API";

export default function Login() {
  const [user, setUser] = useState("");
  const [authinfo, setAuthInfo] = useState({});
  // sessionStorage.clear();

  let logins = sessionStorage.getItem("loginInfo");
  let navigate = useNavigate();

  useEffect(() => {
    logins = JSON.parse(logins);

    if (!logins || logins == null) {
    } else {
      navigate("/home");
    }
  }, []);

  const LoginAction = (e) => {
    e.preventDefault();
    let credentials = { user: "", pass: "", data: {} };
    credentials.user = document.getElementById("user").value;
    credentials.pass = document.getElementById("password").value;
    setAuthInfo(credentials);

    let alert = document.getElementById("alert");

    try {
      alert.classList.add("d-none");
    } catch (err) {}

    checkUserLogin(credentials).then((response) => {
      if (response.status == 200) {
        credentials.data = response.data;
        credentials["pass"] = "*******";
        sessionStorage.setItem("loginInfo", JSON.stringify(credentials));
        navigate("/home");
      } else {
        try {
          alert.classList.remove("d-none");
        } catch (err) {}
        setTimeout(() => {
          try {
            alert.classList.add("d-none");
          } catch (err) {}
        }, 3000);
      }
    });
  };

  return (
    <section id="login">
      <div class="container">
        <div class="row main">
          <div class="panel-heading col-md-12">
            <p class="text-center">Login</p>
          </div>
          <div class="main-login main-center">
            <div class="form-group">
              <label for="username" class="cols-sm-2 control-label">
                Username
              </label>
              <div class="cols-sm-10">
                <div class="input-group">
                  <span class="input-group-addon">
                    <i class="fa fa-users fa" aria-hidden="true"></i>
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    name="username"
                    id="user"
                    placeholder="Enter your Username"
                  />
                </div>
              </div>
            </div>

            <div class="form-group">
              <label for="password" class="cols-sm-2 control-label">
                Password
              </label>
              <div class="cols-sm-10">
                <div class="input-group">
                  <span class="input-group-addon">
                    <i class="fa fa-lock fa-lg" aria-hidden="true"></i>
                  </span>
                  <input
                    type="password"
                    class="form-control"
                    name="password"
                    id="password"
                    placeholder="Enter your Password"
                  />
                </div>
              </div>
            </div>
            <div class="alert alert-danger d-none" role="alert" id="alert">
              User name or Password is Incorrect! Please Try Again{" "}
            </div>

            <div class="form-group ">
              <button
                type="button"
                class="btn btn-primary btn-lg btn-block login-button"
                onClick={(e) => {
                  LoginAction(e);
                }}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
