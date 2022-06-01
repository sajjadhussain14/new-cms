import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const IsUserLogedIn = (navigate) => {
  const [user, setUser] = useState("");
  let userData = { user: "", pass: "", data: [] };
  userData = sessionStorage.getItem("loginInfo");
  console.log("userData", userData);
  userData = JSON.parse(userData);
  useEffect(() => {
    if (!userData || userData == null) {
      navigate("/login");
    } else {
    }
  }, []);

  useEffect(() => {
    try {
      setUser(userData.data[0]);
    } catch (err) {}
  }, []);
};
