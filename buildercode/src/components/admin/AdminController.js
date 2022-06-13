import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { baseName } from "../../config";

export const IsUserLogedIn = (navigate) => {
  const [user, setUser] = useState("");
  let userData = { user: "", pass: "", data: [] };
  userData = sessionStorage.getItem("loginInfo");
  userData = JSON.parse(userData);
  useEffect(() => {
    if (!userData || userData == null) {
      navigate("/builder/login");
    } else {
    }
  }, []);

  useEffect(() => {
    try {
      setUser(userData.data[0]);
    } catch (err) {}
  }, []);
};

export const LogOutUser = () => {
  sessionStorage.clear("loginInfo");
  window.location.href = baseName + "/login";
};
