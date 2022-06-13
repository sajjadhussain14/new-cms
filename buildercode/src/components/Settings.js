import React, { useState } from "react";
import { baseName } from "../config";
import { ContentAdmin, SettingsLayout, SidebarAdmin } from "./admin/AdminViews";

const Settings = () => {
  const [user, setUser] = useState("");

  const LogOutUser = () => {
    sessionStorage.clear("loginInfo");
    window.location.href = baseName + "/login";
  };

  return (
    <>
      <div class="container-fluid">
        <div class="page-wrapper chiller-theme toggled row">
          <a id="show-sidebar" class="btn btn-sm btn-dark" href="#">
            <i class="fas fa-bars"></i>
          </a>
          <SidebarAdmin user={user} />
          <SettingsLayout />
        </div>
      </div>
    </>
  );
};

export default Settings;
