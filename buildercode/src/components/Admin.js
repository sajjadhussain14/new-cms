import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { IsUserLogedIn, LogOutUser } from "./admin/AdminController";
import "./admin/css/admin.css";
import { baseName } from "../config";
import { ContentAdmin, SidebarAdmin } from "./admin/AdminViews";

export default function Admin() {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  let navigate = useNavigate();

  useEffect(() => {}, []);

  let userData = { user: "", pass: "", data: [] };
  setTimeout(() => {
    userData = sessionStorage.getItem("loginInfo");
    userData = JSON.parse(userData);

    if (!userData || userData == null) {
      window.location.href = baseName + "/login";
    } else {
      setLoading(false);
    }
  }, 1000);

  if (loading) {
    return (
      <div style={{ height: "200px" }}>
        <div className={`overlay `}>
          <div className="loading " style={{ top: "25%", left: "40%" }}>
            <img src="/images/loader.gif" alt="loader" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div class="container-fluid">
        <div class="page-wrapper chiller-theme toggled row">
          <a id="show-sidebar" class="btn btn-sm btn-dark" href="#">
            <i class="fas fa-bars"></i>
          </a>
          <SidebarAdmin user={user} />

          <ContentAdmin />
        </div>
      </div>
    </>
  );
}
